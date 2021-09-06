import smoke from '../assets/explosion.png'
import charge from '../assets/flash.png'

const CareScale = ({scaleValue, careType}) => {

    const range = [1, 2, 3];

    const quantitySmoke = {
        1 : "une petite",
        2 : "une certaine",
        3 : "une grosse"
    }

    const quantityCharge = {
        1 : "de long",
        2 : "de bon",
        3 : "de court"
    }

    
    const scaleType = careType === 'charge' ? (
        <img src={charge} alt='charge-icon' />
    ) : (
        <img src={smoke} alt='smoke-icon' />
    )

    return (
        <div onClick = {(e) => {e.stopPropagation(); alert(`Ce produit requiert ${careType === 'charge' ? quantityCharge[scaleValue] : quantitySmoke[scaleValue]} ${careType === 'charge' ? 'temps de rechargement' : "expérience"}` )}}>

            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}
export default CareScale