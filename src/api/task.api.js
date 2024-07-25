import axios from 'axios'

export const getAllTasks=()=>{
    return axios.get('https://web-production-a6009.up.railway.app/tests/api/v1tasks/')
}