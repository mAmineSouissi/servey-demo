export const SETTINGS = {
  Account: "account",
  Profile: "profile",
  Appearance: "appearance",
};

export const map = (setting: string) => {
  switch (setting) {
    case SETTINGS.Account:
      return {
        name: "Account",
        url: "/account",
      };
    case SETTINGS.Profile:
      return {
        name: "Profile",
        url: "/profile",
      };
    case SETTINGS.Appearance:
      return {
        name: "Appearance",
        url: "/appearance",
      };
    default:
      return {
        name: "Account",
        url: "/account",
      };
  }
};

