import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "@/store";
import { rootInitialState } from "./states";
import { Center_Filter } from "@/utils/enums/global.enums";
import { _IRoots } from "./types";

const rootSlice = createSlice({
  name: "root",
  initialState: rootInitialState,
  reducers: {
    disableShowOnboarding: (state: _IRoots) => {
      state.showOnboarding = false;
    },
    showMap: (state: _IRoots) => {
      state.viewMap = true;
    },
    collpaseMap: (state: _IRoots) => {
      state.viewMap = false;
    },
    showNearbyMap: (state: _IRoots) => {
      state.nearbyMap = true;
    },
    hideNearbyMap: (state: _IRoots) => {
      state.nearbyMap = false;
    },
    setCentersFilter: (state: _IRoots, action: PayloadAction<Center_Filter>) => {
      state.centersFilter = action.payload;
    },
  },
});

export const {disableShowOnboarding, showMap, collpaseMap, hideNearbyMap, showNearbyMap, setCentersFilter } = rootSlice.actions;

export const selectOnboardingStatus = (state: RootState) => state.root.showOnboarding;

export const selectViewMap = (state: RootState) => state.root.viewMap;

export const selectNearbyMap = (state: RootState) => state.root.nearbyMap;
export const selectCentersFilter = (state: RootState) => state.root.centersFilter;

export const selectSlotsFilter = (state: RootState) =>
  state.root.slotsFilter;

export default rootSlice.reducer;