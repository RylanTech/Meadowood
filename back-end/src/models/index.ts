import { Sequelize } from "sequelize";
import { userFactory } from "./user";
import { liveFactory } from "./live";
import { clipFactory } from "./clips";
import { headerFactory } from "./header";
import { connectFactory } from "./connect";

const dbName = 'meadowood';
const username = 'root';
const password = '0624';

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

userFactory(sequelize)
liveFactory(sequelize)
clipFactory(sequelize)
headerFactory(sequelize)
connectFactory(sequelize)

export const db = sequelize;