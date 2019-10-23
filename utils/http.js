import {
  requestConfig as config
} from '../config.js'

export class HTTP {
  request(params) {
    if (!params.method) {
      params.method = 'GET'
    }
    console.log(params.data)
    wx.request({
      url: config.base_api_url + params.url,
      method: params.method,
      data: params.data,
      header: params.header,
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