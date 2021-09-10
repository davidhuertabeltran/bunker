function AddItem({ items, addItem }) {

    function handleChange(e) {
        addItem(e);
        e.target.value = "all";
    }
   
    return (
        <div className="new-elements">
            <select name="items" id="terminals" onChange={handleChange}>
                <option selected disabled value="all"> -- add -- </option>
                {
                    items.map((item, index) => {
                        return(
                            <option key={index} name={item.name} value={JSON.stringify(item)}>{item.name}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default AddItem;