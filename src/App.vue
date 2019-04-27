<template>
  <v-app dark>
   <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><router-link to="/">Home</router-link></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><router-link to="/about">About</router-link></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
  </v-navigation-drawer>

  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title class="headline text-uppercase">
      <span>Vuetify</span>
      <span class="font-weight-light">MATERIAL DESIGN</span>
    </v-toolbar-title>
  </v-toolbar>

  <v-content>
    <router-view/>
  </v-content>

  <v-footer app fixed>
    <span>Code Challenge &copy; 2019</span>
  </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
}
</script>
