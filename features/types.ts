import { Center_Filter } from "@/utils/enums/global.enums";

interface _IRootState {
  isLoading: boolean;
  message: string | null;
  error: string | null;
}

interface _IRoots extends _IRootState {
  showOnboarding: boolean;
  viewMap: boolean;
  nearbyMap: boolean;
  centersFilter: Center_Filter | null;
  slotsFilter: Center_Filter | null;
}


interface _IToastState {
  toasts: _IToast[];
}

interface _IPermission extends _IRootState {
  currentLocation: _IDestination | null
}
interface _IAuthState extends _IRootState {
  isAuthenticated: boolean | null;
  exp: number;
  tokens: _ITokens | null;
  reg_details: _IRegisterResponse | null;
  user: {
    id: string;
    role: string;
  } | null;
}

interface _IMapState {
  origin: _IDestination | null;
  destination: _IDestination | null;
  travelTimeInformation: string | null;
  selected: null;
  // map: React.MutableObject<BottomSheetModal>;
}
interface _ISessionState {
  showModal: boolean;
  callbackUrl: string | undefined;
}

interface _IErrorState {
  message: string | null;
  visible: boolean;
  button_label: undefined | string;
  description: undefined | string;
}



export interface _IVReg {
    registrationNumber: string;
 registrationDate: string;
 expiryDate: string;
}
interface _IFormState extends _IRootState {
//   vehicle: _IVehicle;
//   vehicleInsurance: _IVehicleInsurance;
//   vehicleRegistration: _IVReg;
}

export { _IAuthState, _IMapState, _IRootState, _IPermission, _IRoots, _ISessionState, _IToastState, _IErrorState, _IFormState };