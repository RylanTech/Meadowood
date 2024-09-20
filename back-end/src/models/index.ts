import { Sequelize } from "sequelize";
import { userFactory } from "./user";
import { liveFactory } from "./live";
import { clipFactory } from "./clips";
import { headerFactory } from "./header";
import { connectFactory } from "./connect";
import { staffFactory } from "./staff";
import { AboutFactory } from "./about";
import { EventFactory } from "./signUpEvents";
import { signUpUserFactory } from "./userSignedUp";
import 'dotenv/config'
import { ClassFactory } from "./classes";

const dbName = process.env.DB_NAME || '';
const username = process.env.DB_USER || '';
const password = process.env.DB_PASS || '';

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
staffFactory(sequelize)
AboutFactory(sequelize)
EventFactory(sequelize)
signUpUserFactory(sequelize);
ClassFactory(sequelize)

export const db = sequelize;