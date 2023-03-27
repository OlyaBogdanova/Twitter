import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

export default class Services {
    static async getPostsList() {
        const { data } = await axios.get(`${baseURL}/posts?page=1&10`, {
            accept: 'application/json',
        });
        return data;
    }
}
