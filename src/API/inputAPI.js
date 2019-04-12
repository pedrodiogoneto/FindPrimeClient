import axios from "axios";

function inputAPI() {
    
        async function getInputHistory() {
            const res = await axios.get(process.env.REACT_APP_URL)
            return res.data
        }

        async function saveNewInput(newInput) {
            const res = await axios.post(process.env.REACT_APP_URL  , { newInput })
            return res.data
        }

    return {
        getInputHistory,
        saveNewInput
    };
}

export default inputAPI();
