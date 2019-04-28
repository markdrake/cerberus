<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-data-table :headers="headers" :items="transactionImports" class="elevation-1">
    <template v-slot:items="props">
      <td>{{ props.item.id }}</td>
      <td>{{ props.item.date }}</td>
      <td>
        <status-chip v-bind:status="props.item.status"/>
      </td>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import StatusChipComponent from "@/components/StatusChipComponent.vue";
import { AxiosResponse } from "axios";

@Component({
  components: {
    "status-chip": StatusChipComponent
  }
})
export default class TransactionImportComponent extends Vue {
  headers = [
    {
      text: "ID",
      value: "id",
      align: "center"
    },
    {
      text: "Date",
      value: "date"
    },
    {
      text: "Status",
      value: "status"
    }
  ];

  transactionImports = [];

  private created() {
    this.$http
      .get(
        "http://virtserver.swaggerhub.com/markdrake/cerberus_api/1.0.0/transactions/imports"
      )
      .then((response: AxiosResponse) => {
        this.transactionImports = response.data.transaction_imports;
      });
  }
}
</script>
