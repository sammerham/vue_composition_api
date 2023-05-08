import {ref, computed} from 'vue';

export const useNumber = ()=>{
    let num = ref(0);
    function increment() {
      num.value++;
    };

    // return reactive reference that can be used in the template
    const double = computed(()=> {
      return num.value * 2;
    });

    return {num, increment, double};
}