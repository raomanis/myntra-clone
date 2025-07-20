import {configureStore} from "@reduxjs/toolkit"
import ItemsSlice from "./itemsSlice";
import FetchStatusSlice from "./fetechStatusSlice";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer:{
    items: ItemsSlice.reducer,
    fetchStatus: FetchStatusSlice.reducer,
    bag: bagSlice.reducer
  }
}) ;

export default myntraStore;