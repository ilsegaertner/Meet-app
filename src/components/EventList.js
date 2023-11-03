import Event from "./Event";

const EventList = ({ events }) => {
  return (
    <ul id="event-list">
      {events
        ? events.map((event) => <Event key={event.id} event={event} />)
        : null}
    </ul>
  ); // <ul> elements have role="list" by default
};

export default EventList;
