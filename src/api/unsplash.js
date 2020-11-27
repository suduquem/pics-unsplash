import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID h3Sen7KSxe6P7tx77I7CaHa0c8eSNHaBapV0GHDCZxc',
  },
});
