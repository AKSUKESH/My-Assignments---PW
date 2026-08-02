import { MySqlConnection } from "./02-MySqlConnection";

class PlaywrightConnection extends MySqlConnection {

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

objConnection.executeQuery();

objConnection.executeUpdate();

objConnection.disconnect();