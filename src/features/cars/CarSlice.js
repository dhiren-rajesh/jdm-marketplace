import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: [ "Honda NSX", "Toyota Supra MK4", "Nissan Skyline GTR", "Mazda RX-7",
            "Mitsubishi Evolution IX"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducer: {}
})

export default carSlice.reducer