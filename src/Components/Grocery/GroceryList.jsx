import React from "react";

function GroceryList({ title, status, id, handleDelete }) {
    return (
        <div className="list_item">
            <h3>{title}</h3>
            {/* <button onClick={()=> handleToggle}>{status}</button> */}
            <button className="dlt_btn" onClick={() => handleDelete(id)}>Delete</button>
        </div>
    );
};

export { GroceryList };