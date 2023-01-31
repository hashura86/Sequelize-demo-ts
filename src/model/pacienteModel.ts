import { DataTypes, Model } from "sequelize"
import db from "../config/db"

interface atributos {
    id: string,
    nome: string,
    faltas: number,
    descricao: string
}

export class PacienteModel extends Model<atributos> {}

PacienteModel.init({
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    faltas: {
        type: DataTypes.NUMBER,
        defaultValue: 0
    },
    descricao: {
        type: DataTypes.STRING,
        defaultValue: "",
    }

}, {
    sequelize: db,
    tableName: "pacientes"
})