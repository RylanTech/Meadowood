import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class header extends Model<InferAttributes<header>, InferCreationAttributes<header>>{
    declare headerId: number;
    declare headerCaption: string;
    declare headerLink: string;
}

export function headerFactory(sequelize: Sequelize) {
    header.init({
        headerId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        headerCaption: {
            type: DataTypes.STRING,
            allowNull: true
        },
        headerLink: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    },
        {
            freezeTableName: true,
            tableName: 'header',
            sequelize,
            collate: 'utf8_general_ci',
        })
}