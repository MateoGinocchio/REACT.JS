import React, { useEffect, useState} from 'react';
import Item from "../Item/Item"

const ItemList = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        setTimeout(() => {
            console.log("Esperando 3 segundos");
            fetch("https://api.github.com/users")
              .then((response) => response.json())
              .then((json) => setUsers(json));
          }, 3000);
    }, []);
    
    return (
        <div>
            {users.map((user) => {
                return <Item data={user} key={user.id}/>
            })}
        </div>
    )
}

export default ItemList
