const SEU_APP_KEY = 'PUCQoNVZkONMS2qfmopX0vgfqb4WTfhV';
const SEU_APP_SECRET = 'aYhVMgC8KPUVVMpMOL7aRIWXjbJeqF4fDsnndPwbJAY5D9bP';

export const requestCep = async (cep) => {
  const requestFecth = await fetch(`https://webmaniabr.com/api/1/cep/${cep}/?app_key=${SEU_APP_KEY}&app_secret=${SEU_APP_SECRET}`);
  const requestJSON = await requestFecth.json();
  return requestJSON;
}
