import {plantList} from '../datas/plantList';
import PlantItem from './PlantItem.js';
import '../styles/ShoppingList.css';
import CategoriesList from './Categories.js';
import { useState } from 'react';



function ShoppingList({cart, updateCart}){
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
    const [activeCategory, setActiveCategory] = useState('');


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
            <CategoriesList setActiveCategory = {setActiveCategory} categories = {categories} activeCategory = {activeCategory} />
            <ul className='lmj-plant-list'>
                {plantList.map(({id, cover, name, water, light, price, category}) => (
                    !activeCategory || activeCategory === category ? (
                        <div key={id}>
                        <PlantItem 
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                        />
                        <button onClick={()=>addToCart(name,price)}>Ajouter</button>
                    </div>
                    ) : null
                    
                    
                    
                ))}
            </ul>
        </div>
    )

}

export default ShoppingList