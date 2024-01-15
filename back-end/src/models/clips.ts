import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class clips extends Model<InferAttributes<clips>, InferCreationAttributes<clips>>{
    declare clipId: number;
    declare clipTitle:string;
    declare clipURL: string;
    declare clipThumbnail: string;
}

export function clipFactory(sequelize: Sequelize) {
    clips.init({
        clipId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        clipTitle: {
            type: DataTypes.STRING,
            allowNull: true
        },
        clipURL: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        clipThumbnail: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },
        {
            freezeTableName: true,
            tableName: 'clips',
            sequelize,
            collate: 'utf8_general_ci',
        })
}