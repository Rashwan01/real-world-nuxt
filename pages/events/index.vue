<template>
  <div class=" bg-gray-100 min-h-screen">
    <h1 class="h1 font-bold text-7xl flex justify-center  pt-4">Events</h1>
    <event v-for="(event,index) in events" :event="event" :key="index"/>
  </div>

</template>
<script>
import {mapState} from "vuex";

export default {
  head() {
    return {
      title: "Events",

    }
  },
  async fetch({error, store}) {
    await store.dispatch("events/fetchEvents").catch(e => error({
      statusCode: 503,
      message: 'Unable to fetch events at this time, please try again'
    }))
  },
  computed: mapState({
    events: state => state.events.events,
  })
}
</script>
