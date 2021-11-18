import { createSlice } from '@reduxjs/toolkit'
import  { fetchUserGetRequest , fetchUserDeleteRequest, fetchUserPostRequest, fetchUserPutRequest } from '../thunks/thunk'
const initialState = {
  getData: [],
}

export const apiSlice = createSlice({
  name: 'axios',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserGetRequest.fulfilled, (state, action) => {
      // debugger;
      state.getData = action.payload.data
      // debugger
      // Add user to the state array
      // state.entities.push(action.payload)
    })
    .addCase(fetchUserDeleteRequest.fulfilled, (state,action)=>{
      
    })
    .addCase(fetchUserPostRequest.fulfilled, (state,action)=>{
      // debugger;
      state.getData = [...state.getData, action.payload.data]
    })
    .addCase(fetchUserPutRequest.fulfilled, (state,action)=>{
    //  debugger

      // state.getData = state.getData.map((ele)=>{
      //   if(action.payload.data.id === ele.id){
      //     return {...ele,id:action.payload.data}
      //   }
      //   return ele
      // })
      console.log('reducer',state.getData)
      console.log('reducer',action.payload.data)
    })

  },
})

// Action creators are generated for each case reducer function
export const {  } = apiSlice.actions

export default apiSlice.reducer