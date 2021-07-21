const axios = require('axios').default;
let baseUrl = window.config.baseUrl
const fileUpload = async (formData) => {
    return await axios.post(baseUrl + '/file', formData);
}

export default fileUpload;
