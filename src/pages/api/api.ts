import axios from 'axios';

const requestData = async (data?: any, url?: any) => {
  const result = await axios
    .post(url, data, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
        'Content-Type': 'multipart/json',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);
  return result;
};

export default requestData;
