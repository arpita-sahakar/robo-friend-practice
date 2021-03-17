import React from "react";
import "./RobotCards.css";

function RobotCards(props) {
  return props.robotsF.map((rbt, i) => {
    return (
      <div className="card cardRobot">
        <div className="card-body">
          key={i}
          <img src={`https://robohash.org/${rbt.id}`} alt="robot"></img>
          <h5 className="card-title">{rbt.name}</h5>
          <h6>{rbt.email}</h6>
        </div>
      </div>
    );
  });
}

export default RobotCards;
