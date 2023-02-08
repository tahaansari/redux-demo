// FETCH USER REQUEST FILE

// INITIAL GLOBAL STATE
// const initialState = {
//   loading: false,
//   users: [],
//   error: "",
// };

// const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
// const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
// const FETCH_USER_FAILURE = "FETCH_USER_REQUEST";

// // ACTION CREATER FUNCTIONS
// const fetchUserRequest = () => {
//   return {
//     type: FETCH_USER_REQUEST,
//   };
// };

// const fetchUserSuccess = (users) => {
//   return {
//     type: FETCH_USER_SUCCESS,
//     payload: users,
//   };
// };

// const fetchUserFailure = (error) => {
//   return {
//     type: FETCH_USER_FAILURE,
//     payload: error,
//   };
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_USER_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case FETCH_USER_SUCCESS:
//       return {
//         loading: false,
//         users: action.payload,
//         error: "",
//       };
//     case FETCH_USER_FAILURE:
//       return {
//         loading: false,
//         users: [],
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const store = redux.createStore(reducer);
