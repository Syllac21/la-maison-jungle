import {plantList} from '../datas/plantList';
import PlantItem from './PlantItem.js';
import '../styles/ShoppingList.css';



function ShoppingList({cart, updateCart}){
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    function addToCart(name, price) {
        const currentPlantAdd = cart.find((plant)=>plant.name === name);
        if (currentPlantAdd){
            const cartFilterCurentPlant = cart.filter(
                (plant)=>plant.name !== name
            )
            updateCart([...cartFilterCurentPlant,{name, price, amount : currentPlantAdd.amount +1}])
        }else{
            updateCart([...cart, {name, price, amount : 1}])
        }
    }
    

    return (
        <div>
            <ul>
                {categories.map((cat)=> (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({id, cover, name, water, light, price  }) => (
                    <div key={id}>
                        <PlantItem 
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                        />
                        <button onClick={()=>addToCart(name,price)}>Ajouter</button>
                    </div>
                    
                    
                ))}
            </ul>
        </div>
    )

}

export default ShoppingList