import React, { useState, useEffect } from 'react';

import SearchInput from '../components/SearchInput'

import inputAPI from '../API/inputAPI'

export default function Homepage() {
    const [inputHistory, setInputHistory] = useState(undefined)

    useEffect(() => {
        async function getInputHistory() {
            const res = await inputAPI.getInputHistory()
            setInputHistory(res)
        }
        return getInputHistory()
    }, []); 

    async function onSubmitInput(e) {
        if(e.length < 3) return
        let updatedInputList = await inputAPI.saveNewInput(e)
        setInputHistory(updatedInputList)
    }

    function renderTable() {
        if(!inputHistory) return
        return inputHistory.map(input => <tr key={input.date}>
                <td>{input.input}</td>
                <td>{input.result}</td>
            </tr>
        )
    }

    return (
        <div style={styles.container}>
            <SearchInput 
                onSubmitInput={ (e) => onSubmitInput(e) }
            />

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
    );
}

const styles = {
    container: {
        //display: 'flex',

    }
}