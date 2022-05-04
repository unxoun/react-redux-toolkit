import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  // name is mandatory but unused in development.
  // name, structures the action type like: <name>/<actionCreatorName>
  // here an action would be like: {type: "count/incrementedBy1"}
  name: "count",
  // Redux Toolkit uses Immer library to handle the direct mutation of the state.
  // Due to Immer patterns, eighther a new state can be returned OR the state's-
  // members can be mutated.
  // Object State:
  initialState: { value: 0 },
  reducers: {
    incrementBy1: (state, action) => {
      // Instead of returning a new state, the state member is mutated:    
      const payload = action.payload; // = action creator's argument when invoked in a component.
      state.value = state.value + 1;
    },
    incrementBy10: (state, action) => {
      // Instead of mutating the state's member, a new state is returned:
      const payload = action.payload;
      return {value: state.value + 10};
    },
  },
});

// an Action Creator is generated per reducer.
// Better to name the actions as "Events That Happened" rather than "Setters".
export const { incrementBy1: incrementedBy1, incrementBy10: incrementedBy10 } =
  slice.actions;

export default slice.reducer;
