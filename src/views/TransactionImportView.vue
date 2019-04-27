<template>
  <v-container grid-list-lg text-lg-center>
    <v-layout row wrap>
      <v-flex lg12>
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on }">
            <v-btn fab top left dark absolute large color="pink" v-on="on">
              <v-icon dark>add</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>

            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" flat @click="dialog = false">I accept</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <TransactionImportComponent/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TransactionImportComponent from "@/components/TransactionImportComponent.vue";

@Component({
  components: {
    TransactionImportComponent
  }
})
export default class TransactionImportView extends Vue {}
</script>
