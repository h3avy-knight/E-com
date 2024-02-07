import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useHistory } from "react-router-dom";

var initialComponentPropsManagementState = {
  load: false,
  loggedInUser: null,
};

export const ComponentPropsManagement = createSlice({
  name: "ComponentPropsManagement",
  initialState: initialComponentPropsManagementState,
  reducers: {
    // Login User
    handleLoginRequest: (state, payload) => {
      console.log("PAYLOAD request", payload);
      state.load = true;
    },
    handleLoginResponse: (state, payload) => {
      console.log("PAYLOAD RESPONSE", payload);
      state.loggedInUser = payload.payload;
      // state.load = false;
      // window.location.replace("/");
    },
  },
});

// Action creators are generated for each case reducer function

export const { handleLoginRequest, handleLoginResponse } =
  ComponentPropsManagement.actions;

export default ComponentPropsManagement.reducer;
