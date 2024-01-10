const randomColor = () => {
  let colors = []
  const randomNumber = () => Math.floor(Math.random() * 255)

  for (let i = 0; i < 3; i++) {
    const num = randomNumber()
    colors.push(num)
  }

  return `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`
}

// const randomColor = () => {
//   const randomNumber = () => Math.floor(Math.random() * 255)
//   return `rgb(${randomNumber()}, ${Math.floor(randomNumber())}, ${Math.floor(randomNumber())})`
// }

console.log(randomColor())