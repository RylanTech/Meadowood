import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class about extends Model<InferAttributes<about>, InferCreationAttributes<about>>{
    declare aboutId: number;
    declare aboutText: string;
    declare aboutTitle: string;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

export function AboutFactory(sequelize: Sequelize) {
    about.init({
        aboutId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        aboutText: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        aboutTitle: {
            type: DataTypes.STRING,
            allowNull: true
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
            tableName: 'about',
            sequelize,
            collate: 'utf8_general_ci',
        })
}
// CREATE TABLE about (
//     aboutId INT AUTO_INCREMENT PRIMARY KEY,
//     aboutText TEXT,
//     aboutTitle VARCHAR(255),
//     createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
//     updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
// ) ENGINE=InnoDB CHARSET=utf8 COLLATE=utf8_general_ci;
