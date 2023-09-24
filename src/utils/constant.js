export const topBarHeight = 64;
export const sideNavWidth = 260;
export const navbarHeight = 60;
export const sidenavCompactWidth = 80;
export const containedLayoutWidth = 1200;

const SERVER_IP = "wareup-api-dev.onrender.com";
//TODO: separar API_ROUTES por entidad
export const ENV = {
  BASE_PATH: `https://${SERVER_IP}`,
  BASE_API: `https://${SERVER_IP}/api/v1`,
  API_ROUTES: {
    LOGIN: "auth/login",
    REFRESH_ACCESS_TOKEN: "auth/refresh_access_token",
    CURRENT_USER_INFO: "users/me",
    USER: "users",
    RECOVER_PASSWORD: "users/recover-password",
    COMPANY: "companies",
    USER_COMPANY: "companies/byUser",
    CONTACT: "users/contact",
    UPDATE_PASSWORD: "users/update-password",
    DEPARTMENTS: "common/departments",
    DEPOSIT: "deposits",
    SERVICES: "serviceGroups",
    DEPOSIT_IMAGES: "deposits/images",
    DEPOSIT_REQUEST: "depositRequests",
    USER_DEPOSITS: "deposits/byUser",
    USER_DEPOSIT_REQUEST: "depositRequests/byUser",
    DEPOSIT_SERVICES: "deposits/services",
    DEPOSIT_CALENDAR: "/depositCalendar",
    DEPOSIT_CALENDAR_INFO: "/depositCalendar/byDeposit",
  },
  CONSTANT_ROUTES: {
    GOOGLE_MAPS_LOCATION_COORDINATES:
      "https://maps.googleapis.com/maps/api/geocode/json",
  },
  JWT: {
    ACCESS: "access",
    REFRESH: "refresh",
  },
  API_KEY: {
    GOOGLE_MAPS: "AIzaSyCyhhjlBSyQEUA1qNH9WATD6XPaB2pt3V4",
  },
  GOOGLE_DEFAULT_COORDINATES: {
    INITIAL_LATITUDE: -34.90867800000001,
    INITIAL_LONGITUDE: -56.1893107,
  },
  SERVICE_GROUPS: {
    LABORAL_DAYS_SERVICE_GROUP_ID: 7,
    DEPOSITS_TYPE_SERVICE_GROUP_ID: 1,
    CERT_GROUP_ID: 5,
    HAB_GROUP_ID: 6,
  },
  MIN_MAX_FILTERS: {
    MIN_PRICE: 0,
    MAX_PRICE: 1000,
    MIN_TOTAL_M3: 0,
    MAX_TOTAL_M3: 1000,
  }
};
