export const formattedTime = timestamp => {
  const date = new Date(timestamp * 1000)
  const hours = date.getHours()
  const minutes = '0' + date.getMinutes()
  const seconds = '0' + date.getSeconds()
  return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
}

export const formattedDate = timestamp => {
  const date = new Date(timestamp)
  const month = date.getMonth()
  const day = date.getDay()
  const year = date.getFullYear()
  return month + '/' + day + '/' + year
}
