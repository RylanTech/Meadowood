import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class connect extends Model<InferAttributes<connect>, InferCreationAttributes<connect>>{
    declare connectId: number;
    declare connectName:string;
    declare connectEmail: string;
    declare connectPhone: string;
    declare dateOfBirth: string;
    declare address: string;
    declare connectNotes: string;
}

export function connectFactory(sequelize: Sequelize) {
    connect.init({
        connectId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        connectName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        connectEmail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        connectPhone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dateOfBirth: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        connectNotes: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
        {
            freezeTableName: true,
            tableName: 'connect',
            sequelize,
            collate: 'utf8_general_ci',
        })
}