import AddItem from "./AddItem";
import Cargo from "./Cargo";

function Terminal({ terminal, cargoes, removeTerminal, addCargo, removeCargo }) {

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
                terminal.cargoes.map((cargo) => {
                    return (
                        <>
                            <Cargo key={cargo.id} cargo={cargo} removeCargo={removeCargo} terminalId={terminal.id}/>
                        </>
                    )
                })
            }
            <div className="add-cargo">
                <p className="rotation-element">Cargo</p>
                <AddItem items={cargoes.filter(cargo => {
                    if (terminal.cargoes.filter(e => e.id === cargo.id).length === 0) {
                        return cargo;
                    }
            })} addItem={(e) => addCargo(e, terminal)}/>
            </div>

        </div>
    )
}

export default Terminal;
