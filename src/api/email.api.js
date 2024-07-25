import axios from 'axios'


export const sendEmail=(email)=> axios.post('https://web-production-a6009.up.railway.app/tests/sendEmail/',email)

