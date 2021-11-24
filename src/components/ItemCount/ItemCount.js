import React, { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({Stock, initial}) => {
    const [counter, setCounter] = useState(initial);

    const subCantidad = () => {
        if (counter > 1) setCounter(counter - 1)
    };

    const addCantidad = () => {
        if (counter < Stock) setCounter(counter + 1)
    };

    return (
        <div className="contador">
            <button onClick={subCantidad}>Restar</button>
            <p>{counter}</p>
            <button onClick={addCantidad}>Sumar</button>
        </div>
    )
}

export default ItemCount
