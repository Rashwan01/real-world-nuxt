import EventServices from "@/services/EventServices";

export const state = () => ({
  events: [],
  event: {}
  ,
})
export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_EVENT(state, event) {
    state.event = event;
  }
}
export const actions = {
  fetchEvents({commit}) {
    return EventServices.getEvents().then(res => commit("SET_EVENTS", res.data));
  },
  fetchEvent({commit}, event) {
    return EventServices.getEvent(event).then(res => commit("SET_EVENT", res.data));
  }
}
