import axios from "axios";

export const URL_ACCESS = 'http://localhost:8000'
export const URL_Location = 'http://localhost:3000'

const api = axios.create({
	baseURL: `${URL_ACCESS}/`,
	headers: {
		'Content-Type': 'application/json; charset=utf-8',
		'Accept': 'application/json'
	}
})

export default api