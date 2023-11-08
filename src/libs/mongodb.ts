import mongoose from "mongoose";

function createConnection(connectionString: string): mongoose.Connection {
    const connector = mongoose.createConnection(connectionString);

    // Connected
    connector.on("connected", function () {
        console.log(
            `MongoDB connection :: Successfully connected to ${connector.name}`,
        );
    });

    // Error
    connector.on("error", function (error) {
        console.log(
            `MongoDB connection :: Failed to connect ${connector.name} :: ${error.message}`,
        );
        connector.close().catch(() => {
            console.log("Closing connection failure");
        });
    });

    // Disconnected
    connector.on("disconnected", function () {
        console.log(`Server disconnected from: ${connector.name}`);
    });
    return connector;
}
// export const AdminConnector = createConnection(process.env.MONGO_ADMIN_URI!);
export const ClientConnector = createConnection(process.env.MONGO_CLIENT_URI!);
