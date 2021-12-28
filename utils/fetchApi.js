import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
	const { data } = await axios.get((url), {
		headers: {
			'x-rapidapi-host': 'bayut.p.rapidapi.com',
			'x-rapidapi-key': 'a65b7cee50msh80233b80e75786ap13362bjsn3d6cd0e6997c'
		}
	})

	return data
}