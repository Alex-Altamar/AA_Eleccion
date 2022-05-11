import { Model, DataTypes } from 'sequelize';
import { database  } from '../database/bd';
import { Candidato } from './Candidato';
import { Elector } from './Elector';
export class Votacion extends Model {
    public id!: string;
}

export interface VotacionI {
    id: string;
    
   
}

Votacion.init(
    {
        CandidatoId: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        ElectorId: { 
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "votaciones",
        sequelize: database,
        timestamps: false
    }
)

Candidato.hasMany(Votacion);
Votacion.belongsTo(Candidato);

Elector.hasMany(Votacion);
Votacion.belongsTo(Elector);

Elector.belongsToMany(Candidato, {through: Votacion})