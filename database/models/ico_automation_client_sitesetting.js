'use strict';
module.exports = (sequelize, DataTypes) => {
  const ico_automation_client_siteSetting = sequelize.define('ico_automation_client_siteSetting', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
    host: {
      type:DataTypes.STRING
    },
    uniqueId:
    {
      allowNull:false,
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },
    siteName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coinName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    siteLogo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    homeURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    aboutusURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },


    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {});
  ico_automation_client_siteSetting.associate = function(models)
  {
    // associations can be defined here
    ico_automation_client_siteSetting.belongsTo(models.ico_automation_client,
      {
        foreignKey: 'client_id', // add foreignKey to client
        onDelete: 'CASCADE',
      }
    );


  };
  return ico_automation_client_siteSetting;
};
