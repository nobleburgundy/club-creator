module.exports = function (sequelize, DataTypes) {
  let Club = sequelize.define("Club", {
    club_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 155],
      },
    },
    club_description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255],
      },
    },
    location_city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    location_state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    location_zip: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 5],
      },
    },
    online_base_url: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1],
        isUrl: true,
      },
    },
    club_image_url: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1],
      },
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  Club.associate = function (models) {
    models.Club.hasMany(models.User, {
      foreignKey: {
        name: "creator_id",
        allowNull: true,
      },
    });
  };

  Club.associate = function (models) {
    models.Club.belongsToMany(models.User, {
      through: "JoinedClubs",
      foreignKey: {
        name: "club_id",
        allowNull: true,
      },
    });
  };

  return Club;
};
