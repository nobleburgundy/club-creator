module.exports = function (sequelize, DataTypes) {
  let Club = sequelize.define("Club", {
    club_name: DataTypes.STRING,
  });
  return Club;
};
