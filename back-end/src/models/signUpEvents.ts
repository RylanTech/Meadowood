import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class event extends Model<InferAttributes<event>, InferCreationAttributes<event>>{
    declare eventId: number;
    declare eventTitle: string;
    declare eventLocation: string;
    declare eventDescription: string;
    declare date: string;
}

export function EventFactory(sequelize: Sequelize) {
    event.init({
        eventId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        eventTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        eventLocation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        eventDescription: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
            freezeTableName: true,
            tableName: 'event',
            sequelize,
            collate: 'utf8_general_ci',
        })
}