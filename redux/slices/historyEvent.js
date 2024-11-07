import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const historyEventCustomer = createAsyncThunk(
  "request/loadRequestDetail",
  async (id, { rejectWithValue }) => {
    const id_check = "811d7a37-f598-4895-83b5-4809c635574b";
    const response = await axios
      .get(`event/customer/${id_check}`)
      .catch((e) => e.response);

    console.log("response", response);
    if (response.status !== 200) return rejectWithValue(response.data.message);
    return response.data.data;
  }
);

const historyEventSlice = createSlice({
  name: "requestDetail",
  initialState: {
    isLoading: false,
    historyEvent: [],
    selectedHistoryEvent: null,
    status: "idle",
    error: null,
  },
  reducers: {
    setSelectedHistoryEvent: (state, action) => {
      state.selectedHistoryEvent = action.payload;
    },  
  },
  extraReducers: (builder) => {
    builder
      .addCase(historyEventCustomer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(historyEventCustomer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.historyEvent = action.payload;
      })
      .addCase(historyEventCustomer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedHistoryEvent } = historyEventSlice.actions;
export default historyEventSlice.reducer;