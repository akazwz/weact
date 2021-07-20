const axios = require('axios').default;
const baseUrl = 'http://hellozwz:8000';
const fileUpload = async (formData) => {
    return await axios.post(baseUrl + '/file', formData);
}

export default fileUpload;
