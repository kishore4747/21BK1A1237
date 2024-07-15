import axios from 'axios';

const API_BASE_URL = 'http://localhost:9876/numbers';

const fetchNumbers = async (type) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${type}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching numbers:', error);
        return null;
    }
};

export default fetchNumbers;
