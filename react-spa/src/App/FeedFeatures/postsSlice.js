import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "0",
        title: "Тестовая статья",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "9/25/2020 8:09PM"
    }
]

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export default postsSlice.reducer