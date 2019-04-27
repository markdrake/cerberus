<template>
 <v-container grid-list-lg text-lg-center>
    <v-layout row wrap>
      <v-flex lg12>
        <TransactionComponent />
      </v-flex>
    </v-layout>
 </v-container>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import TransactionComponent from '@/components/TransactionsComponent.vue'


@Component({
    components: {
        TransactionComponent
    }
})
export default class TransactionsView extends Vue {}
</script>

