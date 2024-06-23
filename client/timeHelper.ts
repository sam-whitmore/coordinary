export default function dateMath(date: Date) {
  const hour = 3600000
  const day = hour * 24
  const week = day * 7
  const now = new Date()
  const then = new Date(date)
  let time
  const years = now.getFullYear() - then.getFullYear() // = day*365
  if (years >= 1) {
    time = Math.floor(years)
    return `${time} ${time > 1 ? 'years' : 'year'} ago`
  }
  const months = (((now.getMonth() + 12 - then.getMonth()) % 12) / day) * 30 //sketchy?
  if (months >= 1) {
    time = Math.floor(months)
    return `${time} ${time > 1 ? 'months' : 'month'} ago`
  }
  const diff = now - then
  const weeks = diff / week
  if (weeks >= 1) {
    time = Math.floor(weeks)
    return `${time} ${time > 1 ? 'weeks' : 'week'} ago`
  }
  const days = diff / day
  if (days >= 1) {
    time = Math.floor(days)
    return `${time} ${time > 1 ? 'days' : 'day'} ago`
  }
  const hours = diff / hour
  if (hours >= 1) {
    time = Math.floor(hours)
    return `${time} ${time > 1 ? 'hours' : 'hour'} ago`
  }
  return 'less than an hour ago'
}
