import { Model, DataTypes } from 'sequelize';
import { database  } from '../database/bd';
import { Votacion } from './Votacion';

export class Candidato extends Model {
    public nombre!: string;
    public patido!: string;
    public No_Tarjeton!: number;

}

export interface CandidatoI {
    nombre: string;
    patido: string;
    No_Tarjeton: number;
}

Candidato.init(
    {
        nombre: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        partido: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        No_Tarjeton: { 
            type: DataTypes.NUMBER,
            allowNull: false
        },
    },
    
    {
        tableName: "candidatos",
        sequelize: database,
        timestamps: false
    }
    
);

Candidato.hasMany(Votacion);
Votacion.belongsTo(Candidato);