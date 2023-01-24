/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const CustomAxios = axios.create();

const toCamelCase: any = (object: any) => {
  let transformedObject = object;
  if (typeof object === 'object' && object !== null) {
    if (object instanceof Array) {
      transformedObject = object.map(toCamelCase);
    } else {
      transformedObject = {};
      for (const key in object) {
        if (object[key] !== undefined) {
          const newKey = key.replace(/(_\w)|(-\w)/g, (k) => k[1].toUpperCase());
          transformedObject[newKey] = toCamelCase(object[key]);
        }
      }
    }
  }
  return transformedObject;
};

export const toSnackCase: any = (object: any) => {
  let transformedObject = object;
  if (typeof object === 'object' && object !== null) {
    if (object instanceof Array) {
      transformedObject = object.map(toSnackCase);
    } else {
      transformedObject = {};
      for (const key in object) {
        if (object[key] !== undefined) {
          const newKey = key
            .replace(/\.?([A-Z]+)/g, (_, y) => `_${y.toLowerCase()}`)
            .replace(/^_/, '');
          transformedObject[newKey] = toSnackCase(object[key]);
        }
      }
    }
  }
  return transformedObject;
};

CustomAxios.interceptors.response.use(
  (response) => {
    response.data = toCamelCase(response.data);
    return response;
  },
  (error) => Promise.reject(error),
);

CustomAxios.interceptors.request.use(
  (config) => {
    config.data = toSnackCase(config.data);
    return config;
  },
  (error) => Promise.reject(error),
);

export default CustomAxios;
