import {
  HTTP
} from '../utils/http.js'

import {
  apiConfig
} from '../api.js'

let http = new HTTP()

class HomeViewModel {
  fetchItem(callback) {
    http.request({
      url: apiConfig.home,
      method: 'POST',
      success: (res) => {
        if (res.code == 0) {
          callback.success(res)
        } else {
          callback.fail(res.msg)
        }
      },
      fail: (err) => {
        callback.fail(err)
      }
    })
  }
}

export { HomeViewModel }