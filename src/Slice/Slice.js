import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tickets: [{ id: nanoid(), text: "This Is The First Ticket", status: false }],
};

export const Slice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    addTicket: (state, action) => {
      const ticket = {
        id: nanoid(),
        text: action.payload,
        status: false,
      };
      state.tickets.push(ticket);
    },

    removeTicket: (state, action) => {
      state.tickets = state.tickets.filter(
        (ticket) => ticket.id !== action.payload
      );
    },

    updateStatus: (state, action) => {
      state.tickets = state.tickets.map((ticket) => {
        if (ticket.id === action.payload) {
          return { ...ticket, status: true }; // Create a new ticket object with updated status
        } else {
          return ticket; // Keep existing ticket for other items
        }
      });
    },
  },
});

export const { addTicket, removeTicket, updateStatus } = Slice.actions;

export default Slice.reducer;
