function Cargo( {cargo, removeCargo, terminalId}) {
    return (
        <div className="cargo-list">
            <p className="rotation-element">Cargo</p>
            <div className="container-element">
                <div className="item-name" id={terminalId}>{cargo.name}</div>
                <button className="button-remove" onClick={() => {
                    removeCargo(cargo.id, terminalId)
                }}>X</button>
            </div>

        </div>
    )
}

export default Cargo;
