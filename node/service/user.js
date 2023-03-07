import bcrypt from "bcrypt";
import User from "../models/user.js";
import passport from "passport";
export default class UserService {
  static async signUp(req, res, next) {
    try {
      console.log(req.body);
      const exUser = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (exUser) {
        return res.status(403).send("이미 사용중인 이메일입니다");
      }
      const hashedPassword = await bcrypt.hash(req.body.password, 12);

      await User.create({
        email: req.body.email,
        password: hashedPassword,
      });
      res.status(200).send("ok");
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

  static async login(req, res, next) {
    passport.authenticate("local", (err, user, message) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      if (message) {
        return res.status(401).send(message);
      }
      return req.login(user, async (loginErr) => {
        if (loginErr) {
          console.error(err);
          return next(err);
        }
        const fullUser = await User.findOne({
          where: { id: user.id },
          attributes: {
            exclude: ["password"],
          },
        });
        return res.status(200).json(fullUser);
      });
    })(req, res, next);
  }
}
