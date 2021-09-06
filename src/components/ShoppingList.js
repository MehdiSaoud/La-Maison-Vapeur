import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart, categories, upDateCategories, arrayCategories, upDateArrayCategories}) {

	return (
		<div className='lmj-shopping-list'>
			<Categories categories={categories} upDateCategories={upDateCategories} arrayCategories={arrayCategories} upDateArrayCategories={upDateArrayCategories}/>

			<ul className='lmj-plant-list'>
				{
				
					plantList.map((data) => arrayCategories.includes(data.category) || arrayCategories.length === 0 ?
									(	
										<PlantItem key={data.id} cart={cart} updateCart={updateCart} data={data} />
									) : null					 
					)
				}
			</ul>
		</div>
	)
}

export default ShoppingList