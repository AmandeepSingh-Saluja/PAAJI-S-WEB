
import type { MenuItem } from '@/types';

const mockMenuItems: MenuItem[] = [
  // Veg Soups (Category: Starters, isVegetarian: true)
  {
    id: 'vgsoup-1',
    name: 'Clear Sour Soup',
    price: 50,
    description: 'A light and tangy clear soup, perfect for starting your meal.',
    imageUrl: 'src\lib\img\Clear Sour Soup.jpg',
    imageHint: 'clear soup',
    category: 'Starters',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgsoup-2',
    name: 'Veg Manchow Soup',
    price: 70,
    description: 'A popular Indo-Chinese soup with chopped vegetables, soy sauce, and garlic.',
    imageUrl: 'src\lib\img\Veg Manchow Soup.jpg',
    imageHint: 'manchow soup',
    category: 'Starters',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgsoup-3',
    name: 'Veg Manchurian Soup',
    price: 70,
    description: 'A savory soup with the classic taste of Manchurian.',
    imageUrl: 'src\lib\img\Veg Manchurian Soup.jpg',
    imageHint: 'manchurian soup',
    category: 'Starters',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgsoup-4',
    name: 'Hot and Sour Soup',
    price: 70,
    description: 'A classic spicy and tangy soup loaded with mixed vegetables.',
    imageUrl: 'src\lib\img\Hot and Sour Soup.jpg',
    imageHint: 'hot sour',
    category: 'Starters',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgsoup-5',
    name: 'Veg Noodles Soup',
    price: 70,
    description: 'A light soup with noodles and fresh vegetables.',
    imageUrl: 'src\lib\img\Veg Noodles Soup.jpg',
    imageHint: 'noodles soup',
    category: 'Starters',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
{
    id: 'vgsoup-7',
    name: 'Sweet Corn Soup',
    price: 90,
    description: 'A creamy and comforting soup made with sweet corn kernels.',
    imageUrl: 'src\lib\img\Sweet Corn Soup.jpg',
    imageHint: 'sweet corn',
    category: 'Starters',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },

  // Veg Starters (Category: Starters, isVegetarian: true)
  {
    id: 'vgstarter-1',
    name: 'Veg Manchurian Dry',
    price: 70,
    description: 'Crispy deep-fried vegetable balls tossed in a savory and tangy Manchurian sauce.',
    imageUrl: 'src\lib\img\Veg Manchurian Dry.webp',
    imageHint: 'veg manchurian',
    category: 'Starters',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgstarter-2',
    name: 'Veg Manchurian Gravy',
    price: 80,
    description: 'Vegetable balls in a savory and tangy Manchurian gravy.',
    imageUrl: 'src\lib\img\Veg Manchurian.jpeg',
    imageHint: 'manchurian gravy',
    category: 'Starters',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgstarter-3',
    name: 'Veg 65',
    price: 80,
    description: 'A spicy and crispy deep-fried appetizer made with mixed vegetables and authentic spices.',
    imageUrl: 'src\lib\img\Veg 65.jpg',
    imageHint: 'veg sixtyfive',
    category: 'Starters',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgstarter-5',
    name: 'Soya Chilli',
    price: 80,
    description: 'Soya chunks cooked with bell peppers and onions in a spicy chilli sauce.',
    imageUrl: 'src\lib\img\Soya Chilli.jpg',
    imageHint: 'soya chilli',
    category: 'Starters',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgstarter-6',
    name: 'Potato Chilli',
    price: 100,
    description: 'Crispy potato bites tossed in a flavorful chilli sauce.',
    imageUrl: 'src\lib\img\Potato Chilli.jpg',
    imageHint: 'potato chilli',
    category: 'Starters',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgstarter-7',
    name: 'Honey Chilli Potato',
    price: 100,
    description: 'Crispy fried potato fingers glazed with a sweet and spicy honey chilli sauce.',
    imageUrl: 'src\lib\img\Honey Chilli Potato.jpg',
    imageHint: 'honey potato',
    category: 'Starters',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgstarter-8',
    name: 'French Fries',
    price: 70,
    description: 'Classic deep-fried potato strips, served perfectly golden and crisp.',
    imageUrl: 'src\lib\img\French Fries.jpg',
    imageHint: 'french fries',
    category: 'Starters',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgstarter-9',
    name: 'Peri Peri Fries',
    price: 80,
    description: 'Crispy french fries tossed in a spicy peri peri seasoning.',
    imageUrl: 'src\lib\img\Peri Peri Fries.jpg',
    imageHint: 'peri fries',
    category: 'Starters',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
 
  {
    id: 'vgstarter-12',
    name: 'Paneer Chilli Dry',
    price: 90,
    description: 'Cubes of soft paneer tossed with bell peppers and onions in a spicy soy-based sauce.',
    imageUrl: 'src\lib\img\Paneer Chilli Dry.jpg',
    imageHint: 'paneer chilli',
    category: 'Starters',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgstarter-13',
    name: 'Paneer Chilli Gravy',
    price: 100,
    description: 'Soft paneer cubes in a spicy and savory chilli gravy.',
    imageUrl: 'src\lib\img\Paneer Chilli Dry.jpg',
    imageHint: 'paneer gravy',
    category: 'Starters',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgstarter-14',
    name: 'Paneer 65 Dry',
    price: 100,
    description: 'Spicy and crispy deep-fried paneer bites, marinated with authentic spices.',
    imageUrl: 'src\lib\img\Paneer 65 Dry.jpg',
    imageHint: 'paneer sixtyfive',
    category: 'Starters',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgstarter-15',
    name: 'Paneer Manchurian Dry',
    price: 80,
    description: 'Soft paneer cubes tossed in a tangy and savory Manchurian sauce.',
    imageUrl: 'src\lib\img\Paneer Manchurian Dry.jpg',
    imageHint: 'paneer manchurian',
    category: 'Starters',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  // Veg Rice (Category: Mains, isVegetarian: true)
  {
    id: 'vgmain-1',
    name: 'Veg Fried Rice',
    price: 70,
    description: 'Classic Indo-Chinese style fried rice tossed with assorted fresh vegetables.',
    imageUrl: 'src\lib\img\Veg Fried Rice.jpg',
    imageHint: 'veg friedrice',
    category: 'Mains',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgmain-2',
    name: 'Veg Schezwan Fried Rice',
    price: 80,
    description: 'Spicy Schezwan style fried rice packed with assorted vegetables.',
    imageUrl: 'src\lib\img\Veg Schezwan Fried Rice.jpg',
    imageHint: 'veg schezwanrice',
    category: 'Mains',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgmain-3',
    name: 'Veg Hong Kong Rice',
    price: 100,
    description: 'Aromatic fried rice cooked in authentic Hong Kong style with vegetables.',
    imageUrl: 'src\lib\img\Veg Hong Kong Rice.jpg',
    imageHint: 'veg hongkong',
    category: 'Mains',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
 
  {
    id: 'vgmain-5',
    name: 'Combination (Rice + Noodles)',
    price: 80,
    description: 'A satisfying mix of seasoned fried rice and stir-fried noodles with vegetables.',
    imageUrl: 'src\lib\img\Combination (Rice + Noodles).jpeg',
    imageHint: 'veg combination',
    category: 'Mains',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgmain-6',
    name: 'Veg Burnt Garlic Fried Rice',
    price: 100,
    description: 'Fragrant fried rice infused with the smoky flavor of burnt garlic.',
    imageUrl: 'src\lib\img\Veg Burnt Garlic Fried Rice.jpg',
    imageHint: 'veg burntgarlic',
    category: 'Mains',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgmain-7',
    name: 'Veg Manchurian Fried Rice',
    price: 90,
    description: 'Fried rice tossed with delicious vegetable Manchurian balls.',
    imageUrl: 'src\lib\img\Veg Manchurian Fried Rice.jpg',
    imageHint: 'manchurian rice',
    category: 'Mains',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgmain-8',
    name: 'Veg Triple Rice',
    price: 90,
    description: 'A layered dish combining fried rice, hakka noodles, and a vegetable gravy.',
    imageUrl: 'src\lib\img\Veg Triple Rice.jpg',
    imageHint: 'veg triplerice',
    category: 'Mains',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgmain-9',
    name: 'Veg Paneer Fried Rice',
    price: 90,
    description: 'Fried rice with soft paneer cubes and mixed vegetables.',
    imageUrl: 'src\lib\img\Veg Paneer Fried Rice.jpg',
    imageHint: 'paneer friedrice',
    category: 'Mains',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgmain-10',
    name: 'Veg Corn Fried Rice',
    price: 90,
    description: 'A delightful combination of fried rice with sweet corn and vegetables.',
    imageUrl: 'src\lib\img\Veg Corn Fried Rice.jpg',
    imageHint: 'corn friedrice',
    category: 'Mains',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
 
  // Veg Noodles (Category: Mains, isVegetarian: true)
  {
    id: 'vgmain-12',
    name: 'Veg Hakka Noodles',
    price: 70,
    description: 'Classic stir-fried noodles tossed with crunchy vegetables in a savory Hakka style.',
    imageUrl: 'src\lib\img\Veg Hakka Noodles.webp',
    imageHint: 'veg hakkanoodles',
    category: 'Mains',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgmain-13',
    name: 'Veg Schezwan Noodles',
    price: 80,
    description: 'Spicy Schezwan style noodles stir-fried with mixed vegetables.',
    imageUrl: 'src\lib\img\Veg Schezwan Noodles.jpg',
    imageHint: 'veg schezwannoodles',
    category: 'Mains',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  
  {
    id: 'vgmain-18',
    name: 'Veg Manchurian Noodles',
    price: 90,
    description: 'Noodles tossed with delicious vegetable Manchurian balls.',
    imageUrl: 'src\lib\img\Veg Manchurian Noodles.jpg',
    imageHint: 'manchurian noodles',
    category: 'Mains',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgmain-19',
    name: 'Veg Triple Noodles',
    price: 90,
    description: 'A layered dish of noodles served in three different styles or sauces.',
    imageUrl: 'src\lib\img\Veg Triple Noodles.jpg',
    imageHint: 'veg triplenoodles',
    category: 'Mains',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'vgmain-20',
    name: 'Veg Paneer Hakka Noodles',
    price: 90,
    description: 'Hakka noodles with soft paneer cubes and mixed vegetables.',
    imageUrl: 'src\lib\img\Veg Paneer Hakka Noodles.jpg',
    imageHint: 'paneer hakkanoodles',
    category: 'Mains',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },
 
  {
    id: 'vgmain-22',
    name: 'Veg Paneer Corn Noodles',
    price: 100,
    description: 'A delicious mix of noodles with paneer, corn, and vegetables.',
    imageUrl: 'src\lib\img\Veg Paneer Corn Noodles.jpg',
    imageHint: 'paneer cornnoodles',
    category: 'Mains',
    isVegetarian: true,
    isSpecial: false,
    reviews: []
  },

  // Non-Veg Soups (Category: Starters, isVegetarian: false)
  {
    id: 'nvsoup-1',
    name: 'Chicken Clear Soup',
    price: 60,
    description: 'A light and healthy clear soup with tender chicken pieces.',
    imageUrl: 'src\lib\img\Clear Sour Soup.jpg',
    imageHint: 'chicken clearsoup',
    category: 'Starters',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'nvsoup-2',
    name: 'Chicken Manchow Soup',
    price: 80,
    description: 'A popular Indo-Chinese chicken soup with a rich, savory, and spicy flavor.',
    imageUrl: 'src\lib\img\Chicken Manchow Soup.jpg',
    imageHint: 'chicken manchow',
    category: 'Starters',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'nvsoup-3',
    name: 'Chicken Hot and Sour Soup',
    price: 80,
    description: 'A classic spicy and tangy soup with tender chicken strips and vegetables.',
    imageUrl: 'src\lib\img\Chicken Hot and Sour Soup.jpg',
    imageHint: 'chicken hotsour',
    category: 'Starters',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'nvsoup-4',
    name: 'Chicken Noodles Soup',
    price: 80,
    description: 'A comforting soup with chicken, noodles, and vegetables.',
    imageUrl: 'src\lib\img\Chicken Noodles Soup.jpg',
    imageHint: 'chicken noodlessoup',
    category: 'Starters',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'nvsoup-5',
    name: 'Chicken Lemon-Corider Soup',
    price: 80,
    description: 'A refreshing soup with chicken, zesty lemon, and fresh coriander.',
    imageUrl: 'src\lib\img\Chicken Lemon-Corider Soup.jpg',
    imageHint: 'chicken lemoncoriander',
    category: 'Starters',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  
  {
    id: 'nvsoup-7',
    name: 'Chicken Lung-Fung Soup',
    price: 100,
    description: 'A thick and creamy Cantonese-style chicken soup.',
    imageUrl: 'src\lib\img\Chicken Lung-Fung Soup.jpg',
    imageHint: 'lungfung soup',
    category: 'Starters',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  

  // Non-Veg Starters (Category: Starters, isVegetarian: false)
  {
    id: 'nvstarter-1',
    name: 'Chicken Manchurian Dry',
    price: 100,
    description: 'Crispy fried chicken pieces tossed in a savory and tangy Manchurian sauce.',
    imageUrl: 'src\lib\img\Chicken Manchurian Dry.jpg',
    imageHint: 'chicken manchurian',
    category: 'Starters',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'nvstarter-2',
    name: 'Chicken Manchurian Gravy',
    price: 110,
    description: 'Chicken pieces in a savory and tangy Manchurian gravy.',
    imageUrl: 'src\lib\img\Chicken Manchurian Gravy.jpg',
    imageHint: 'chicken manchuriangravy',
    category: 'Starters',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'nvstarter-3',
    name: 'Chicken Chilli Dry',
    price: 110,
    description: 'Boneless chicken tossed with bell peppers and onions in a spicy sauce.',
    imageUrl: 'src\lib\img\Chicken Chilli Dry.jpg',
    imageHint: 'chicken chilli',
    category: 'Starters',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'nvstarter-4',
    name: 'Chicken Chilli Gravy',
    price: 120,
    description: 'Tender chicken in a spicy and savory chilli gravy.',
    imageUrl: 'src\lib\img\Chicken Chilli Gravy.jpg',
    imageHint: 'chicken chilligravy',
    category: 'Starters',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'nvstarter-5',
    name: 'Chicken 65',
    price: 120,
    description: 'A popular spicy and crispy deep-fried chicken appetizer.',
    imageUrl: 'src\lib\img\Chicken 65.webp',
    imageHint: 'chicken sixtyfive',
    category: 'Starters',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'nvstarter-6',
    name: 'Hot Garlic Chicken',
    price: 150,
    description: 'Chicken cooked in a spicy and pungent hot garlic sauce.',
    imageUrl: 'src\lib\img\Hot Garlic Chicken.jpg',
    imageHint: 'garlic chicken',
    category: 'Starters',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'nvstarter-7',
    name: 'Honey Garlic Chicken',
    price: 150,
    description: 'Sweet and savory chicken glazed with a honey garlic sauce.',
    imageUrl: 'src\lib\img\Honey Garlic Chicken.jpg',
    imageHint: 'honey chicken',
    category: 'Starters',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
 
  {
    id: 'nvstarter-10',
    name: 'Dragon Chicken',
    price: 150,
    description: 'Spicy and slightly sweet chicken starter, often with cashews.',
    imageUrl: 'src\lib\img\Dragon Chicken.jpg',
    imageHint: 'dragon chicken',
    category: 'Starters',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'nvstarter-11',
    name: 'Crispy Chicken',
    price: 150,
    description: 'Boneless chicken pieces, batter-fried to perfection for an extra crispy texture.',
    imageUrl: 'src\lib\img\Crispy Chicken.jpg',
    imageHint: 'chicken crispy',
    category: 'Starters',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'nvstarter-12',
    name: 'Peri Peri Chicken Fry',
    price: 150,
    description: 'Fried chicken pieces tossed in a spicy peri peri seasoning.',
    imageUrl: 'src\lib\img\Crispy Chicken.jpg',
    imageHint: 'periperi chicken',
    category: 'Starters',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'nvstarter-13',
    name: 'Chicken Lollipop Fry',
    price: 100,
    description: 'Frenched chicken winglets, expertly marinated and deep-fried.',
    imageUrl: 'src\lib\img\chicken lollypop.webp',
    imageHint: 'chicken lollypop',
    category: 'Starters',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'nvstarter-14',
    name: 'Chicken Lollipop Masala',
    price: 120,
    description: 'Chicken lollipops tossed in a flavorful and spicy masala.',
    imageUrl: 'src\lib\img\chicken.jpg',
    imageHint: 'lollypop masala',
    category: 'Starters',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  
  // Non-Veg Rice (Category: Mains, isVegetarian: false)
  {
    id: 'nvmain-1',
    name: 'Chicken Fried Rice',
    price: 80,
    description: 'Classic fried rice tossed with tender chicken pieces and vegetables.',
    imageUrl: 'src\lib\img\Chicken Fried Rice.jpg',
    imageHint: 'chicken friedrice',
    category: 'Mains',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'nvmain-2',
    name: 'Chicken Schezwan Rice',
    price: 90,
    description: 'Spicy Schezwan style fried rice with tender chicken and vegetables.',
    imageUrl: 'src\lib\img\Chicken Fried Rice.jpg',
    imageHint: 'chicken schezwanrice',
    category: 'Mains',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  
  {
    id: 'nvmain-5',
    name: 'Chicken Combination (Rice + Noodles)',
    price: 90,
    description: 'A hearty mix of seasoned fried rice and stir-fried noodles with chicken.',
    imageUrl: 'src\lib\img\Chicken Combination (Rice + Noodles).jpg',
    imageHint: 'chicken combination',
    category: 'Mains',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'nvmain-8',
    name: 'Chicken Manchurian Rice',
    price: 100,
    description: 'Fried rice served with flavorful chicken Manchurian.',
    imageUrl: 'src\lib\img\Chicken Manchurian Rice.jpg',
    imageHint: 'chicken manchurianrice',
    category: 'Mains',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'nvmain-9',
    name: 'Chicken Triple Fried Rice',
    price: 100,
    description: 'A layered dish of fried rice, noodles, and chicken gravy.',
    imageUrl: 'src\lib\img\Chicken Triple Fried Rice.jpg',
    imageHint: 'chicken triplerice',
    category: 'Mains',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'nvmain-10',
    name: 'Egg Fried Rice',
    price: 80,
    description: 'Simple yet delicious fried rice with fluffy scrambled eggs.',
    imageUrl: 'src\lib\img\Egg Fried Rice.jpg',
    imageHint: 'egg friedrice',
    category: 'Mains',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'nvmain-11',
    name: 'Egg Schezwan Rice',
    price: 90,
    description: 'Spicy Schezwan fried rice with scrambled eggs.',
    imageUrl: 'src\lib\img\Egg s Rice.jpg',
    imageHint: 'egg schezwanrice',
    category: 'Mains',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },

  // Non-Veg Noodles (Category: Mains, isVegetarian: false)
  {
    id: 'nvmain-12',
    name: 'Chicken Hakka Noodles',
    price: 80,
    description: 'Classic stir-fried noodles with tender chicken and vegetables.',
    imageUrl: 'src\lib\img\Chicken Noodles.jpg',
    imageHint: 'chicken hakkanoodles',
    category: 'Mains',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'nvmain-13',
    name: 'Chicken Schezwan Noodles',
    price: 90,
    description: 'Spicy Schezwan noodles with tender chicken and vegetables.',
    imageUrl: 'src\lib\img\Chicken Schezwan Noodles.jpg',
    imageHint: 'chicken schezwannoodles',
    category: 'Mains',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
    {
    id: 'nvmain-18',
    name: 'Chicken Chilli Noodles',
    price: 100,
    description: 'Spicy stir-fried noodles with chicken in a chilli sauce.',
    imageUrl: 'src\lib\img\Chicken Chilli Noodles.jpg',
    imageHint: 'chicken chillinoodles',
    category: 'Mains',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'nvmain-19',
    name: 'Chicken Manchurian Noodles',
    price: 100,
    description: 'Noodles tossed with delicious chicken Manchurian pieces.',
    imageUrl: 'src\lib\img\Chicken Manchurian Noodles.jpg',
    imageHint: 'chicken manchuriannoodles',
    category: 'Mains',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  {
    id: 'nvmain-20',
    name: 'Chicken Triple Noodles',
    price: 100,
    description: 'A layered noodle dish served with chicken in different styles.',
    imageUrl: 'src\lib\img\Chicken Triple Noodles.jpg',
    imageHint: 'chicken triplenoodles',
    category: 'Mains',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
  
  {
    id: 'nvmain-22',
    name: 'Egg Schezwan Noodles',
    price: 90,
    description: 'Spicy Schezwan noodles with scrambled eggs.',
    imageUrl: 'src\lib\img\Egg Schezwan Noodles.jpg',
    imageHint: 'egg schezwannoodles',
    category: 'Mains',
    isVegetarian: false,
    isSpecial: false,
    reviews: []
  },
];

// Simulate API delay
const apiDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getMenuItems(): Promise<MenuItem[]> {
  await apiDelay(100);
  return mockMenuItems;
}

export async function getDailySpecials(): Promise<MenuItem[]> {
  await apiDelay(100);
  // Filter items marked as special, if any. Currently, all are false.
  // To make some items special, update their 'isSpecial' property to true in mockMenuItems.
  // For example, select a few random items or define specific ones.
  const specials = mockMenuItems.filter(item => item.isSpecial);
  if (specials.length > 0) return specials;

  // If no items are explicitly marked special, return a few sample items as specials
  // This is a fallback to ensure some specials are always shown.
  const fallbackSpecials = [];
  const potentialSpecials = mockMenuItems.filter(item => !item.isVegetarian && item.category === 'Starters' || item.category === 'Mains');
  if (potentialSpecials.length > 0) {
    fallbackSpecials.push(potentialSpecials[Math.floor(Math.random() * potentialSpecials.length)]);
  }
  const potentialVegSpecials = mockMenuItems.filter(item => item.isVegetarian && item.category === 'Starters' || item.category === 'Mains');
   if (potentialVegSpecials.length > 0) {
    fallbackSpecials.push(potentialVegSpecials[Math.floor(Math.random() * potentialVegSpecials.length)]);
  }
   // Add one more random special if possible
  if (mockMenuItems.length > fallbackSpecials.length) {
    let randomItem;
    do {
      randomItem = mockMenuItems[Math.floor(Math.random() * mockMenuItems.length)];
    } while (fallbackSpecials.some(special => special.id === randomItem.id)); // Ensure it's not already added
    if (randomItem) fallbackSpecials.push(randomItem);
  }

  return fallbackSpecials.slice(0,3).map(item => ({...item, isSpecial: true })); // Show max 3 fallback specials
}


export async function getMenuItemsByCategory(category: MenuItem['category'], isVegetarian?: boolean): Promise<MenuItem[]> {
  await apiDelay(100);
  let filteredItems = mockMenuItems.filter(item => item.category === category);
  if (typeof isVegetarian === 'boolean') {
    filteredItems = filteredItems.filter(item => item.isVegetarian === isVegetarian);
  }
  return filteredItems;
}

export async function getMenuItemById(id: string): Promise<MenuItem | undefined> {
  await apiDelay(100);
  return mockMenuItems.find(item => item.id === id);
}
