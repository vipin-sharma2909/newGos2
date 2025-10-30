

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface HomeState {
    contestsData: any[];
    nameAndContestId: Array<{name: string, contestId: number}>;
}

const initialState: HomeState = {
    contestsData: [],
    nameAndContestId: [],
};

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setContestsData: (state, action: PayloadAction<any[]>) => {
            state.contestsData = action.payload;
        },
        setNameAndContestId: (state, action: PayloadAction<Array<{name: string, contestId: number}>>) => {
            state.nameAndContestId = action.payload;
        },
    },
});

export const { setContestsData, setNameAndContestId } = homeSlice.actions;

export default homeSlice.reducer;