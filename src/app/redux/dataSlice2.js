import {createSlice} from "@reduxjs/toolkit";
import {Tabledata2} from "../../data/Data";

export const  dataSlice2 = createSlice({
    name:'table2',
    initialState:{
        table2:Tabledata2,
    },
    reducers:{
        addElement2: (state,{payload}) => {
            state.table2 = payload;
        },
        deleteArrow: (state, action) => {

           state.table2 = state.table2.slice().filter(task => task.id !== action.payload);
        },
        AscendingSort: (state) => {
            state.table2 = state.table2.slice().sort((a, b) => (a.id > b.id) ? 1 : -1);
        },
        DescendingSort: (state) => {
            state.table2 = state.table2.slice().sort((a, b) => (a.id < b.id) ? 1 : -1);
        },
    },
})
export const {deleteArrow,AscendingSort,DescendingSort} = dataSlice2.actions;
export default dataSlice2.reducer;