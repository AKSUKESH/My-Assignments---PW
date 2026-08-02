import { DatabaseConnection } from "./01-DatabaseConnection";

export abstract class MySqlConnection implements DatabaseConnection {

    executeQuery() {
        console.log("Query Executed Successfully");
    }

    abstract connect(): void;

    abstract disconnect(): void;

    abstract executeUpdate(): void;

}