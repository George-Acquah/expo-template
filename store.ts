import { Reducer, UnknownAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "@/features/auth/auth.slice";
import mapSlice from "@/features/map/map.slice";
import permissionsSlice from "@/features/permissions/permissions.slice";
import rootSlice from "@/features/root.slice";
import sessionSlice from "./features/session/session.slice";
import toastSlice from "./features/toast/toast.slice";
import errorSlice from "./features/error/error.slice";
import { _IAuthState, _IBookingState, _ICenters, _IErrorState, _IFormState, _IMapState, _IPermission, _IResrvations, _IRoots, _ISessionState, _ISlots, _IToastState, _IVehicles } from "./features/types";
import formsSlice from "./features/forms/forms.slice";

export interface RootState {
  auth: _IAuthState;
  map: _IMapState;
  root: _IRoots;
  permission: _IPermission;
  session: _ISessionState;
  toast: _IToastState;
  error: _IErrorState;
  form: _IFormState
}

const appReducer = combineReducers({
  auth: authSlice,
  map: mapSlice,
  root: rootSlice,
  permission: permissionsSlice,
  session: sessionSlice,
  toast: toastSlice,
  error: errorSlice,
  form: formsSlice,
});

const rootReducer: Reducer = (state: RootState, action: UnknownAction) => {
  if (action.type === "auth/logout") {
    // this applies to all keys defined in persistConfig(s)
    state = {} as RootState;
  }
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
      },
    }),
});

// export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;