import { EmploymentHistoryType } from "@/components/JobApplication/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: EmploymentHistoryType = {
  employmentHistory: [
    {
      position: "",
      startDate: "",
      endDate: "",
      company: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      supervisorName: "",
      supervisorNumber: "",
      salary: "",
      weeklyHours: "",
      duties: "",
      reasonForLeaving: "",
    },
  ],
};

export const employmentHistorySlice = createSlice({
  name: "employmentHistory",
  initialState,
  reducers: {
    saveEmploymentHistory: (
      state,
      action: PayloadAction<EmploymentHistoryType>
    ) => {
      state.employmentHistory = action.payload.employmentHistory;
    },
  },
});

export const { saveEmploymentHistory } = employmentHistorySlice.actions;

export default employmentHistorySlice.reducer;
