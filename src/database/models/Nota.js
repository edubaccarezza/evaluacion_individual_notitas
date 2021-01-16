module.exports = function(sequelize, dataTypes) {
    let alias = "Nota";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING,
            notNull: true
        },
        description: {
            type: dataTypes.STRING,
            notNull: true
        },
    }
    let config = {
        tableName: 'notas',
        timestamps: false
    }

    const Nota = sequelize.define(alias,cols,config)
    return Nota
}