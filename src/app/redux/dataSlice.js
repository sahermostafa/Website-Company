import {createSlice} from "@reduxjs/toolkit";
import {Tabledata1} from "../../data/Data";

export const  dataSlice = createSlice({
    name:'table1',
    initialState:{
        table1:Tabledata1,
    },
    reducers:{
        addElement: (state,{payload}) => {
            state.table1 = payload;
        },
        AscendingSort: (state) => {
            state.table1 = state.table1.slice().sort((a, b) => (a.id > b.id) ? 1 : -1);
        },
        DescendingSort: (state) => {
            state.table1 = state.table1.slice().sort((a, b) => (a.id < b.id) ? 1 : -1);
        },
    },
})
export const {addElement,AscendingSort,DescendingSort} = dataSlice.actions;
export default dataSlice.reducer;