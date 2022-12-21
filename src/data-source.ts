import "reflect-metadata"
import { DataSource } from "typeorm"
import { BookInfo } from "./books/entity/bookInfo.entity"

export const Data = new DataSource({
    type: "mysql",
    host: process.env.RDS_HOSTNAME,
    port: 3306,
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME,
    synchronize: true,
    logging: false,
    entities: [BookInfo],
    migrations: [],
    subscribers: [],
})
