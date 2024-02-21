export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  imgURL: string;
  url: string;
}

export const products = [
  {
    id: 1,
    name: ' Apple iPhone 13 128Gb Midnight черный',
    price: 290338 ,
    description: "-технология NFC: Да \n -цвет: черный\n -тип экрана: OLED, Super Retina XDR\n-диагональ: 6.1 дюйм\n-размер оперативной памяти: 4 ГБ\n-процессор: 6-ядерный Apple A15 Bionic\n-объем встроенной памяти: 128.0 ГБ\n-емкость аккумулятора: 3095.0 мАч",
    rating: 5, 
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large",
    url: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000"
  },  
  {
    id: 2,
    name: 'Samsung Galaxy S23 Ultra 12 ГБ/512 ГБ черный',
    price: 523825,
    description: "-технология NFC: Да \n -цвет: черный\n -тип экрана: Dynamic AMOLED 2X, HDR10+, Corning Gorilla Glass Victus+, Super Retina XDR\n-диагональ: 6.8 дюйм\n-размер оперативной памяти: 12 ГБ\n-процессор: 8-ядерный Snapdragon 8 Gen 2\n-объем встроенной памяти: 512.0 ГБ\n-емкость аккумулятора: 5000.0 мАч",
    rating: 5, 
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h6c/h7c/69067267407902.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-512-gb-chernyi-108916047/?c=750000000"
  },
  {
    id: 3,
    name: 'Буратино лимонад буратино 2 л',
    price: 475,
    description: 'вкус: буратино',
    rating: 5, 
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hd4/h47/63822392066078.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/buratino-limonad-buratino-2-l-100208155/?c=750000000"
  },
  {
    id: 4,
    name: 'Аралтуз поваренная соль йодированная помол средний 1000 г',
    price: 73,
    description: 'сорт: высший',
    rating: 5, 
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h3b/hcb/83296490618910.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/araltuz-povarennaja-sol-iodirovannaja-pomol-srednii-1000-g-100218821/?c=750000000"
  },
  {
    id: 5,
    name: 'Мукалтин таблетки 50 мг 10 шт',
    price: 205,
    description: 'возрастные ограничения: с 6 лет',
    rating: 5, 
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hd3/h1c/83678055694366.png?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/mukaltin-tabletki-50-mg-10-sht-100990373/?c=750000000"
  },
  {
    id: 6,
    name: 'Терафлю порошок 325 мг 10 шт',
    price: 2260,
    description: 'возрастные ограничения: с 18 лет',
    rating: 5, 
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/heb/hf3/64143706423326.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/teraflju-poroshok-325-mg-10-sht-101114328/?c=750000000"
  },
  {
    id: 7,
    name: 'Смартфон Xiaomi Redmi 12 4G 8 ГБ/256 ГБ серебристый',
    price: 72716,
    description: 'технология NFC: Нет, цвет: черный, тип экрана: IPS, сенсорный, диагональ: 6.79 дюйм, размер оперативной памяти: 8 ГБ',
    rating: 5, 
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h54/hfb/81334459990046.png?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-serebristyi-110917697/?c=750000000"
  },
  {
    id: 8,
    name: 'Ручка шариковая Cello Maxriter XS 1 шт, цвет чернил синий  ',
    price: 475,
    description: 'форма корпуса: круглый',
    rating: 5, 
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h72/h3c/63859319341086.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/ruchka-sharikovaja-cello-maxriter-xs-1-sht-tsvet-chernil-sinii-100369607/?c=750000000"
  },
  {
    id: 9,
    name: 'Смартфон Xiaomi Redmi 12 4G 8 ГБ/256 ГБ черный',
    price: 73077,
    description: 'технология NFC: Нет, цвет: черный, тип экрана: IPS, сенсорный, диагональ: 6.79 дюйм, размер оперативной памяти: 8 ГБ',
    rating: 5, 
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h75/hbc/81335343775774.png?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000"
  },
  {
    id: 10,
    name: 'Смартфон Xiaomi Redmi 12C 4 ГБ/128 ГБ серый',
    price: 48283,
    description: 'технология NFC: Нет, цвет: черный, тип экрана: IPS, сенсорный, диагональ: 6.79 дюйм, размер оперативной памяти: 8 ГБ',
    rating: 5, 
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/ha6/h82/69586957697054.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/xiaomi-redmi-12c-4-gb-128-gb-seryi-109149311/?c=750000000"
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/