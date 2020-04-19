const numOfBurgers = (tomatoSlices, cheeseSlices) => {
  const jumbos = tomatoSlices / 2 - cheeseSlices
  const smalls = cheeseSlices - jumbos
  if (jumbos !== Math.floor(jumbos) || jumbos < 0 || smalls < 0) return []
  
  return [jumbos, smalls]
};