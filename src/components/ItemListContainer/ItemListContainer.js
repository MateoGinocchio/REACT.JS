import React from 'react'
import ItemList from '../Item/ItemList'
import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
    
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer
