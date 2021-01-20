module.exports = function(sequelize, DataTypes) {
    const JoinedClubs = sequelize.define("JoinedClubs", {
        user_id: DataTypes.INTEGER,
        club_id: DataTypes.INTEGER
    });

    return JoinedClubs;
}
