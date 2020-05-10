import {
  requestConfig as config
} from '../config.js'

import {
  UserUtils
} from 'userutil.js'

export class HTTP {
  request(params) {
    if (!params.method) {
      params.method = 'GET'
    }
    console.log(params.data)
    let request = wx.request({
      url: config.base_api_url + params.url,
      method: params.method,
      data: params.data,
      // header: params.header,
      header: {
        'token': UserUtils.token(),
      },
      success: (res) => {
        if (params.success) {
          params.success(res.data)
        }
      },
      fail: (err) => {
        console.log(err)
        if (params.fail) {
          params.fail(err);
        }
      }
    })
    return request
  }

  _showErrorToast(errCode) {
    wx.showToast({
      title: '',
      icon: 'none',
      duration: 3000
    })
  }

  static isAbort(msg) {
    return msg == "request:fail abort"
  }
}