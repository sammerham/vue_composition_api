/* https://vuejs.org/guide/extras/composition-api-faq.html ref: primitive values(num, str,
boolean ), access value using .value reactive: objects, access value directly on obj
toRefs: converts obj props into separate reactive references watchEffect: allows us to
watch depenceies in the componennts computed properties: they are prop that will store
cached values, if the depencies inside the func got updated the func will be called again
and the prop will be updated by the val retured from the func lifeCycle Hooks
onBeforeMount, onMounted, onbeforeUpdate, onUpdated, onBeforeUnmount, onUnmouted
onActivated, onDeactivated Note: composition Api doesn't suppoted (beforeCreated, created)
lifecycleHooks */

<template>
  <div>
    <p>{{ num }}</p>
    <p>Double: {{ double }}</p>
    <button type="button" @click.prevent="increment">Click Me</button>
    <p>{{ name }}</p>
    <p>
      <input type="text" v-model="phrase" />
    </p>
    <p>{{ reversedPhrase }}</p>

    <app-alert :user="user" />
    <button type="button" ref="btn">Button</button>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  toRefs,
  // watchEffect,
  // watch,
  // computed,
  onBeforeMount,
  onMounted,
} from "vue";
import AppAlert from "@/components/Alert.vue";
import { useNumber } from "@/hooks/number";
import { usePhrase } from "@/hooks/phrase";

// export default {
// name: "App",
// components: {
//   AppAlert,
// },
// setup() {
const btn = ref(null);

onBeforeMount(() => {
  console.log("beforeMount");
});
onMounted(() => {
  console.log("Mount");
  btn.value.addEventListener("click", () => {
    console.log("btn was clicked");
  });
});

const user = reactive({
  name: "Tom",
  age: 30,
});
setTimeout(() => {
  user.name = "Hardy";
}, 3000);

const { num, increment, double } = useNumber();
const { phrase, reversedPhrase } = usePhrase();
const { name } = toRefs(user);
// return {
//   num,
//   increment,
//   ...toRefs(user),
//   phrase,
//   reversedPhrase,
//   double,
//   user,
//   btn,
// };
// },
// };
</script>
