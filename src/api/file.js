const axios = require('axios').default
const baseUrl = 'http://192.168.31.139:8080';
const fileUpload = async (formData) => {
    return await axios.post(baseUrl + '/file', formData);
}

export default fileUpload;
