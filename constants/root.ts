const APP_NAME = "Smart Car Parking";
const TOKEN_KEY = "jwt";
const USER_KEY = "logged_user";
const EXP = 'exp-t'

const ids = {
  VEHICLE: "656117b8bc100d9f24baed06",
  CENTER: "656482722cbf180fcb3aaf3d",
  SLOT: "6564827f2cbf180fcb3aaf42",
};

const keys = {
  USER_KEY,
  TOKEN_KEY,
  EXP,
}
const AXIOS_ERRORS = {
  NETWORK_ERROR: "Network Error",
}

const SHOW_TOAST = "x-show-toast";
const SCREEN_ROUTE = "Screen-Route";

const tipsData: _ITipsData[] = [
  {
    title: "Find Parking Easily",
    description:
      "Use our search bar to find available parking near your destination.",
    image:
      "https://images.pexels.com/photos/7630190/pexels-photo-7630190.jpeg?auto=compress&cs=tinysrgb&w=800images/tip1.jpg",
  },
  {
    title: "Save Time & Money",
    description:
      "Compare prices and book parking in advance to avoid last-minute hassles.",
    image:
      "https://images.pexels.com/photos/7630190/pexels-photo-7630190.jpeg?auto=compress&cs=tinysrgb&w=800images/tip1.jpg",
  },
  {
    title: "Manage Bookings Simply and Faster",
    description: "View and manage all your parking reservations in one place.",
    image:
      "https://images.pexels.com/photos/7630190/pexels-photo-7630190.jpeg?auto=compress&cs=tinysrgb&w=800images/tip1.jpg",
  },
];

const tabData = ["Upcoming", "History", "Faourite"];


interface _ISearch extends SearchParamsKeys {
  users: string;
  centers: string;
  slots: string;
}

const searchParamsKeys: _ISearch = {
  users: "users",
  centers: "centers",
  slots: "slots",
  // SLOTS_KEY: "s_key",
};

const pathname_helper: { center: string } = {
  center: "/centers",
};


const AUTH_MODALS = {
  LOGIN: "Login-Modal",
  SIGNUP: "Signup-Modal",
  FORGOT: "Forgotpassword-Modal",
  VEHICLES: "add-vehicles",
  ADDRESS: "add-address",
  USER_TYPE: "select-usertype",
};

const ACCOUNT_MODALS = {
  MANAGE: "manage-account",
  MONETIZING: "monetizing",
  MESSAGES: "messages",
  SETTINGS: "settings",
  LEGAL: "legal",
  ACTIVITY: "activity",
  PAYMENTS: "payment",
  HELP: "help",
};

const NAVIGATION_MODALS = {
  REQUEST_RESERVATION: 'request-reservation'
}



export { 
  APP_NAME,
  AXIOS_ERRORS,
  keys,
  tipsData,
  tabData,
  ids,
  searchParamsKeys,
  pathname_helper,
  AUTH_MODALS,
  ACCOUNT_MODALS,
  NAVIGATION_MODALS,
  SHOW_TOAST,
SCREEN_ROUTE
}