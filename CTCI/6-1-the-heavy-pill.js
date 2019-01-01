function Bottle(weight=1.0) {
  let pillWeight = weight
  this.setPillWeight = (weight) => {
    pillWeight = weight
  }
  this.getPillWeight = () => {
    return pillWeight
  }
}

// generic function used by generateBottles function
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function roundToNearestInt(num) {
  return Math.floor(num+0.5)
}

// Helper utility function
function printBottleWeights(bottles) {
  let weights = bottles.map(b => {
    return b.getPillWeight()
  })
}

function generateBottles(numBottles) {
  let bottles = Array.from(Array(numBottles).keys())
  bottles = bottles.map(b => {
    return new Bottle()
  })

  printBottleWeights(bottles)

  let rand = getRandomInteger(0,numBottles)
  let heavyBottle = bottles[rand]
  heavyBottle.setPillWeight(1.1)

  printBottleWeights(bottles)
  return bottles
}


function measureWeight(pills) {
  return pills.flatMap(x => x)
    .reduce((acc, curr) => acc+curr, 0)
}

function findHeavyBottle(bottles) {
  let pills = bottles.map((b, i) => {
    let numPills = i+1
    let pillWeights = Array(numPills).fill(b.getPillWeight())
    return pillWeights
  })

  let measuredWeight = measureWeight(pills)
  // If all bottles contain 1 gram pills, we expect total weight
  // to be 1*1 + 1*2 + ... + 1*20 = 1 + 2 + 3 + ... + 20
  // n * (n+1) / 2
  let numBottles = bottles.length
  let baseWeight = numBottles * (numBottles+1)/2
  let heavyIndex = (measuredWeight - baseWeight)/0.1
  return roundToNearestInt(heavyIndex)-1
}