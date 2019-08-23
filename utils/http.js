import {
  requestConfig as config
} from '../config.js'

export class HTTP {
  request(params) {
    if (!params.method) {
      params.method = 'GET'
    }
    wx.request({
      url: config.base_api_url + params.url,
      method: params.method,
      data: params.data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success: (res) => {
        if (params.success) {
          params.success(res)
        }
      },
      fail: (err) => {
        if (params.error) {
          params.error(err);
        }
      }
    })
  }

  _showErrorToast(errCode) {
    wx.showToast({
      title: '',
      icon: 'none',
      duration: 3000
    })
  }
}