const axios = require('axios').default

const fileUpload = async (formData) => {
    return await axios.post('http://localhost:8080/file', formData);
}

export default fileUpload;
