import { createSlice } from "@reduxjs/toolkit";
import { getGenres} from "../common/apis/movieApi";

const initialState = {
	searchTerm: "",
	genres: undefined,
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

export const {setGenres} = optionsSlice.actions

export const fetchGenres = () => async (dispatch) => {
	try {
		const genres = await getGenres();
		dispatch(setGenres(genres))
	} catch (err) {
		console.log(err);
	}
}

export default optionsSlice.reducer;
