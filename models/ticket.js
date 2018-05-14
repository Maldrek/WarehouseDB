module.exports = function(sequelize, DataTypes) {
    var Ticket = sequelize.define("Ticket", {
      incident_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      created: {
        type: DataTypes.DATETIME,
        allowNull: false,
        len: [1]
      },
      due_Date: {
        type: DataTypes.DATE,
        allowNull: false,
        len: [1]
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      requestor: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      phone_number: {
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
      image_pathway: {
        type: DataTypes.TEXT,
        allowNull: true,
        len: [1]
      }
    });
  
    Ticket.associate = function(models) {
      // We're saying that a Post should belong to an Requestor
      // A Post can't be created without an Requestor due to the foreign key constraint
      Ticket.belongsTo(models.Requestor, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Ticket;
  };
  