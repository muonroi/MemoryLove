<template>
  <component :is="layout">
  </component>
  <router-view/>
</template>

<script>
import {PUBLIC_LAYOUT} from './const/Layout_const';
import {computed} from 'vue';
import { useRoute} from 'vue-router';
export default {
  setup(){
    const route = useRoute();
    return {
      layout: computed(()=> route.meta.layout || PUBLIC_LAYOUT)
    };
  }
}
</script>

