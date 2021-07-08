export const shuffle = (obj) => {
  let m = Object.keys(obj).length
  let t
  let i

  while (m) {
    i = Math.floor(Math.random() * m--)
    t = obj[m];
    obj[m] = obj[i]
    obj[i] = t
  }
  return obj
}
