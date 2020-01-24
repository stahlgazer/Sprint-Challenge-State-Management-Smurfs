import axios from 'axios';
export const FETCHING_SMURF_START = 'FETCHING_SMURF_START';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_FAILURE = 'FETCHING_SMURF_FAILURE';

export const fetchSmurf = () => dispatch => {
  dispatch({ type: FETCHING_SMURF_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      //res.data ==> SMURF
      console.log(res.data, 'incoming smurfs')
      dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_SMURF_FAILURE, payload: err.response });
    });
};

// export const addSmurf = () => dispatch => {
    
//     dispatch({ type: FETCHING_SMURF_START });
//     axios
//       .post('http://localhost:3333/smurfs', {
//         name: "",
//         age: "",
//         height: "",
//       })
//       .then(res => {
//         //res.data ==> SMURF
//         console.log(res.data, 'incoming smurfs')
//         dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
//       })
//       .catch(err => {
//         dispatch({ type: FETCHING_SMURF_FAILURE, payload: err.response });
//       });
//   };