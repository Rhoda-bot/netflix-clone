import axios from 'axios';

export const requestData = async (data?: any, url?: any) => {
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

export const getApiData = async (url: string) => {
  const result = await axios.get(url)
    .then((response) => response.data)
    .catch((error) => error.response);
  return result;
};
