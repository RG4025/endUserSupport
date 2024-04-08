import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tickets: [{ id: 1, text: "Lorem ipsum doller sit", status: 0 }],
};

export const Slice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    addTicket: (state, action) => {
      const ticket = {
        id: nanoid(),
        text: action.payload,
        status: 0,
      };
      state.tickets.push(ticket);
    },

    removeTicket: (state, action) => {
      state.tickets = state.tickets.filter(
        (ticket) => ticket.id !== action.payload
      );
    },

    updateStatus: (state, action) => {
      state.tickets = state.tickets.filter((ticket) => {
        ticket.id === action.payload.id && (ticket.status = 1);
      });
    },
  },
});

export const { addTicket, removeTicket, updateStatus } = Slice.actions;

export default Slice.reducer;
