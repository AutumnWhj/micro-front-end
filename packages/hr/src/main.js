import routes from './router';

export default {
  name: 'hr',
  routes,
  beforeEach(from, to, next) {
    console.log('hr:', from.path, to.path);
    next();
  },
  init() { },
}
