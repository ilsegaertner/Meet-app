import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import "./App.css";
import NumberOfEvents from "./components/NumberOfEvents";
import { useState, useEffect } from "react";
import { getEvents, extractLocations } from "./api";

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32); // current number of events
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");

  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents =
      currentCity === "See all cities"
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE)); // slice is used to extract a portion of an array. It takes two arguments: the start index and the end index (not inclusive)
    setAllLocations(extractLocations(allEvents));
  };

  return (
    <div className="App">
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvents setCurrentNOE={setCurrentNOE} />
      <EventList events={events} />
    </div>
  );
};

export default App;
