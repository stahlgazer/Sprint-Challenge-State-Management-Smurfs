import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Label, Input } from "reactstrap";
import axios from "axios";

function Form(props) {
  console.log(props, "Form.js props");

  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });
  console.log(newSmurf, "new smurf in form.js");

  let onChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = props => {
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(response => {
        console.log(response.data, "response.data");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={(event, props) => {
          event.preventDefault();
          handleSubmit(props);
        }}>
        <Label>Name</Label>
        <Input
          autoFocus
          placeholder="Smurfette"
          key="name"
          type="text"
          name="name"
          required
          onChange={onChange}
          value={newSmurf.name}
        />

        <Label>Age</Label>
        <Input
          placeholder="13"
          key="age"
          type="text"
          name="age"
          required
          onChange={onChange}
          value={newSmurf.age}
        />

        <Label>Height</Label>
        <Input
          placeholder="58 cm"
          key="height"
          type="text"
          name="height"
          required
          onChange={onChange}
          value={newSmurf.height}
        />
        <Button color="info" onSubmit={handleSubmit}>
          Add a Smurf to the Village!
        </Button>
      </form>
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

export default connect(mapStateToProps)(Form);
