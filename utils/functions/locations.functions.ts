import * as Location from "expo-location"

export const locationPermission = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
};