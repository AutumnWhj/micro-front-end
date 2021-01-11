import routes from './router';

export default {
  name: 'oa',
  routes,
  beforeEach(from, to, next) {
    console.log('oa:', from.path, to.path);
    next();
  },
  init() { },
}
