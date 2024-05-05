// filterReducer.js
import { createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
    selectedRole: '',
    selectedDesignation: '',
    selectedEmployees: '',
    selectedExperience: '',
    selectedWorkLocation: '',
    selectedSalary: '',
    searchCompany: '',
};

// Create slice for filter reducer
const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilterOption: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },
    },
});

// Export action
export const { setFilterOption } = filterSlice.actions;

// Export reducer
export default filterSlice.reducer;
