import {
  User
} from '../models/user.js'

import {
  JHObjectUtils
} from 'objectutils.js'

class UserUtils {

  static user = null

  static clearUser() {
    this.user = null
  }

  static isLogined() {
    console.log("=====++++++")
    return !JHObjectUtils.isNullOrUndefined(this.user)
  }

  static userId() {
    if (this.isLogined) {
      return this.user.userId
    }
    return 0
  }
}

export { UserUtils }