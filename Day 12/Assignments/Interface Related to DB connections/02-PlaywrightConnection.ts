import { DatabaseConnection } from "./01-DatabaseConnection";

class PlaywrightConnection implements DatabaseConnection {

    connect(): void {
        console.log("Database Connected Successfully");
    }

    disconnect(): void {
        console.log("Database Disconnected Successfully");
    }

    executeUpdate(): void {
        console.log("Database Updated Successfully");
    }

}

const objConnection = new PlaywrightConnection();

objConnection.connect();

objConnection.executeUpdate();

objConnection.disconnect();