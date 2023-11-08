import CitySearch from "./components/CitySearch";
import EventList from "./components/eventList";
import "./App.css";
import NumberOfEvents from "./components/NumberOfEvents";

const App = () => {
  return (
    <div className="App">
      <CitySearch />
      <NumberOfEvents />
      <EventList />
    </div>
  );
};

export default App;
