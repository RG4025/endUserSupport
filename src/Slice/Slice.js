import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tickets: [
    {
      id: nanoid(),
      userId: 0,
      text: "Please try adding another ticket as you are seeing the default one.",
      status: false,
      answer: "",
      assignTicketByAdmin: "",
    },
  ],
};

export const Slice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    addTicket: (state, action) => {
      let userIdFetched = action.payload[0];
      let userText = action.payload[1];
      console.log(userIdFetched, userText);

      const ticket = {
        id: nanoid(),
        userId: userIdFetched,
        text: userText,
        status: false,
        answer: "",
        assignTicketByAdmin: "",
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
          return { ...ticket, status: true };
        } else {
          return ticket;
        }
      });
    },

    assignTicketByAdmin: (state, action) => {
      const ticketId = action.payload[0];
      const assignTicket = action.payload[1];

      const ticketIndex = state.tickets.findIndex(
        (ticket) => ticket.id === ticketId
      );

      if (ticketIndex !== -1) {
        state.tickets[ticketIndex] = {
          ...state.tickets[ticketIndex],
          assignTicketByAdmin: assignTicket,
        };
      }
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

export const {
  addTicket,
  removeTicket,
  updateStatus,
  answerTicket,
  assignTicketByAdmin,
} = Slice.actions;

export default Slice.reducer;
