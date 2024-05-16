import { PersonalDetailsType } from "@/components/JobApplication/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { differenceInYears } from "date-fns";

const initialState: PersonalDetailsType = {
  firstName: "",
  middleInitial: "",
  lastName: "",
  birthday: "",
  isOver18: "No",
};

export const personalDetailsSlice = createSlice({
  name: "personalDetails",
  initialState,
  reducers: {
    savePersonalDetails: (
      state,
      action: PayloadAction<PersonalDetailsType>
    ) => {
      const { firstName, middleInitial, lastName, birthday } = action.payload;
      state.firstName = firstName;
      state.middleInitial = middleInitial;
      state.lastName = lastName;
      state.birthday = birthday;

      const enteredDate = new Date(birthday);
      const today = new Date();

      const age = differenceInYears(today, enteredDate);
      state.isOver18 = age >= 18 ? "Yes" : "No";
    },
  },
});

export const { savePersonalDetails } = personalDetailsSlice.actions;

export default personalDetailsSlice.reducer;
