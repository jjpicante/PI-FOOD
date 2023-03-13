const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = recipeModel = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    Id: {
      type: DataTypes.UUID,
        defaultValue:UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    steps: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  
    
  
  
  });
};
