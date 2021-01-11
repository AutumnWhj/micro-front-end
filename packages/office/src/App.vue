<template>
  <div id="app">
    <div id="nav">
      <router-link
        v-for="item in routes"
        :key="item.title"
        :to="item.name"
        :class="{ active: item.isActive }"
        class="link"
        >{{ item.title }}</router-link>
    </div>
    <router-view />
    <vue-progress-bar />
  </div>
</template>

<script>
export default {
  name: 'office',

  data() {
    return {
      routes: [
        { name: '/crm', title: 'crm' },
        { name: '/hr', title: 'hr' },
        { name: '/oa', title: 'oa' }
      ],
    };
  },

  watch: {
    $route({ path }) {
      if (typeof path === 'undefined') {
        return;
      }
      // remove active class
      const oldActivedRoute = this.routes.find((v) => v.isActive);
      if (oldActivedRoute) {
        oldActivedRoute.isActive = false;
      }
      // add active class
      const activedRoute = this.routes.find(({ name }) =>
        path.startsWith(name),
      );
      if (activedRoute) {
        activedRoute.isActive = true;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  padding: 0 10px;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.active,
#nav a.router-link-exact-active {
  color: #ea6e76;
}
</style>
