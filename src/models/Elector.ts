import { Model, DataTypes } from 'sequelize';
import { database  } from '../database/bd';
import { Votacion } from './Votacion';


export class Elector extends Model {
    public nombre!: string;
    public mesa!: number;
    public ciudad!: number;
    public No_cedula!: number;

}

export interface ElectorI {
    nombre: string;
    mesa: number;
    ciudad: number;
    No_cedula: number;

}

Elector.init(
    {
        nombre: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        partido: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        No_cedula: { 
            type: DataTypes.NUMBER,
            allowNull: false
        },
    },
    
    {
        tableName: "electores",
        sequelize: database,
        timestamps: false
    }
    
);

Elector.hasMany(Votacion);
Votacion.belongsTo(Elector);