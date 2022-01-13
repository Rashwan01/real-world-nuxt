<template>
  <div class="bg-gray-100 min-h-screen">
    <event :event="event"/>
  </div>
</template>
<script>
import {mapState} from "vuex";

export default {
  head() {
    return {
      title: `Event #${this.event.id}`,
      meta: [
        {
          hid: 'description',
          name: "description",
          content: this.event.description,
        }
      ]
    }
  },
  async fetch({error, params, store}) {
    await store.dispatch("events/fetchEvent", params.id).catch(e =>
      error({statusCode: 503, message: `Unable to fetch event #${event.id}}`}));
  },
  computed: mapState({
    event: state => state.events.event
  })
}
</script>
