<template>
  <div>
    <div>A</div>
    <NuxtLink to="/">Index</NuxtLink>
    <NuxtLink to="/a">A</NuxtLink>
    <NuxtLink to="/b">B</NuxtLink>
    <NuxtLink to="/c">C</NuxtLink>
  </div>
</template>

<script>
export default {
  async asyncData() {
    console.log("asyncData called");
    return {}
  }
}
</script>