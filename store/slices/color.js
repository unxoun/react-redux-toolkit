import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  // name is mandatory but unused in development.
  // name, structures the action type like: <name>/<actionCreatorName>
  // here an action would be like: {type: "count/incrementedBy1"}
  name: "color",
  // Redux Toolkit uses Immer library to handle the direct mutation of the state.
  // Due to Immer patterns, eighther a new state can be returned OR the state's-
  // members can be mutated.
  initialState: "green",
  reducers: {
    changedToRed: (state, action) => {
      // Here the a New State is RETURNED because the state is defined as a primitive-
      // and, does not have any member to be mutated!      
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
