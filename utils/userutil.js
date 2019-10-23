import {
  User
} from '../models/user.js'

class UserUtils {

  static user = null

  static clearUser() {
    user = null
  }

  static isLogined() {
    return user != null
  }
}

export { UserUtils }