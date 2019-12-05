import { AsyncStorage } from 'react-native';
import api from '~/services';
import global from '~/services/global';

const validaLogin = (verificaLogin = async () => {
  const password = await AsyncStorage.getItem('@San:password');
  const user = JSON.parse(await AsyncStorage.getItem('@San:usuario'));

  return api
    .post(
      `appsan/Login?apiKey=${global.key}&login=${
        user.login
      }&senha=${password}&ip=1.0.0.01&origemLogin=app`,
    )
    .then((response) => {
      if (response.data.erro) {
        return false;
      }
      return true;
    });
});

export default validaLogin;
