import axios from 'axios';

export default {
    getCollectionItems(query) {
        return axios.get(`https://images-api.nasa.gov/search?q=${query}&media_type=image,video`);
    }
}