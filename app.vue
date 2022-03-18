<script setup>
const ctr = ref(0)
const { data, refresh, pending } = await useAsyncData('/api/hello', () => {
  console.log('i am from app.vue')
  return $fetch(`/api/hello/${ctr.value}`)
}, { watch: [ctr] })
</script>

<template>
  <div>
    <div>{{ data }}</div>
    <div>
      <button :disabled="pending" @click="refresh">
        Refresh Data
      </button>
      <button :disabled="pending" @click="ctr++">
        +
      </button>
    </div>
  </div>
</template>
