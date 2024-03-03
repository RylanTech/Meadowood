import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { event } from "./signUpEvents";

export class signUpUser extends Model<InferAttributes<signUpUser>, InferCreationAttributes<signUpUser>>{
    declare signedUpUserId: number;
    declare userEmail: string;
    declare userPhone: string;
    declare userName: string;
    declare eventId: number;
    declare createdAt: Date;
    declare updatedAt: Date;
}

export function signUpUserFactory(sequelize: Sequelize) {
    signUpUser.init({
        signedUpUserId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        userEmail: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        userPhone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        eventId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
        {
            freezeTableName: true,
            tableName: 'signUpUser',
            sequelize,
            collate: 'utf8_general_ci',
        })
}
export function AssociateEventUser() {
    event.hasMany(signUpUser, { foreignKey: "eventId" });
    signUpUser.belongsTo(event, { foreignKey: "eventId" });
}