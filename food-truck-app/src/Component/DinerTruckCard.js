import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getTruckInfo } from "../Store/Actions";
import mapStateToProps from "../Store/State";

const StyledTruck = styled.div`
  display: flex;
  border: 0.5px solid lightgrey;
  flex-wrap: nowrap;
  background: #8ebccd;
  color: white;
  padding: 1.4%;
  margin-bottom: 2%;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.7);
  box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);

  p {
    font-weight: 800;
  }
  h2 {
    line-height: 2px;
    /* color: #ff4486; */
    margin-bottom: 6%;
  }
  span {
    color: #ff4486;
  }

  img {
    width: 80%;
    border-radius: 20px;
    border: 4px dashed #ff4486;
    margin-left: 3%;
  }

  .info {
    width: 80%;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
  }
  .picture {
    width: 80%;
  }
`;

const DinerTruckCard = (props) => {
  return (
    <StyledTruck>
      <div className="picture">
        <h2>{props.name}</h2>
        <img src={props.imageOfTruck} alt={props.name} />
      </div>
      <div className="info">
        <p>
          Name: <span>{props.name}</span>
        </p>
        <p>
          Cuisine: <span>{props.cuisineType}</span>
        </p>
        <p>
          Current Location:{" "}
          <span>
            {props.truckLongitude} : {props.truckLatitude}
          </span>
        </p>
        <p>
          Departure Time: <span>{props.departureTime}</span>
        </p>
      </div>
    </StyledTruck>
  );
};

export default connect(mapStateToProps, { getTruckInfo })(DinerTruckCard);
