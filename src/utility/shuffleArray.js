export const shuffleArray = (arr) => {
  let output = arr
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [output[i], output[j]] = [output[j], output[i]]
  }
  return output
}
