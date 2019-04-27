<template>
  <div>
    <span v-if="status == 'pending'">
      <v-chip color="orange" text-color="white">
        <v-icon left>pause</v-icon>Pending
      </v-chip>
    </span>
    <span v-if="status == 'in-progress'">
      <v-chip color="primary" text-color="white">
        <v-icon left>get_app</v-icon>In Progress
      </v-chip>
    </span>
    <span v-if="status == 'done'">
      <v-chip color="green" text-color="white">
        <v-icon left>done</v-icon>Done
      </v-chip>
    </span>
    <span v-if="status == 'cancelled'">
      <v-chip color="red" text-color="white">
        <v-icon left>error</v-icon>Cancelled
      </v-chip>
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class StatusChipComponent extends Vue {
  @Prop() status: String | undefined;
}
</script>