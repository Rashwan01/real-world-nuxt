<template>
<div>
  <ul class="flex p-4">
    <li class="mr-6">
      <nuxt-link to="/" class="text-green-500 hover:green-500">Home</nuxt-link>
    </li>
    <li class="mr-6">
      <nuxt-link to="/events" class="text-green-500 hover:green-500">Events</nuxt-link>
    </li>

  </ul>
  <Nuxt/>
</div>
</template>
<script>
export default {
  head() {
    return {
      titleTemplate: "%s - Yassir hub",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Yassir hub is ecommerce solution for multi vendor business"
        }
      ]
    }
  }
}
</script>
