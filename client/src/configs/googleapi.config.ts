import { GoogleDrive } from "@/models/google.model";

const googleDrive: GoogleDrive = {
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    redirectUri: "https://developers.google.com/oauthplayground",
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN as string,
};
export default googleDrive;
