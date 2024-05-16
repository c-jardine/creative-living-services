import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import AdditionalInfoReducer from "./reducers/AdditionalInfoReducer";
import CertificationsReducer from "./reducers/CertificationsReducer";
import ContactInfoReducer from "./reducers/ContactInfoReducer";
import EducationHistoryReducer from "./reducers/EducationHistoryReducer";
import EmploymentHistoryReducer from "./reducers/EmploymentHistoryReducer";
import PersonalDetailsReducer from "./reducers/PersonalDetailsReducer";

const persistConfig = {
  key: "root",
  storage,
};

const RootReducer = combineReducers({
  personalDetails: PersonalDetailsReducer,
  contactInfo: ContactInfoReducer,
  additionalInfo: AdditionalInfoReducer,
  employmentHistory: EmploymentHistoryReducer,
  educationHistory: EducationHistoryReducer,
  certifications: CertificationsReducer,
});

const persistedReducer = persistReducer(persistConfig, RootReducer);

const store = configureStore({
  reducer: { persistedReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
