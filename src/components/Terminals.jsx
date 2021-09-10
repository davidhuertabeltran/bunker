import { useState } from "react";
import AddItem from "./AddItem";
import Cargo from "./Cargo";

function Terminal({ terminal, cargoes, removeTerminal }) {
    const [cargoList, addToCargoList] = useState([]);

    function addCargo(e) {
        e.preventDefault();
        let obj = JSON.parse(e.target.value);
        addToCargoList(cargoList.concat(obj));
    }

    function removeCargo(id) {
        const newList = cargoList.filter((item) => item.id !== id);
        addToCargoList(newList);
    }

    return (
        <div className="terminal-list">
            <p className="rotation-element">Terminal</p>
            <div className="container-element">
                <div className="item-name">{terminal.name}</div>
                <button className="button-remove" onClick={() => {
                    removeTerminal(terminal.id);
                }}>X</button>
            </div>
            
            {
                cargoList.map((cargo) => {
                    return (
                        <>
                            <Cargo key={cargo.id} cargo={cargo} removeCargo={removeCargo} />   
                        </>
                    )
                })
            }
            <div className="add-cargo">
                <p className="rotation-element">Cargo</p>
                <AddItem items={cargoes.filter(cargo => {
                if (cargoList.filter(e => e.id === cargo.id).length === 0) {
                    return cargo;
                }
            })} addItem={addCargo}/>
            </div>
            
        </div>
    )
}

export default Terminal;