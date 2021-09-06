import CareScale from './CareScale'
import { useState } from 'react'
import Modal from './Modal'
import '../styles/PlantItem.css'


const PlantItem = ({cart, updateCart, data}) => {

    function addToCart(name, price) {
		const currentPlantAdded = cart.find((plant) => plant.name === name)
		if (currentPlantAdded) {
			console.log(currentPlantAdded);
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}


    const [modalIsOpen, upDateModalIsOpen] = useState(false);

    return (
        <>
        <li key={data.id} className='lmj-plant-item' onClick={() => upDateModalIsOpen(true)}>
            <span className='lmj-plant-item-price'>{data.price}€</span>
            <div className='lmj-plant-item-cover-container'>
                <img className='lmj-plant-item-cover' src={data.cover} alt={data.name} />
            </div>
            <h4>{data.name}</h4>
            <div className="lmj-plant-item-care">
                <CareScale careType = 'intensity' scaleValue = {data.intensity} />
                <CareScale careType = 'charge' scaleValue = {data.charge} />
            </div>
        </li>
        <Modal data={data} modalIsOpen={modalIsOpen} upDateModalIsOpen={upDateModalIsOpen}>
            <div className="modal-container-cover">
                <img className="modal-cover" src={data.cover} alt={data.name}></img>
            </div>
            <div className="modal-description">
                <h1>{data.name}</h1>
                <h4 className="modal-price">{data.price}.00 €</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed condimentum, risus at ornare condimentum, ipsum enim commodo dui, et convallis magna dui vel odio.
                    In a est mauris. Quisque molestie ornare orci in aliquam. Duis egestas viverra libero non imperdiet. 
                    Sed lacinia pellentesque pulvinar. Maecenas in felis bibendum velit tristique auctor sit amet vitae
                     mauris. Praesent porttitor tortor at augue rutrum, eget dapibus massa facilisis. Fusce bibendum es</p>
            </div>
            <div className="modal-button-container">
                <button className="modal-button" onClick={() => addToCart(data.name, data.price)}>Ajouter au panier</button>
                <span>Catégories : {data.category}</span>
            </div>
        </Modal>
        </>
        
    )

}


export default PlantItem;