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
        <React.Fragment>
            <div style={styles.buttonContainer}>
                <SearchInput
                    onSubmitInput={ (e) => onSubmitInput(e) }
                />
            </div>
            <div style={styles.tableContainer}>
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
        </React.Fragment>
    );
}

const styles = {
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: '40vh',
        marginBottom: '2em'
    },
    tableContainer: {
        display: 'flex',
        justifyContent: 'center',
        height: '50vh',
        overflow: 'scroll'

    }
}