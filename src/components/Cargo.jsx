function Cargo( {cargo, removeCargo}) {
    return (
        <div className="cargo-list">
            <p className="rotation-element">Cargo</p>
            <div className="container-element">
                <div className="item-name">{cargo.name}</div>
                <button className="button-remove" onClick={() => {
                    removeCargo(cargo.id)
                }}>X</button>
            </div>
            
        </div>
    )
}

export default Cargo;