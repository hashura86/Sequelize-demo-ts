import { QueryTypes, Sequelize } from 'sequelize'

const db = new Sequelize('app', '', '', {
    storage: "./database.sqlite",
    dialect: 'sqlite',
    logging: false
})

// -------------- RAW QUERIES ---------------------------


// db.query("DROP TABLE `paciente`")


const query1 = async () => {
    const pacientes = await db.query("SELECT * FROM `pacientes`", {type: QueryTypes.SELECT})
    console.log(pacientes)
}


const query2 = async () => {
    const paciente = await db.query("SELECT * FROM `pacientes` WHERE nome LIKE 'B'", {type: QueryTypes.SELECT})
    console.log(paciente)
}

const query3 = async () => {
    const paciente = await db.query("UPDATE `pacientes` SET descricao = 'lenda absoluta' WHERE nome = 'B'", {type: QueryTypes.UPDATE})
}

const query4 = async () => {
    const paciente = await db.query("INSERT INTO `pacientes` VALUES('9af1a95f-f403-47c8-9a5f-ed9a55ce17a4','Jo','0','como q escrev','2023-01-30 17:04:14.198 +00:00','2023-01-30 17:04:14.198 +00:00')")
}

(async() => { 
    // console.log(query1())
    // console.log(query2());
    // query3()
    // query4()
})()

export default db