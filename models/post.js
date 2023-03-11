import Sequelize from "sequelize";

export default class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        content: {
          type: Sequelize.TEXT,
          allowNull: false,
          comment: "이메일",
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Post",
        tableName: "Posts",
        charset: "utf8mb4",
        collage: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Post.belongsTo(db.User, { foreignKey: "userIdx" });
  }
}
