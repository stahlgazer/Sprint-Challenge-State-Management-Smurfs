import React from "react";
import { connect } from "react-redux";
import { fetchSmurf } from "../actions/index";
import { Button } from "reactstrap";

function Smurfs(props) {
  console.log(props, "Smurfs.js props");

  return (
    <div className="smurfDiv">
      <div className="btnDiv">
        {!props.smurf && !props.isLoading && (
          <h2>Click to see/update our Village!</h2>
        )}
        <Button color="success" onClick={() => props.fetchSmurf()}>
          Update Smurfs Village!
        </Button>
      </div>

      {props.smurf &&
        !props.isLoading &&
        props.smurf.map(item => (
          <div className="smurfs">
            <h2>Name: {item.name}</h2>
            <h2>Age: {item.age}</h2>
            <h2>Height: {item.height}</h2>
            <Button color="danger">Remove Smurf</Button>
          </div>
        ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurf: state.smurf,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchSmurf })(Smurfs);
