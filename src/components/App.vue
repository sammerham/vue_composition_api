/* https://vuejs.org/guide/extras/composition-api-faq.html ref: primitive values(num, str,
boolean ), access value using .value reactive: objects, access value directly on obj
toRefs: converts obj props into separate reactive references watchEffect: allows us to
watch depenceies in the componennts 
computed properties: they are prop that will store cached values, if the depencies inside the func got 
updated the func will be called again and the prop will be updated by the val retured from the func


lifeCycle Hooks
onBeforeMount, 
onMounted,
onbeforeUpdate,
onUpdated,
onBeforeUnmount,
onUnmouted
onActivated,
onDeactivated

Note:
composition Api doesn't suppoted (beforeCreated, created) lifecycleHooks
*/

<template>
  <div>
    <p>{{ num }}</p>
    <p>Double: {{double}}</p>
    <button type="button" @click.prevent="increment">Click Me</button>
    <p>{{ name }}</p>
    <p>
      <input type="text" v-model="phrase" />
    </p>
    <p>{{reversedPhrase}}</p>

    <app-alert :user="user" />
  </div>
</template>

<script>
import { 
  ref, 
  reactive, 
  toRefs, 
  watchEffect,
  watch,
  computed, 
  onBeforeMount, 
  onMounted 
  } from "vue";
import AppAlert from '@/components/Alert.vue'
export default {
  name: "App",
  components:{
    AppAlert
  },
  setup() {
    onBeforeMount(()=>{
      console.log('beforeMount')
    });
    onMounted(()=>{
      console.log('Mount')
    });
    let num = ref(0);
    function increment() {
      num.value++;
    };

    // return reactive reference that can be used in the template
    const double = computed(()=> {
      return num.value * 2;
    });
    const user = reactive({
      name: "Tom",
      age: 30,
    });
    setTimeout(() => {
      user.name = "Hardy";
    }, 3000);
    const phrase = ref("");
    const reversedPhrase = ref("");

    // watchEffect(() => {
    //   reversedPhrase.value = phrase.value.split("").reverse().join("");
    // });
    watch([phrase], ([newVal, oldVal]) => {
      reversedPhrase.value = phrase.value.split("").reverse().join("");
    });
    return {
      num,
      increment,
      ...toRefs(user),
      phrase,
      reversedPhrase,
      double,
      user
    };
  },
};
</script>
