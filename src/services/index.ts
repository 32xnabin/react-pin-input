import axios from 'axios'

const API = 'http://localhost:8080/pin'

export const submitPin = async (pin:Array<number | undefined>): Promise<string> => {
 return axios.post(API, {pin}, {
    headers: {
      "Content-Type": "application/json"
    }
  }).then((response) => {
      return response.data.message;
    })
    .catch( (error)=> {
      console.log(error)
      return null
    })
}