import React from "react";

function GroceryInput({ onClick }) {
    const [item, setItem] = React.useState("");

    return (
        <div>
            <input type="text"
                className="input_item"
                placeholder="Add an item"
                onChange={(e)=> setItem(e.target.value)}
                value={ item }
            />
            <button className="btn" onClick={() => onClick(item)}>ADD</button>
        </div>
    );
};

export { GroceryInput };