import { useEffect, useState } from "react";
import Terminal from "./Terminals";
import AddItem from "./AddItem";

function Rotation() {

    const [terminals, setTerminal] = useState(null);
    const [cargoes, setCargoes] = useState(null);
    const [terminalList, addToTerminalList] = useState([]);
    

    async function fetchTerminal() {
        const url = new URL('https://dev.solvexus.com/api/recruitment/terminals');
        const response = await fetch(url.toJSON());
        const data = await response.json();
        setTerminal(data);
    }

    async function fetchCargoes() {
        const url = new URL('https://dev.solvexus.com/api/recruitment/cargoes');
        const response = await fetch(url.toJSON());
        const data = await response.json();
        setCargoes(data);
    }

    useEffect(() => {
        fetchTerminal();
        fetchCargoes();
    }, [])

    if(terminals === null) {
        return (
            <h2>Loading terminal...</h2>
        )
    }

    if(cargoes === null) {
        return (
            <h2>Loading cargoes...</h2>
        )
    }

    function addTerminal(e) {
        e.preventDefault();
        let obj = JSON.parse(e.target.value);
        addToTerminalList(terminalList.concat(obj));
    }

    function removeTerminal(id) {
        const newList = terminalList.filter((item) => item.id !== id);
        addToTerminalList(newList);
        // var array = [...terminalList];
        // console.log(array);
        // var index = array.indexOf(id)
        // console.log(index);
        // if (index !== -1) {
        //     array.splice(index, 1);
        //     addToTerminalList(array)
        // }
        // console.log(array);
        // console.log(terminalList);
        // let newList = [...terminalList];
        // newList.forEach((item, index) => {
        //     if (item.id === id) {
        //         newList.splice(index, 1);
        //     } 
        // })
        // console.log(newList)
        // addToTerminalList(newList);
    }

    async function submitRotation() {
        postData().then(data => {
            console.log(data)
        })
    }
    

    async function postData() {
        const terminalsArray = terminalList.map(terminal => {
            return { "id": terminal.id, "cargoIds": [] } //here missing the cargo id
        })
        const url = "https://dev.solvexus.com/api/recruitment/saverotation";
        const data = {
            "terminals": terminalsArray
        };
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' 
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    return (
        <div className="terminal-container">
            <h1 className="rotation-title">Create New Rotation</h1>
            {
                terminalList.map((terminal) => {
                    return (
                        <>
                            <Terminal key={terminal.id} terminal={terminal} cargoes={cargoes} removeTerminal={removeTerminal}/> 
                        </>
                    )
                })
            }
            <p className="rotation-element">Terminal</p>
            <AddItem items={terminals.filter(terminal => {
                if (terminalList.filter(e => e.id === terminal.id).length === 0) {
                    return terminal;
                }
            })} addItem={addTerminal} />
            
            <button onClick={submitRotation}>Submit</button>
        </div>
    )
}

export default Rotation;