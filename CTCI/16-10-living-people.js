export default function maxAliveYear(people) {
  // O(N)
  let birthYears = people.map(p => p.birth)
  
  // O(N)
  let deathYears = people.map(p => p.death)
    .filter(year => typeof year !== 'undefined')
  let maxBirthYear = Math.max(...birthYears)
  let maxDeathYear = Math.max(...deathYears)

  let minYear = Math.min(...birthYears)
  let maxYear = maxDeathYear ? maxDeathYear : maxBirthYear
  let aliveYears = Array(maxYear-minYear+1).fill(0)
  let maxAliveIndex = 0

  deathYears.forEach((deathYear, i) => {
    if(typeof deathYear !== 'undefined') {
      // calculate the starting index of the aliveYear
      // to modify for death (the "DC offset")
      
      let deathIndex = deathYear - minYear

      while(deathIndex < aliveYears.length) {
        aliveYears[deathIndex] -= 1
        deathIndex++
      }
    }
  })

  birthYears.forEach((birthYear, i) => {
    // calculate starting index of the aliveYears to modify
    // for birth
    let birthIndex = birthYears[i] - minYear

    while(birthIndex < aliveYears.length) {
      aliveYears[birthIndex] += 1
      if(aliveYears[birthIndex] > aliveYears[maxAliveIndex]) {
        maxAliveIndex = birthIndex
      }
      birthIndex++
    }
  })

  return minYear + maxAliveIndex
}