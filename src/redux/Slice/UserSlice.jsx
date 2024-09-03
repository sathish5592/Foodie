import { createSlice } from "@reduxjs/toolkit";


const userName=createSlice({
    name:"userName",
    initialState:{
        name:""
    },
    reducers:{
        updateName:(state,action)=>{
              state.name=action.payload
        }
    }
});
export const {updateName}=userName.actions;
export default userName.reducer;