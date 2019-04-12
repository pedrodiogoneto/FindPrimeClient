import React, { useState, useEffect } from 'react';

export default function SearchButton(props) {
    const [inputNumber, setInputNumber] = useState('')
    const [validationStatus, setValidationStatus] = useState('')
    const [visualFeedback, setVisualFeedback] = useState(undefined)

    function handleOnChangeInputNumber(e) {
        let integerRegex =/^\d+$/;

        if(integerRegex.test(e)) {
            setVisualFeedback(undefined)
            setInputNumber(e)
        } else {
            setVisualFeedback(undefined)
        }
    }


    return (
        <div style={styles.buttonContainer}>
            
            <input type="number" value={inputNumber} onChange={e => handleOnChangeInputNumber(e.target.value)}/>
            <button onClick={() => props.onSubmitInput(inputNumber)}>Search!</button>
            {visualFeedback?
                <div>

                </div>
                : null
            }
        </div>
    );
}

const styles = {

}