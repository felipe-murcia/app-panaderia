import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://192.168.1.7:3333/recetas',
    // headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //     'X-Parse-Application-Id': 'ry1MTkipoMEZ92Wauhho8eqzqxuYyM59kYGskR38',
    //     'X-Parse-REST-API-Key': 'wKyBO5KwCNfRlMCVWUCVkCQ8wJ3q40wFxYfqAh1B',
    //   }
}); 
