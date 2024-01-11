import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class live extends Model<InferAttributes<live>, InferCreationAttributes<live>>{
    declare liveId: number;
    declare liveStatus: boolean;
    declare liveLink: string;
    declare liveTitle: string;
}

export function liveFactory(sequelize: Sequelize) {
    live.init({
        liveId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        liveStatus: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        liveLink: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        liveTitle: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
        {
            freezeTableName: true,
            tableName: 'live',
            sequelize,
            collate: 'utf8_general_ci',
        })
}