import { configureStore } from '@reduxjs/toolkit'
import { AppState } from "../../types/appState";
import socketSlice from './socket/socket.slice';
import stocksSlice from './stocks/stocks.slice';
import { socketMiddleware } from '../middleware/socket.middleware';

export const store = configureStore<AppState>({
  reducer: {
    socket: socketSlice,
    stocks: stocksSlice
  },
  middleware: [socketMiddleware]
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
