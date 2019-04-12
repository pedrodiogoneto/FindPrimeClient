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
            <h1>FIND PRIME!!!</h1>
            <input type="number" value={inputNumber} onChange={e => handleOnChangeInputNumber(e.target.value)}/>
            <button onClick={() => handleOnSubmit()}>Search!</button>
            <div style={{ color: 'red', height: '2em' }}>{visualFeedback}</div>
        </div>
    );
}

const styles = {

}