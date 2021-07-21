const axios = require('axios').default
const baseUrl = this.$config.baseUrl;
const fileUpload = async (formData) => {
    return await axios.post(baseUrl + '/file', formData);
}

export default fileUpload;
