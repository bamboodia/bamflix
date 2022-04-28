import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	searchTerm: "James",
	genres: [],
	type: "movie",
};

const optionsSlice = createSlice({
	name: "options",
	initialState,
	reducers: {
		setSearchTerm(state, action) {
			state.searchTerm = action.payload;
		},
		setGenres(state, action) {
			state.genres = action.payload;
		},
		setType(state, action) {
			state.type = action.payload;
		},
	},
});

export default optionsSlice.reducer;
