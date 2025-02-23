// O(n)
const people = [
  {
    name: 'Alex',
    city: 'Moscow',
  },
  {
    name: 'Ivan',
    city: 'Moscow',
  },
  {
    name: 'Joe',
    city: 'New York'
  },
  {
    name: 'Johan',
    city: 'Berlin'
  },
  {
    name: 'Olaf',
    city: 'Berlin'
  },
  {
    name: 'Li',
    city: 'Tokyo'
  },
  {
    name: 'Donald',
    city: 'Los Angeles'
  },
  {
    name: 'Kim',
    city: 'London'
  },
  {
    name: 'Max',
    city: 'Moscow'
  },
  {
    name: 'Maria',
    city: 'Barcelona'
  },
  {
    name: 'Diego',
    city: 'Barcelona'
  },
  {
    name: 'Andres',
    city: 'Madrid'
  }
]

const groupByCity = (array) => {
  const result = {}

  for (const item of array) {
    const { city, name } = item

    if (!result[city]) {
      result[city] = name
    } else if(Array.isArray(result[city])) {
      result[city].push(name)
    } else {
      result[city] = [result[city], name]
    }
  }

  return result
}

// function groupByCity(array) {
//   const cityMap = new Map()
//   let namesInCity

//   for (const { name, city } of array) {
//     if (cityMap.has(city)) {
//       if (!Array.isArray(cityMap.get(city))) {
//         cityMap.set(city, [namesInCity])
//       }
//       namesInCity = cityMap.get(city)
//       namesInCity.push(name)
//     } else {
//       namesInCity = name
//     }

//     cityMap.set(city, namesInCity)
//   }

//   return Object.fromEntries(cityMap.entries())
// }

console.log(groupByCity(people))