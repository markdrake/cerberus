<template>
    <TransactionComponent />
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import TransactionComponent from '@/components/TransactionsComponent.vue'


@Component({
    components: {
        TransactionComponent
    }
})
export default class Transactions extends Vue {}
</script>

