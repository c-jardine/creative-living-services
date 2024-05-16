import { ContactInfoType } from "@/components/JobApplication/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ContactInfoType = {
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  zipCode: "",
  email: "",
  phone: "",
  additionalPhone: "",
};

export const contactInfoSlice = createSlice({
  name: "contactInfo",
  initialState,
  reducers: {
    saveContactInfo: (state, action: PayloadAction<ContactInfoType>) => {
      const {
        addressLine1,
        addressLine2,
        city,
        state: stateAbbrev,
        zipCode,
        email,
        phone,
        additionalPhone,
      } = action.payload;
      state.addressLine1 = addressLine1;
      state.addressLine2 = addressLine2;
      state.city = city;
      state.state = stateAbbrev;
      state.zipCode = zipCode;
      state.email = email;
      state.phone = phone;
      state.additionalPhone = additionalPhone;
    },
  },
});

export const { saveContactInfo } = contactInfoSlice.actions;

export default contactInfoSlice.reducer;
