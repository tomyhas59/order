import Post from "../models/post.js";
import User from "../models/user.js";
export default class PostService {
  static async create(req, res, next) {
    try {
      const post = await Post.create({
        content: req.body.content,
        userIdx: req.user.id,
      });
      const fullPost = await Post.findOne({
        where: { id: post.id },
        include: [
          {
            model: User,
            attributes: ["id", "email"],
          },
        ],
      });
      res.status(200).json(fullPost);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async readAll(req, res, next) {
    try {
      const posts = await Post.findAll({
        //  where: { userIdx: req.user.id },
        order: [["createdAt", "DESC"]],
        limit: 2,
        include: [
          {
            model: User,
            attributes: ["id", "email"],
          },
        ],
      });
      res.status(200).json(posts);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async read(req, res, next) {
    try {
      const postId = req.params.postId;
      const fullPost = await Post.findOne({
        where: { id: postId },
        attributes: { exclude: "updatedAt" },
        include: [
          {
            model: User,
            attributes: ["id", "email"],
          },
        ],
      });
      res.status(200).json(fullPost);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async update(req, res, next) {
    try {
      const postId = req.query.postId;
      await Post.update(
        {
          content: req.body.content,
        },
        {
          where: {
            id: postId,
            userIdx: req.user.id,
          },
        }
      );
      res.status(200).json({
        postId: postId,
        content: req.body.content,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async delete(req, res, next) {
    try {
      const postId = req.params.postId;
      await Post.destroy({
        where: {
          id: req.params.postId,
          userIdx: req.user.id,
        },
      });
      res.status(200).json({ PostId: postId });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}
