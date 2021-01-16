module.exports = function (sequelize, DataTypes) {
  let Club = sequelize.define("Club", {
    club_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 155]
      }
    },
    club_description: {
      type: DataTypes.SRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    location_city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    location_state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    location_zip: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    online_base_url: {
      type:  DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
        isUrl: true
      }
    },
    club_image_url: {
      type:  DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
        isUrl: true
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  });
  return Club;
};
