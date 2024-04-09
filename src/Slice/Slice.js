import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
const initialState = {
  tickets: [
    {
      id: nanoid(),
      text: "Please try adding another ticket as you are seeing the default one.",
      status: false,
      answer: "",
      documents: [],
    },
  ],
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
        answer: "",
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

    answerTicket: (state, action) => {
      // const { ticketId, answerText } = action.payload;
      // console.log(ticketId, answerText);
      // console.log(action.payload);
      const ticketId = action.payload[0];
      const answerText = action.payload[1];

      const ticketIndex = state.tickets.findIndex(
        (ticket) => ticket.id === ticketId
      );

      if (ticketIndex !== -1) {
        state.tickets[ticketIndex] = {
          ...state.tickets[ticketIndex],
          answer: answerText,
        };
      }
    },

    addTicketDocument: (state, action) => {
      const { ticketId, file, fileName, fileType } = action.payload;

      const ticketIndex = state.tickets.findIndex(
        (ticket) => ticket.id === ticketId
      );

      if (ticketIndex !== -1) {
        state.tickets[ticketIndex].documents.push({
          fileName,
          file,
          fileType,
        });
      }
    },
  },
});

export const { addTicket, removeTicket, updateStatus, answerTicket } =
  Slice.actions;

export default Slice.reducer;
