/**
 * Centralized business configuration for Goshen Automotive Mobile Diesel Repair.
 * Edit these details to update the site globally.
 */

export const businessConfig = {
  name: "Goshen Automotive Mobile Diesel Repair",
  tagline: "Making Diesels Great Again",
  phone: "(520) 990-1033",
  phoneRaw: "15209901033",
  email: "service@goshendiesel.com",
  address: "5554 S Hildreth Ave, Tucson, AZ 85746",
  addressNote: "Please note: This is our physical business address. Mobile dispatch locations vary based on service availability.",
  hours: {
    weekdays: "8:00 AM - 6:00 PM",
    saturday: "8:00 AM - 4:00 PM",
    sunday: "Closed (Emergency appointments only)",
  },
  socials: {
    facebook: "https://facebook.com/goshendiesel",
    instagram: "https://instagram.com/goshendiesel",
  },
  serviceArea: {
    primary: "Tucson, AZ",
    radius: "30+ miles",
    cities: ["Tucson", "Marana", "Oro Valley", "Sahuarita", "Vail", "Green Valley"],
  },
  googleBusinessProfile: "https://goo.gl/maps/example", // Replace with real link
};

export const enginePlatforms = {
  ford: {
    name: "Ford Powerstroke",
    engines: ["7.3L", "6.0L", "6.4L", "6.7L"],
    gas: ["5.4L", "6.8L V10", "6.2L", "7.3L Godzilla", "EcoBoost", "5.0L"],
    slug: "ford-powerstroke",
  },
  ram: {
    name: "Ram Cummins",
    engines: ["5.9L Cummins", "6.7L Cummins", "3.0L EcoDiesel"],
    gas: ["5.7L HEMI", "6.4L HEMI", "3.0L Hurricane"],
    slug: "ram-cummins",
  },
  gm: {
    name: "GM Duramax",
    engines: ["6.6L (LB7, LLY, LBZ, LMM, LML, L5P)", "3.0L (LM2, LZ0)"],
    gas: ["2.7L Turbo", "5.3L", "6.2L", "6.0L Vortec"],
    slug: "gm-duramax",
  },
};
