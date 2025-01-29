import { Center_Filter } from "@/utils/enums/global.enums";
import { _IRootState, _IToastState, _IRoots, _IAuthState, _IPermission, _IMapState, _ISessionState, _IErrorState, _IFormState } from "./types";

const rootState: _IRootState = {
  isLoading: false,
  error: null,
  message: null,
};


const toastInitialState: _IToastState= {
  toasts: [],
};

const rootInitialState: _IRoots = {
  ...rootState,
  showOnboarding: true,
  viewMap: false,
  nearbyMap: true,
  centersFilter: Center_Filter.POPULAR,
  slotsFilter: Center_Filter.AVAILABLE,
};

const authInitialState: _IAuthState = {
  ...rootState,
  isAuthenticated: false,
  reg_details: null,
  exp: 0,
  tokens: null,
  user: null,
};


const permissionsInitialState: _IPermission = {
  ...rootState,
  currentLocation: null
}

const mapInitialState: _IMapState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
  selected: null,
};

const sessionInitialState: _ISessionState = {
  showModal: false,
  callbackUrl: undefined,
};


const errorInitialState: _IErrorState = {
  message: null,
  visible: false,
  button_label: undefined,
  description: undefined,
};

const formInitialState: _IFormState = {
  ...rootInitialState,
//   vehicle: {
//     make: "",
//     model: "",
//     year: "",
//     vin: "",
//     color: "",
//     type: "",
//   },
//   vehicleInsurance: {
//       policyNumber: '',
//   insurer: '',
//   startDate: new Date().toDateString(),
//   endDate: new Date().toDateString(),
//   premiumAmount: ''
//   },
//   vehicleRegistration: {
//        registrationNumber: '',
//  registrationDate: new Date().toDateString(),
//  expiryDate: new Date().toDateString(),
//   }
};

export {
  authInitialState,
  mapInitialState,
  permissionsInitialState,
  rootInitialState,
  sessionInitialState,
  toastInitialState,
  errorInitialState,
  formInitialState
};