import routes from './router';

export default {
  name: 'crm',
  routes,
  beforeEach(from, to, next) {
    console.log('crm:', from.path, to.path);
    next();
  },
  init() { },
}
