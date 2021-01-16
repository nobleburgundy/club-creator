module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define("User", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  User.associate = function (models) {
    models.User.belongsTo(models.Club, {
      foreignKey: {
        name: "club_id",
        allowNull: false,
      },
    });
  };

  return User;
};
