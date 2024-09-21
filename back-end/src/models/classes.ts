import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class classes extends Model<InferAttributes<classes>, InferCreationAttributes<classes>>{
    declare classId: number;
    declare className: string;
    declare classSubtitle: string;
    declare classLink: string;
    declare wednesdayTime: string;
    declare sundaySchoolTime: string;
    declare singleText: string;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

export function ClassFactory(sequelize: Sequelize) {
    classes.init({
        classId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        className: {
            type: DataTypes.STRING,
            allowNull: false
        },
        classSubtitle: {
            type: DataTypes.STRING,
            allowNull: true
        },
        classLink: {
            type: DataTypes.STRING,
            allowNull: true
        },
        wednesdayTime: {
            type: DataTypes.STRING,
            allowNull: true
        },
        sundaySchoolTime: {
            type: DataTypes.STRING,
            allowNull: true
        },
        singleText: {
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
            tableName: 'classes',
            sequelize,
            collate: 'utf8_general_ci',
        })
}