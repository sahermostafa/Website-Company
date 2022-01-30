import {configureStore} from "@reduxjs/toolkit";
import dataSlice from "./redux/dataSlice";
import dataSlice2 from "./redux/dataSlice2";

const store = configureStore({
    reducer:{
        table1:dataSlice,
        table2:dataSlice2,
    },
});
export default store;