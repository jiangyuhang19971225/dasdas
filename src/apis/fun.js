export const getBase64 = function (url, callback) {
  var Img = new Image()
  var dataURL = ''
  Img.src = url + '?v=' + Math.random()
  Img.setAttribute('crossOrigin', 'Anonymous')
  Img.onload = function () {
    var canvas = document.createElement('canvas')
    var width = Img.width
    var height = Img.height
    canvas.width = width
    canvas.height = height
    canvas.getContext('2d').drawImage(Img, 0, 0, width, height)
    dataURL = canvas.toDataURL('image/jpeg')
    return callback ? callback(dataURL) : null
  }
}
export const getNowDate = function () {
  const date = new Date()
  const y = date.getFullYear()
  let m = date.getMonth() + 1
  let d = date.getDate()
  let H = date.getHours()
  let mm = date.getMinutes()
  let s = date.getSeconds()
  m = m < 10 ? '0' + m : m
  d = d < 10 ? '0' + d : d
  H = H < 10 ? '0' + H : H
  mm = mm < 10 ? '0' + mm : mm
  s = s < 10 ? '0' + s : s

  return y + '-' + m + '-' + d + ' ' + H + ':' + mm + ':' + s
}
