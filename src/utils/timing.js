/**
 * @param { number } now
 * @param { number } max
 * @return number
 */
export function calculatePercent(now, max) {
  return (now * 100) / max
}

/**
 * @param { number } elapsedSeconds
 * @return number
 */
export function displayFastingTime(elapsedSeconds) {
  const hours = Math.floor((elapsedSeconds / 60 / 60) % 24)
  const minutes = Math.floor((elapsedSeconds / 60) % 60)
  const seconds = Math.floor(elapsedSeconds % 60)

  return (
    String(hours).padStart(2, '0') +
    ':' +
    String(minutes).padStart(2, '0') +
    ':' +
    String(seconds).padStart(2, '0')
  )
}
