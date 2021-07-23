import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
    },
    devTools: (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;