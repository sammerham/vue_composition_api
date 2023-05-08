import { computed } from 'vue';
<template>
  <div v-if="!flag" style="color: red">Name changed!</div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["user"],
  //context can also be passed to ===to this keyword
  setup(props, context) {
    // context.emit('eventName', {payload});
    const flag = computed(() => {
      return props.user.name === "Tom";
    });

    return {
      flag,
    };
  },
};
</script>
