module.exports = function (sequelize, DataTypes) {
    let Event = sequelize.define("Event", {
        event_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        date_time: {
            type: DataTypes.DATETIME,
            allowNull: false,
            validate: {
                len: [1]
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
        location_url: {
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
        event_description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        }
    });
    return Event;
};