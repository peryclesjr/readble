export const formattedTime = timestamp => {
  const date = new Date(timestamp * 1000)
  const hours = date.getHours()
  const minutes = '0' + date.getMinutes()
  const seconds = '0' + date.getSeconds()
  return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
}

export const formattedDate = timestamp => {
  const months = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
  ]
  const date = new Date(timestamp)
  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  return day + ' ' + month + ' ' + year
}
