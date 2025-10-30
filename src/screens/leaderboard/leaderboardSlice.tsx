

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface LeaderboardState {
    leaderboardData: any[];
    isLoading: boolean;
    error: string;
    dailyData: {};
    weeklyData: {};
    monthlyData: {};
    allTimeData: {};
    userRanks: any;
    gameMode: string;
    getWeeklyData: boolean;
    getDailyData: boolean;
    getMonthlyData: boolean;
    getAllTimeData: boolean;
}

const initialState: LeaderboardState = {
    leaderboardData: [],
    isLoading: false,
    error: '',
    dailyData: {},
    weeklyData: {},
    monthlyData: {},
    allTimeData: {},
    userRanks: null,
    gameMode: 'all',
    getWeeklyData: true,
    getDailyData: false,
    getMonthlyData: false,
    getAllTimeData: false,
};

export const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState,
    reducers: {
        setLeaderboardData: (state, action: PayloadAction<any[]>) => {
            state.leaderboardData = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        setDailyData: (state, action: PayloadAction<{}>) => {
            state.dailyData = action.payload;
        },
        setWeeklyData: (state, action: PayloadAction<{}>) => {
            state.weeklyData = action.payload;
        },
        setMonthlyData: (state, action: PayloadAction<{}>) => {
            state.monthlyData = action.payload;
        },
        setAllTimeData: (state, action: PayloadAction<{}>) => {
            state.allTimeData = action.payload;
        },
        setUserRanks: (state, action: PayloadAction<any>) => {
            state.userRanks = action.payload;
        },
        setGameMode: (state, action: PayloadAction<string>) => {
            state.gameMode = action.payload;
        },
        setGetWeeklyData: (state, action: PayloadAction<boolean>) => {
            state.getWeeklyData = action.payload;
        },
        setGetDailyData: (state, action: PayloadAction<boolean>) => {
            state.getDailyData = action.payload;
        },
        setGetMonthlyData: (state, action: PayloadAction<boolean>) => {
            state.getMonthlyData = action.payload;
        },
        setGetAllTimeData: (state, action: PayloadAction<boolean>) => {
            state.getAllTimeData = action.payload;
        },
    },
});

export const {
    setLeaderboardData,
    setLoading,
    setError,
    setDailyData,
    setWeeklyData,
    setMonthlyData,
    setAllTimeData,
    setUserRanks,
    setGameMode,
    setGetWeeklyData,
    setGetDailyData,
    setGetMonthlyData,
    setGetAllTimeData
} = leaderboardSlice.actions;

export default leaderboardSlice.reducer;