import React from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { v4 as uuid } from "uuid";

function Grocery() {
    const [data, setData] = React.useState([]);

    const handleAdd = (title) => {
        const payload = {
            title,
            status: false,
            id: uuid()
        };
        setData([...data, payload]);
    }

    const handleDelete = (id) => {
        const newList = data.filter((item) => 
        item.id !== id );
        
        setData(newList);
    }

    const handleToggle = (id) => {
        const updatedList = data.map((item) => 
        item.id === id ? { ...item, status: !item.status } : item
        );
        setData(updatedList);
    };

    return (
        <div>
            <GroceryInput onClick={handleAdd} />
            {data
                .map((item) => (
                    <GroceryList 
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                    key={item.id}
                    {...item} 
                    />
                ))}
        </div>
    );
};

export { Grocery };