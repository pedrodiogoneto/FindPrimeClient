import React, { useState, useEffect } from 'react';

export default function SearchButton(props) {
    const [inputNumber, setInputNumber] = useState('')
    const [visualFeedback, setVisualFeedback] = useState(undefined)

    function handleOnChangeInputNumber(e) {
        let integerRegex =/^\d+$/;
        
        if(integerRegex.test(e)) {
            setVisualFeedback(undefined)
            setInputNumber(e)
        } else setVisualFeedback('Only Integers accepted')

        if(inputNumber.length > 3) setVisualFeedback('Number needs to have 3 characters')
    }

    useEffect(() => {
        if(inputNumber.length > 3) setVisualFeedback('Number needs to have 3 characters')
        if(inputNumber.length <= 3 && visualFeedback !== 'Only Integers accepted') setVisualFeedback(undefined)

    }, [inputNumber])



    function handleOnSubmit() {
        if(inputNumber.length === 3) {
            props.onSubmitInput(inputNumber)
            setInputNumber('')
        } 
        else setVisualFeedback('Number needs to have 3 characters ')
    }

    return (
        <div style={styles.buttonContainer}>
            <h1 style={styles.title}>FIND PRIME!!!</h1>
            <input style={styles.input} type="number" value={inputNumber} onChange={e => handleOnChangeInputNumber(e.target.value)}/>
            <button style={styles.button} onClick={() => handleOnSubmit()}><i className="fas fa-search"></i></button>
            <div style={styles.visualFeedback}>{visualFeedback}</div>
        </div>
    );
}

const styles = {
    title: {
        textAlign: 'center',
        marginBottom: '1em'
    },
    button: {
        border: '0px',
    },
    input: {
        border: '1px solid #80808024',
        borderRadius: '10px',
        width: '40vw',
        backgroundColor: 'transparent',
        paddingLeft: '15px'
    },
    visualFeedback: {
        color: 'red', 
        height: '2em',
        paddingLeft: '15px',
    }
}