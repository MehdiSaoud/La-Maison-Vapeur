import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('adress@mail.com')

    const checkMail = () => {
        !inputValue.includes('@') && alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.");
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les plus grand fumeur 💨💨💨
			</div>
			<div className='lmj-footer-elem'>
                Laissez-nous votre mail :  
                <input type="mail" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onBlur={() => checkMail()}></input>
            </div>
		</footer>
	)
}

export default Footer