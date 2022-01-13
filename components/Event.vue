<template>
  <div class="relative flex items-top justify-center sm:items-center sm:pt-0 min-w-screen">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8 w-2/4">
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold capitalize ">
          <nuxt-link :to="{name:'events-id',params:{id:event['id']}}">
            {{ event.name }} # {{ event.id }}
          </nuxt-link>
        </h2>
        <p class="mt-3 text-gray-600">
          {{ event.description }}
        </p>
        <p>date <span class="text-green-500">{{ event.date }}</span></p>
        <p>attendance <span class="text-green-500">{{ event.attendees.length }}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "event",
  props: {
    event: {
      type: Object,
      required: true
    },
  },

}
</script>

<style scoped>

</style>
