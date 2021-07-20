const axios = require('axios').default
const baseUrl = 'http://localhost:8000';
const fileUpload = async (formData) => {
    return await axios.post(baseUrl + '/file', formData);
}

export default fileUpload;
