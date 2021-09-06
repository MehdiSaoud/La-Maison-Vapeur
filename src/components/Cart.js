import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart}) {
	const [isOpen, setIsOpen] = useState(true);
    const items = Object.keys(cart);
	const total = items.reduce(
		(acc, item) => acc + cart[item].amount * cart[item].price,
		0
	);

    const moreOrLess = (name, action) => {
       
        const cartFilterMoreOrLess = cart.slice();
        
        cartFilterMoreOrLess.forEach(element => {
            if (action === 'more') {
                if (name === element.name) {
                    element.amount++
                    updateCart(cartFilterMoreOrLess)
                }
            }

            else {
                if (name === element.name) {

                    element.amount--;
                    updateCart(cartFilterMoreOrLess)

                    if (element.amount === 0) {
                        const newCartFilterMoreOrLess = cartFilterMoreOrLess.filter(elem => elem !== element);
                        updateCart(newCartFilterMoreOrLess);
                    }



                }
            }
        });

        
    }
    
    useEffect(() => {
        document.title = `La Maison Vapeur : ${total}€ d'achats`
    }, [total])

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map((data, index) => (
                            <div className='lmj-cart-product' key={`${data.name}-${index}`}>
                                <p>{data.name} {data.price}€</p>
                                <div className='lmj-cart-product-button'>
                                    <button onClick={ () => moreOrLess(data.name, 'more')}>+</button>
                                    <p>{data.amount}</p>
                                    <button onClick={ () => moreOrLess(data.name, 'less')}>-</button>
                                </div>
                            </div>
                        ))}
                    </ul>

                    <h3>Total : {total}€</h3>
                    <button onClick={ () => updateCart([])}>Vider le panier</button>
                </div>
            ) : (
                <div>Votre panier est vide</div>
            )}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart