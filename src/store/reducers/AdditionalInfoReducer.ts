import { AdditionalInfoType } from "@/components/JobApplication/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AdditionalInfoType = {
  driversLicense: "",
  isFelon: "No",
  isAuthorizedToWork: "No",
  isWillingToBackgroundCheck: "No",
  isFormerApplicant: "No",
  isDriver: "No",
  isGraduate: "No",
};

export const additionalInfoSlice = createSlice({
  name: "additionalInfo",
  initialState,
  reducers: {
    saveAdditionalInfo: (state, action: PayloadAction<AdditionalInfoType>) => {
      const {
        driversLicense,
        isFelon,
        isAuthorizedToWork,
        isWillingToBackgroundCheck,
        isFormerApplicant,
        isDriver,
        isGraduate,
      } = action.payload;
      state.driversLicense = driversLicense;
      state.isFelon = isFelon;
      state.isAuthorizedToWork = isAuthorizedToWork;
      state.isWillingToBackgroundCheck = isWillingToBackgroundCheck;
      state.isFormerApplicant = isFormerApplicant;
      state.isDriver = isDriver;
      state.isGraduate = isGraduate;
    },
  },
});

export const { saveAdditionalInfo } = additionalInfoSlice.actions;

export default additionalInfoSlice.reducer;
