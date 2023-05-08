import { ref, computed, isRef, isReactive, reactive } from 'vue';
// isRef : can be use to check if a variable is reactive that was created with ref func 
// isRef : can be use to check if a variable is reactive that was created with reactive func 
export const useNumber = ()=>{
    let num = ref(0);
    const accounts = reactive({
      checking: 234,
      savings: 123,
    });

    console.log(isRef(num));
    console.log(isReactive(accounts));
    function increment() {
      num.value++;
    };

    // return reactive reference that can be used in the template
    const double = computed(()=> {
      return num.value * 2;
    });

    return {num, increment, double};
}