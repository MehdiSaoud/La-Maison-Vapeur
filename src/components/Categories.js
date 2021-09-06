 import '../styles/Categories.css'
 

const Categories = ({categories, upDateCategories, arrayCategories, upDateArrayCategories}) => {

    const handleChange = (e) => {

        const newCategories = categories.slice();

        newCategories.forEach(element => {
            if (element.value === e.target.value)
                element.checked = e.target.checked;
        });

        upDateCategories(newCategories);

        const isInArray = arrayCategories.find(elem => elem === e.target.value);

        if(isInArray) {

            const newArrayCategories = arrayCategories.filter(elem => elem !== e.target.value);

            upDateArrayCategories(newArrayCategories);
        }

        else {
            upDateArrayCategories([...arrayCategories, e.target.value])
        }
    }

    return (

        <div className='lmj-categories'>
            {categories.map((data) => (
                <div className='lmj-categories-checkbox' key={data.value}>
                    <input type="checkbox" id={data.value} name="data.value" value={data.value} checked={data.checked} onChange={e => handleChange(e)}></input>
                    <label htmlFor={data.value}>{data.value}</label>
                </div>
            ))}
        </div>
    )
}

export default Categories