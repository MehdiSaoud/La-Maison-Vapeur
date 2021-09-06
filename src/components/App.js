 
import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import { plantList } from '../datas/plantList'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {

	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	const categorie = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	const dataFilter = [];

	categorie.forEach(element => {
        const object = {
            value : element,
            checked : false
        }
        dataFilter.push(object)
    });

	const [categories, upDateCategories] = useState(dataFilter);
	const [arrayCategories, upDateArrayCategories] = useState([]);

	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison vapeur</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart}/>
				<ShoppingList cart={cart} updateCart={updateCart} categories={categories} upDateCategories={upDateCategories} arrayCategories={arrayCategories} upDateArrayCategories={upDateArrayCategories}/>
			</div>
			<Footer />
		</div>
	)
}

export default App