import { useState } from "react";

function RemoveItem() {

    const handleRemoveItem = (e) => {
        e.preventDefault();
        console.log('Hello');
    }

    return (
        <button onClick={handleRemoveItem}>X</button>
    )
}

export default RemoveItem;