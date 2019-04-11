import axios from "axios";

function inputAPI() {
    
        async function getInputHistory() {
            const res = await axios.get('http://localhost:3000/')
            return res.data
        }

        async function saveNewInput(newInput) {
            const res = await axios.post('http://localhost:3000/', { newInput })
            return res.data
        }

    return {
        getInputHistory,
        saveNewInput
    };
}

export default inputAPI();
