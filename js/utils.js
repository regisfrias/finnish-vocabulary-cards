export const shuffle = (array) => {
  let m = array.length
  let t
  let i

  while (m) {
    i = Math.floor(Math.random() * m--)
    t = array[m];
    array[m] = array[i]
    array[i] = t
  }
  return array
}

export const filter = (data) => {
  return Object.keys(data).reduce((acc, id) => {
    const item = data[id]
    const weight = data[id].weight
    const rand = Math.random()
    const randWeight = rand * weight
    item.filter = randWeight > 0.5
    if (randWeight <= 0.2) {
      return acc
    }
    return [...acc, item]
  }, [])
}
