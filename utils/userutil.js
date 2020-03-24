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
    return !JHObjectUtils.isNullOrUndefined(this.user)
  }
}

export { UserUtils }