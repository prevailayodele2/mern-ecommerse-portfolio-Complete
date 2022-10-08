import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api';
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDk5NDc4MjgzOWJmZTVjODM0NmQ3YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTgyMjg4OCwiZXhwIjoxNjYyMDgyMDg4fQ.s1FFWH0PBCpWI9Xfy1QvEsE-4lsoEx0RICQUtFvdrVs"
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})