import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default api;

export async function getArtefacts(type?: string) {
  const res = await api.get('/artefacts', { params: { type } });
  return res.data;
}

