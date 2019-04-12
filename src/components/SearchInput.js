import React, { useState, useEffect } from 'react';

export default function SearchButton(props) {
    const [inputNumber, setInputNumber] = useState('')
    const [validationStatus, setValidationStatus] = useState('')
    const [visualFeedback, setVisualFeedback] = useState(undefined)

    function handleOnChangeInputNumber(e) {
        let integerRegex =/^\d+$/;
        console.log(integerRegex.test(e))
        if(integerRegex.test(e)) {
            setVisualFeedback(undefined)
            setInputNumber(e)
        } else {
            setVisualFeedback(undefined)
        }
    }


    return (
        <React.Fragment>
            
                <input type="number" value={inputNumber} onChange={e => handleOnChangeInputNumber(e.target.value)}/>
                <button onClick={() => props.onSubmitInput(inputNumber)}>Search!</button>
            {visualFeedback?
                <div>

                </div>
                : null
            }
        </React.Fragment>
    );
}

const styles = {

}