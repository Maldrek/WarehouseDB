// module.exports = function(sequelize, DataTypes) {
//     var Requestor = sequelize.define("Requestor", {
//       // Giving the Requestor model a name of type STRING
//       name: DataTypes.STRING
//     });
  
//     Requestor.associate = function(models) {
//       // Associating Requestor with Tickets
//       // When an Requestor is deleted, also delete any associated Tickets
//       Requestor.hasMany(models.Ticket, {
//         onDelete: "cascade"
//       });
//     };
  
//     return Requestor;
//   };
  