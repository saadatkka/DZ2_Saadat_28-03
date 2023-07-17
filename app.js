// const city = ['Bishkek', 'Los Angeles', 'Chicago', 'New York', 'Houston', 'Dallas', 'Philadelphia', 'Seattle']
// const longCity = []
// const S = []
//
// for (let i = 0; i < city.length; i++){
//     if (city[i].length > 6){
//         longCity.push(city[i])
//     }
//     if (city[i].toLowerCase().includes('s')){
//         S.push(city[i])
//     }
// }
// console.log(longCity)
// console.log(S)

const color = prompt ('Введите цвет цветофора')
switch (color.toLowerCase()){
    case'красный':
        console.log ('Стоп')
        break
    case 'зеленый':
        console.log('Вперед')
        break
    case 'желтый':
        console.log('Жди')
        break

}

