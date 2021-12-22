import {createSlice} from '@reduxjs/toolkit'

const initialStateValue = {name:'', age:0, email:''}

const userSlice = createSlice({
    name:'user',
    initialState:{ value:{initialStateValue} },
    reducers:{
        login:(state,action)=>{
            state.value = action.payload;
        },
        logout:(state,action)=>{
            state.value = {initialStateValue}
        },
        changeUserInfo:(state,action)=>{
            state.value = action.payload
        }
    }

})

export const {login, logout, changeUserInfo} = userSlice.actions
export default userSlice.reducer;