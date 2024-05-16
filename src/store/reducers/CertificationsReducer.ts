import { CertificationsType } from "@/components/JobApplication/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CertificationsType = {
  hasCPR: "No",
  hasFirstAid: "No",
  hasOralTopical: "No",
  other: "",
};

export const certificationsSlice = createSlice({
  name: "certifications",
  initialState,
  reducers: {
    saveCertifications: (state, action: PayloadAction<CertificationsType>) => {
      const { hasCPR, hasFirstAid, hasOralTopical, other } = action.payload;
      state.hasCPR = hasCPR;
      state.hasFirstAid = hasFirstAid;
      state.hasOralTopical = hasOralTopical;
      state.other = other;
    },
  },
});

export const { saveCertifications } = certificationsSlice.actions;

export default certificationsSlice.reducer;
