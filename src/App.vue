<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue';
import Wrapper from './components/Wrapper.vue';

export default defineComponent({
  name: 'App',
  components: { Header, Wrapper, Navbar },
})
</script>
<template>
  <Header />
  <Navbar />
  <Wrapper>
    <RouterView />
  </Wrapper>
</template>
