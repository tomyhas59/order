import bcrypt from "bcrypt";

class UserService {
  async signUp(req, res, next) {
    try {
    } catch (err) {
      console.error(err);
      next(err);
    }
  }
}

export default UserService;
