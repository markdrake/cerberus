<template>
  <v-data-table :headers="headers" :items="transactions" class="elevation-1">
    <template v-slot:items="props">
      <td>{{ props.item.id }}</td>
      <td>{{ props.item.date }}</td>
      <td>{{ props.item.amount | currency }}</td>
      <td>{{ props.item.owner_id }}</td>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { AxiosResponse } from "axios";

@Component
export default class TransactionsComponent extends Vue {
  headers = [
    {
      text: "ID",
      value: "id",
      align: "center"
    },
    {
      text: "Date",
      value: "date",
      align: "center"
    },
    {
      text: "Amount",
      value: "amount",
      align: "center"
    },
    {
      text: "Owner ID",
      value: "owner",
      align: "center"
    }
  ];
  transactions: [] = [];

  private created() {
    // TODO: Here we are assinging transactions as they come from the axios response but we could add a layer of abstraction by creating Transaction objects and mapping them so we can operate through them via interaface.
    this.$http
      .get(
        "http://virtserver.swaggerhub.com/markdrake/cerberus_api/1.0.0/transactions"
      )
      .then((response: AxiosResponse) => {
        this.transactions = response.data.transactions;
      });
  }
}
</script>
