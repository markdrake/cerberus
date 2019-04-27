<template>
    <h2>Template inside imports component</h2>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class TransactionImportComponent extends Vue {}
</script>
