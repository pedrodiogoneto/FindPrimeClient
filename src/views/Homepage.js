import React, { useState, useEffect } from 'react';

import inputAPI from '../API/inputAPI'

export default function Homepage() {
    const [inputNumber, setInputNumber] = useState('')
    const [inputHistory, setInputHistory] = useState(undefined)

/*     useEffect(() => {
        async function getInputHistory() {
            const res = await inputApi.getInputHistory()
            setInputHistory(res)
        }
        return getInputHistory()
    }, []);  */

    async function onSubmitInput() {
        if(inputNumber.length < 3) return

        let updatedInputList = await inputAPI.saveNewInput(inputNumber)

        console.log(updatedInputList)

    }

    console.log(inputNumber)
    return (
        <div style={styles.container}>
            <input type="number" value={inputNumber} onChange={e => setInputNumber(e.target.value)}/>
            <button onClick={() => onSubmitInput()}>Search!</button>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',

    }
}