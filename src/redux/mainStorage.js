import { configureStore } from "@reduxjs/toolkit"
import booksReducer from './BookData'

export const mainData = configureStore({
    reducer: {
        books: booksReducer
    }
})