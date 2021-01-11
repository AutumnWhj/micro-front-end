/* routes-list */

const APP_NAME = process.env.APP_NAME;

const App = () => import('./App.vue');

export default [
  {
    path: `/${APP_NAME}`,
    name: APP_NAME,
    // redirect: { name: `${APP_NAME}` },
    component: App,
    children: [],
  },
];
