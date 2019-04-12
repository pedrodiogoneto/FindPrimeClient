import React, { useState } from 'react';

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

    function handleOnSubmit() {
        if(inputNumber.length === 3) props.onSubmitInput()
        else setVisualFeedback('Number needs to have 3 characters ')
    }

    console.log(visualFeedback)
    return (
        <div style={styles.buttonContainer}>
            <h1 style={styles.title}>FIND PRIME!!!</h1>
            <button style={styles.button} onClick={() => handleOnSubmit()}><i class="fas fa-search"></i></button>
            <input style={styles.input} type="number" value={inputNumber} onChange={e => handleOnChangeInputNumber(e.target.value)}/>
            <div style={{  }}>{visualFeedback}</div>
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
        backgroundColor: 'transparent'
    },
    visualFeedback: {
        color: 'red', 
        height: '2em',
        paddingLeft: '35px',
    }
}