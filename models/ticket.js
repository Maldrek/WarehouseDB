module.exports = function(sequelize, DataTypes) {
    var Ticket = sequelize.define("Ticket", {
      incident_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      item: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      building: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      room_number: {
        type: DataTypes.STRING,
        allowNull: false,
        default: false,
        len: [1]
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        default: false,
        len: [1]
      },
      descript: {
        type: DataTypes.TEXT,
        allowNull: false,
        default: false,
        len: [1]
      },
      delivery_option: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      due_date: {
        type: DataTypes.DATE,
        allowNull: false,
        len: [1]
      },
      intials: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
        len: [1]
      },
      completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
        len: [1]
      },
      closed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
        len: [1]
      },
    });
  
  //   Ticket.associate = function(models) {
  //     // We're saying that a Post should belong to an Requestor
  //     // A Post can't be created without an Requestor due to the foreign key constraint
  //     Ticket.belongsTo(models.Requestor, {
  //       foreignKey: {
  //         allowNull: false
  //       }
  //     });
  //   };
  
  //   return Ticket;
  // };
  