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
            <v-card-title class="headline dark lighten-2" primary-title>Add Transaction Import</v-card-title>

            <v-card-text>Import file...</v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" flat @click="dialog = false">Upload</v-btn>
              <v-btn color="red darken-1" flat @click="dialog = false">Cancel</v-btn>
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
export default class TransactionImportView extends Vue {
  dialog = false;
}
</script>
