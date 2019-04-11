import React, { useState, useEffect } from 'react';

import inputAPI from '../API/inputAPI'

export default function Homepage() {
    const [inputNumber, setInputNumber] = useState('')
    const [inputHistory, setInputHistory] = useState(undefined)

    useEffect(() => {
        async function getInputHistory() {
            const res = await inputAPI.getInputHistory()
            setInputHistory(res)
        }
        return getInputHistory()
    }, []); 

    async function onSubmitInput() {
        if(inputNumber.length < 3) return
        let updatedInputList = await inputAPI.saveNewInput(inputNumber)
        setInputHistory(updatedInputList)
        setInputNumber('')
    }

    function renderTable() {
        if(!inputHistory) return
        return inputHistory.map(input => <tr key={input.date}>
                <td>{input.input}</td>
                <td>{input.result}</td>
            </tr>
        )
    }

    console.log(inputNumber)
    return (
        <div style={styles.container}>
            
            <input type="number" value={inputNumber} onChange={e => setInputNumber(e.target.value)}/>
            <button onClick={() => onSubmitInput()}>Search!</button>

            <div>
                {inputHistory?
                    <table>
                        <tr>
                            <th>Input History</th>
                            <th>Result</th>
                        </tr>
                        { renderTable() }
                    </table>
                    : null
                }
            </div>
        </div>
    );
}

const styles = {
    container: {
        //display: 'flex',

    }
}