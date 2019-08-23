import {
  User
} from '../models/user.js'

class UserUtils {

  static user = new User()

  static clearUser() {
    user = null
  }

  static isLogined() {
    return user == null
  }
}

export { UserUtils }