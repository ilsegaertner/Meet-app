import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import "./App.css";
import NumberOfEvents from "./components/NumberOfEvents";
import { useState, useEffect } from "react";
import { getEvents, extractLocations } from "./api";
import Spinner from "./components/Spinner";
import { InfoAlert } from "./components/Alert";
import { ErrorAlert } from "./components/Alert";
import { WarningAlert } from "./components/Alert";
import CityEventsChart from "./components/CityEventsChart";
import EventGenresChart from "./components/EventGenresChart";

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32); // current number of events
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [loading, setLoading] = useState(false); // spinner
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  useEffect(() => {
    let infoText;
    if (navigator.onLine) {
      // set the warning alert message to an empty string ""
      infoText = "";
      setWarningAlert(infoText);
    } else {
      // set the warning alert message to a non-empty string
      infoText =
        "As you are offline the displayed list has been loaded from your last visit";
      setWarningAlert(infoText);
    }
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    try {
      setLoading(true);

      const allEvents = await getEvents();
      const filteredEvents =
        currentCity === "See all cities"
          ? allEvents
          : allEvents.filter((event) => event.location === currentCity);
      setEvents(filteredEvents.slice(0, currentNOE)); // slice is used to extract a portion of an array. It takes two arguments: the start index and the end index (not inclusive)
      setAllLocations(extractLocations(allEvents));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      {loading && <Spinner />} {/* Show spinner while loading */}
      <div className="head-wrapper">
        <div className="alerts-container">
          {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
          {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
          {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
        </div>
        <div className="header-container">
          <CitySearch
            allLocations={allLocations}
            setCurrentCity={setCurrentCity}
            setInfoAlert={setInfoAlert}
          />
          <NumberOfEvents
            setCurrentNOE={setCurrentNOE}
            setErrorAlert={setErrorAlert}
          />
        </div>
        <div className="charts-container">
          <EventGenresChart events={events} />
          <CityEventsChart allLocations={allLocations} events={events} />
        </div>
      </div>
      <EventList events={events} />
    </div>
  );
};

export default App;
