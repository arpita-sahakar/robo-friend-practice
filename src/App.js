import "./App.css";
import Header from "./Header";
import SearchBox from "./SearchBox";
import RobotCards from "./RobotCards";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [robots, setRobots] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/users").then((res) => {
      console.log("useEffect");
      console.log(res.data);
      setRobots(res.data);
    });
  }, []);

  const onSearchChange = (event)=>{
    console.log(event.target.value);
    setSearch(event.target.value);
  }
  
  const filteredRobots = (robots) => {
    return robots.filter((robot) => {
      return robot.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  };

  return (
    <div className="background">
      <Header />
      <SearchBox searchChange={onSearchChange}/>
      <RobotCards robotsF ={filteredRobots(robots)}  />
    
    
    </div>
  );
}

export default App;
