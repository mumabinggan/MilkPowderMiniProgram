import {
  User
} from '../models/user.js'

import {
  JHObjectUtils
} from 'objectutils.js'

import {
  JHStorageUtils
} from 'storageutils.js'

class UserUtils {

  static user = null

  static userStoreKey = "kUserKeyyyy"

  static fetchUser() {
    let str = JHStorageUtils.fetchItemSync(this.userStoreKey)
    if (!JHObjectUtils.isNullOrEmptyOrUndefined(str)) {
      let item = JSON.parse(str)
      this.user = item
    }
  }

  static clearUser() {
    if (this.isLogined()) {
      JHStorageUtils.delItemAsync(this.userStoreKey)
      this.user = null
    }    
  }

  static setUser(user) {
    if (user == null) {
      this.clearUser()
    } else {
      JHStorageUtils.addItemAsync(this.userStoreKey, JSON.stringify(user))
    }
    this.user = user
  }

  static isLogined() {
    return !JHObjectUtils.isNullOrUndefined(this.user)
  }

  static userId() {
    if (this.isLogined()) {
      return this.user.userId
    }
    return 0
  }

  static token() {
    if (this.isLogined()) {
      return this.user.token
    }
    return null
  }
}

export { UserUtils }