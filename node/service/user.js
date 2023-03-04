import bcrypt from "bcrypt";
import User from "../models/user.js";
class UserService {
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
}

export default UserService;
