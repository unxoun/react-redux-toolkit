import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  // name is mandatory but unused in development.
  // name, structures the action type like: <name>/<actionCreatorName>
  // here an action would be like: {type: "count/incrementedBy1"}
  name: "count",
  // Redux Toolkit uses Immer library to handle teh direct mutation of the state.
  // Due to Immer patterns, if the slice state is a primitive (e.g. a number)-
  // and not an object, the reducer functions must "return" the new state.
  // But, if the slice state is an object, no need to return the new state.
  // Primitive State:
  // initialState: 0,
  // Object State:
  initialState: { value: 0 },
  reducers: {
    // Since the State is an object, there is no need for the reducer to-
    // "return" the new state.
    // incrementBy1: (state, action) => {
    //   return state + 1;
    // },
    incrementBy1: (state, action) => {
      // Since the State is an object, there is no need for the reducer to-
      // "return" the new state.
      const payload = action.payload; // = action creator's argument when invoked in a component.
      state = state + 1;
    },
    incrementBy10: (state, action) => {
      const payload = action.payload;
      return (state = state + 10);
    },
  },
});

// an Action Creator is generated per reducer.
// Better to name the actions as "Events That Happened" rather than "Setters".
export const { incrementBy1: incrementedBy1, incrementBy10: incrementedBy10 } =
  slice.actions;

export default slice.reducer;
