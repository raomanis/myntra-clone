import {createSlice} from "@reduxjs/toolkit"


const FetchStatusSlice = createSlice({
  name:"fetecStatus ",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers:{
   markFetchDone:(state)=>{
      state.fetchDone = true;
    },
    markFetchingStarted:(state)=>{
      state.currentlyFetching = true;
    },
    markFetchingFinished:(state)=>{
      state.currentlyFetching = false;
    }
  }
});
export const FetchStatusActions = FetchStatusSlice.actions
export default FetchStatusSlice