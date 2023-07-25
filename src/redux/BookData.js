import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    
    data: null,

};


// const userState = localStorage.getItem("user");
// // Check if userState is not null and is a valid JSON string
// if (userState !== null && typeof userState === "string") {
//   try {
//     initialState.user = userState
//     initialState.isLoggedIn = true

//   } catch (error) {
//     console.log(initialState)
//     console.error("Error parsing user state from localStorage:", error);
//   }
// }


const BookData = createSlice({
    name: 'books',
    initialState,
    reducers: {
        logUser: (state, action) => {
            console.log(state, action)
        },
        handleLogin: (state, action) => {
            if (action.email !== null && action.password !== null) {
                alert('found email')
                state.isLoggedIn = true

                state.user = {}
                for (let values of Object.keys(userData)) {

                    console.log({ values: userData[values] })
                }
                console.log(state.isLoggedIn)
                // navigate(`/home/${user.id}`)

                return state.user.id;
            }



        },
        logOut: (state, action) => {
            state.isLoggedIn = false
            state.user = null
            console.log(state)
        },
        getData: (state, action) => {
            console.log(action.payload)
            const url = `http://openlibrary.org/subjects/${action.payload}.json?`;



            try {
                const response = await fetch(url);
                const data = await response.json()
                initialState.(data.works);
            } catch (error) {
                console.error(error);
            }

        }

    }
}
})


export default BookData.reducer

export const { logUser, handleLogin, logOut, getData } = BookData.actions