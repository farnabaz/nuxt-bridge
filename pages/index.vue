<template>
  <div>
    <div>Index</div>
    <button @click="fetchPostApi">
      Call Post API
    </button>
    <pre>
      {{ data }}
    </pre>
  </div>
</template>

<script>
export default {
  async asyncData() {
    return {
      data: null
    }
  },
  methods: {
    async fetchPostApi() {
      const response = await $fetch('/api/post', {
        method: 'POST',
        body: {
          somedata: 'value'
        }
      })
      this.data = response
    }
  }
}
</script>