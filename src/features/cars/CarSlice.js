import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: [ "Honda NSX", "Toyota Supra MK4", "Nissan Skyline GTR", "Mazda RX-7",
            "Honda RC213V", "Yamaha YZR-M1",  "Kawasaki Ninja H2R", "Suzuki GSXR"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducer: {}
})

export default carSlice.reducer