// Definicion del modelo Tips:

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Tip',
        {
            text: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Falta el texto de la Pista."}}
<<<<<<< HEAD
=======
            },
            accepted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
>>>>>>> c34933d6141ff5430697c1fd921b2195c38927a5
            }
        });
};
