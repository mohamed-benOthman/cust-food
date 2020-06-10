import { navigation } from './navigation.config';
import { units } from './units.config';

export const environment = {
  production: true,
  api: {
    HOST_URL: '',
    BASE_PATH: '/api/v1.0',
  },
  navigationConfig: navigation,
  units,
};
