import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class staff extends Model<InferAttributes<staff>, InferCreationAttributes<staff>>{
    declare staffId: number;
    declare name: string;
    declare title: string;
    declare descsription: string;
    declare position: number;
    declare imageUrl: string;

}

export function staffFactory(sequelize: Sequelize) {
    staff.init({
        staffId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        descsription: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        position: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
        {
            freezeTableName: true,
            tableName: 'staff',
            sequelize,
            collate: 'utf8_general_ci',
        })
}