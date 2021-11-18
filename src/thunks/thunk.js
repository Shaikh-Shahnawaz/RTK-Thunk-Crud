import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



//------- get request ---------

const fetchUserGetRequest = createAsyncThunk(
  "users/fetchUserGetStatus",
  // async (userId, thunkAPI) => {
    async () => {
      // axios is here for calling a api
      const data = await axios.get("http://localhost:3500/users");
      
      return data;
    }
    );
    
//------- delete request ---------

const fetchUserDeleteRequest = createAsyncThunk(
  "users/fetchUserDeleteStatus",
  // async (userId, thunkAPI) => {
  async (id) => {
    // axios is here for calling a api
    const data = await axios.delete(`http://localhost:3500/users/${id}`);

    return data;
  }
);

//------- post request ---------

const fetchUserPostRequest = createAsyncThunk(
  "users/fetchUserPostRequest",
  // async (userId, thunkAPI) => {
    async (payload) => {
      // axios is here for calling a api
      const data = await axios.post(`http://localhost:3500/users/`,payload);
      
      return data;
    }
    );
    
  //------- put request ---------

const fetchUserPutRequest = createAsyncThunk(
  "users/fetchUserPutRequest",
  // async (userId, thunkAPI) => {
  async (uData) => {
    // debugger
    console.log('thunk',uData.editId)
    console.log('thunk',uData.data)
    // axios is here for calling a api
    const data = await axios.put(`http://localhost:3500/users/${uData.editId}`,uData.data);
// debugger
    return data;
  }
);




export  { fetchUserGetRequest , fetchUserDeleteRequest, fetchUserPostRequest, fetchUserPutRequest }
