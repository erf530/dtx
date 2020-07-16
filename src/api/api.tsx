import axios from 'axios';

const BASE_URL = 'https://flowcode.com/mock-api-data';

export async function getData() {
  const url = BASE_URL;

  const { data } = await axios.get(url);
  return data;
}
