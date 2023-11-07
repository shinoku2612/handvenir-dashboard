import googleDrive from "@/configs/googleapi.config";
import { GaxiosResponse } from "gaxios";
import { drive_v3, google } from "googleapis";
import stream, { PassThrough } from "stream";

const oauth2Client = new google.auth.OAuth2(
    googleDrive.clientId,
    googleDrive.clientSecret,
    googleDrive.redirectUri,
);
oauth2Client.setCredentials({ refresh_token: googleDrive.refreshToken });
const drive = google.drive({
    version: "v3",
    auth: oauth2Client,
});

export async function uploadFile(
    fileName: string,
    file: File | Blob,
): Promise<drive_v3.Schema$File> {
    try {
        const existingFileName: GaxiosResponse<drive_v3.Schema$FileList> =
            await drive.files.list({
                q: `name='${fileName}'`,
                fields: "files(id)",
                spaces: "drive",
            });
        const files: drive_v3.Schema$File[] = existingFileName.data.files!;
        files.forEach((file: drive_v3.Schema$File) => {
            drive.files.delete({
                fileId: file.id!,
            });
        });
        const imageArrayBuffer: ArrayBuffer = await file.arrayBuffer();
        const imageBuffer: Buffer = Buffer.from(imageArrayBuffer);

        const bufferStream: PassThrough = new PassThrough();
        bufferStream.end(imageBuffer);

        const result: GaxiosResponse<drive_v3.Schema$File> =
            await drive.files.create({
                requestBody: {
                    name: fileName,
                    mimeType: "image/*",
                },
                media: {
                    mimeType: "image/*",
                    body: bufferStream,
                },
                fields: "id, name, webContentLink, webViewLink",
            });
        if (result.data.id) {
            drive.permissions.create({
                fileId: result.data.id,
                requestBody: {
                    role: "reader",
                    type: "anyone",
                },
            });
        }
        return result.data;
    } catch (error) {
        return error as drive_v3.Schema$File;
    }
}
