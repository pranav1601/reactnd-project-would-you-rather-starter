export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion (tweet) {
  const { id, author,timestamp ,optionOne,optionTwo} = tweet

  return {
    author,
    id,
    timestamp,
    optionOne,
    optionTwo
  }
}
