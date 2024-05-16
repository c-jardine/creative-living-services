import { EducationHistoryType } from "@/components/JobApplication/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: EducationHistoryType = {
  educationHistory: [
    {
      institution: "",
      name: "",
      degree: "",
      city: "",
      state: "",
      isComplete: "Yes",
    },
  ],
};

export const educationHistorySlice = createSlice({
  name: "educationHistory",
  initialState,
  reducers: {
    saveEducationHistory: (
      state,
      action: PayloadAction<EducationHistoryType>
    ) => {
      state.educationHistory = action.payload.educationHistory;
    },
  },
});

export const { saveEducationHistory } = educationHistorySlice.actions;

export default educationHistorySlice.reducer;
