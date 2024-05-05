// jobReducer.js
import { createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = [];

// Create slice for job reducer
const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        addJob: (state, action) => {
            state.push(action.payload);
        },
        removeJob: (state, action) => {
            return state.filter(job => job.id !== action.payload);
        },
        updateJob: (state, action) => {
            const { id, updatedJob } = action.payload;
            const index = state.findIndex(job => job.id === id);
            if (index !== -1) {
                state[index] = { ...state[index], ...updatedJob };
            }
        },
    },
});

// Export actions
export const { addJob, removeJob, updateJob } = jobSlice.actions;

// Export reducer
export default jobSlice.reducer;
