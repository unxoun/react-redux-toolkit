import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  // name is mandatory but unused in development.
  // name, structures the action type like: <name>/<actionCreatorName>
  // here an action would be like: {type: "count/incrementedBy1"}
  name: "color",
  // Redux Toolkit uses Immer library to handle teh direct mutation of the state.
  // Due to Immer patterns, if the slice state is a primitive (e.g. a number)-
  // and not an object, the reducer functions must "return" the new state.
  // But, if the slice state is an object, no need to return the new state.
  initialState: "green",
  reducers: {
    changedToRed: (state, action) => {
      // Because the state is defined as a primitive, the reducer must-
      // "return" the new state:
      const payload = action.payload; // = action creator's argument when invoked in a component.
      return "red";
    },
    changedToGreen: (state, action) => {
      const payload = action.payload;
      return "green";
    },
  },
});

// an Action Creator is generated per reducer.
// Better to name the actions as "Events That Happened" rather than "Setters".
export const { changedToRed, changedToGreen } = slice.actions;

export default slice.reducer;
