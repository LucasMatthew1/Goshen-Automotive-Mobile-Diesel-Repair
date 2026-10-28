/**
 * Centralized business configuration for Goshen Automotive Mobile Diesel Repair.
 * Edit these details to update the site globally.
 */

export const businessConfig = {
  name: "Goshen Automotive Mobile Diesel Repair",
  tagline: "Commercial Diesel & Semi-Truck Repair Professionals",
  phone: "(520) 990-1033",
  phoneRaw: "15209901033",
  email: "service@goshendiesel.com",
  address: "5554 S Hildreth Ave, Tucson, AZ 85746",
  addressNote: "Mobile dispatch service area: 30+ miles around Tucson, AZ.",
  hours: {
    weekdays: "8:00 AM - 6:00 PM",
    saturday: "8:00 AM - 4:00 PM",
    sunday: "Closed",
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
  services: [
    "Diesel Diagnostics",
    "Semi-Truck Repair",
    "Commercial Fleet Maintenance",
    "Engine Repair & Troubleshooting",
    "Preventive Maintenance (PM)",
    "Electrical System Diagnostics",
    "Cooling & Fuel Systems",
    "Brakes & Drivetrain",
    "Start-System Diagnostics",
  ],
};

export const commercialCategories = [
  {
    name: "Semi-Truck Repair",
    slug: "semi-truck-repair",
    image: "/assets/hero-truck.jpg",
    description: "Full-service mobile repair for Class 7 and 8 tractor-trailers.",
  },
  {
    name: "Commercial Fleet",
    slug: "commercial-fleet",
    image: "/assets/fleet-service.jpg",
    description: "Scheduled maintenance and priority dispatch for commercial logistics.",
  },
  {
    name: "Engine Diagnostics",
    slug: "engine-diagnostics",
    image: "/assets/diagnostics.jpg",
    description: "Advanced fault isolation and performance troubleshooting for all major platforms.",
  },
];
