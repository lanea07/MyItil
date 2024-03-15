import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource( {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "myitil",
    password: "T7Wopor5S2xe",
    database: "myitil",
    synchronize: true,
    logging: false,
    entities: [ User ],
    migrations: [],
    subscribers: [],
} )
