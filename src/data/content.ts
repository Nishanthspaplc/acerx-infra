import type { IconName } from "../lib/icons";

/** App store links. */
export const APP_STORE_URL = "https://apps.apple.com/us/app/acre-x/id6762609505";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.acrex.app";

/** Single-page anchor navigation. */
export const navLinks = [
  { label: "What is Acre-X", href: "#what" },
  { label: "Why Acre-X", href: "#why" },
  { label: "The App", href: "#experience" },
  { label: "How it works", href: "#how" },
  { label: "Trust", href: "#trust" },
] as const;

/** "What is Acre-X?" — capability tiles. */
export const capabilities: { icon: IconName; title: string; desc: string }[] = [
  { icon: "BadgeCheck", title: "Verified properties", desc: "Every listing legally & physically vetted before you see it." },
  { icon: "Layers", title: "Builder floors", desc: "Independent floors with full layouts and pricing." },
  { icon: "TreePine", title: "Open plots", desc: "Buildable land with clear titles and boundaries." },
  { icon: "Store", title: "Commercial spaces", desc: "High-yield shops, offices and showrooms." },
  { icon: "HeartHandshake", title: "Trusted Brokers/Builders", desc: "Connect directly with rated, verified dealers." },
  { icon: "Map", title: "Interactive maps", desc: "Discover what's around every property, live." },
];

/** "Why Acre-X?" — large feature cards. */
export const whyAcreX: { icon: IconName; title: string; desc: string }[] = [
  { icon: "BadgeCheck", title: "Verified Listings", desc: "No fake listings, ever. Each property passes a multi-point verification before it goes live." },
  { icon: "HeartHandshake", title: "Trusted Brokers/Builders", desc: "Work only with rated, background-checked dealers who answer when it matters." },
  { icon: "MapPinned", title: "Interactive Maps", desc: "Explore neighbourhoods, amenities and routes without leaving the app." },
  { icon: "Bell", title: "Real-Time Updates", desc: "The moment a property matching your taste appears, you'll know." },
  { icon: "Search", title: "Easy Discovery", desc: "Smart filters and instant search turn hours of hunting into minutes." },
  { icon: "Smartphone", title: "Modern Mobile Experience", desc: "A fast, beautiful app designed for how you actually search for a home." },
];

/** Phone showcase — labels drive the mock screens rendered in <PhoneMockup>. */
export const appScreens = [
  "Splash", "Home", "Listings", "Details", "Map", "Favorites", "Profile",
] as const;
export type ScreenName = (typeof appScreens)[number];

/** "How it works" storytelling timeline. */
export const howItWorks: { icon: IconName; step: string; title: string; desc: string }[] = [
  { icon: "MapPinned", step: "01", title: "Choose Your Sector", desc: "Start by selecting a Sector, Block, and Pocket in Rohini to access the corresponding interactive layout map." },
  { icon: "Map", step: "02", title: "Explore the Layout Map", desc: "View the pocket layout with property pins. Each pin represents a verified plot or builder floor available in that location." },
  { icon: "Search", step: "03", title: "Compare Verified Listings", desc: "Tap any property pin to see all available listings uploaded by verified Owners, Brokers, Dealers, and Builders." },
  { icon: "Maximize2", step: "04", title: "View Complete Property Details", desc: "Compare pricing, area, images, specifications, and navigate directly to the property using Google Maps." },
  { icon: "MessageCircle", step: "05", title: "Connect with the Property Builder or Broker", desc: "Contact the verified dealer, builder, or owner to discuss the property or schedule a site visit." },
  { icon: "KeyRound", step: "06", title: "Buy or List with Confidence", desc: "Every listing is reviewed by Acre-X before publication, and owner approval protects properties from unauthorized listings, ensuring a transparent and trusted experience." },
];

/** Interactive property experience — visual capability rows. */
export const interactive: { icon: IconName; title: string; desc: string }[] = [
  { icon: "Map", title: "Interactive Layout Maps", desc: "Sector → Block → Pocket, mapped for easy discovery." },
  { icon: "MapPin", title: "Property Pins", desc: "Tap a pin to see every listing at that location." },
  { icon: "BadgeCheck", title: "Admin Verified Listings", desc: "Reviewed and approved before it ever goes live." },
  { icon: "HeartHandshake", title: "Trusted Property Network", desc: "Connect directly with owners, brokers and builders." },
  { icon: "Navigation", title: "Google Maps Navigation", desc: "One tap to directions, straight to the site." },
  { icon: "Eye", title: "Complete Property Details", desc: "Price, area, specs and images, all compared at a glance." },
];

/** Trust section cards. */
export const trust: { icon: IconName; title: string; desc: string }[] = [
  { icon: "ShieldCheck", title: "Verified Listings", desc: "Multi-point legal and physical checks on every property." },
  { icon: "Eye", title: "Transparent Process", desc: "Clear pricing and documentation at every step — no surprises." },
  { icon: "Headphones", title: "Professional Support", desc: "A dedicated team that's there before, during and after." },
  { icon: "Cpu", title: "Technology Driven", desc: "Modern tools that make discovery and decisions effortless." },
  { icon: "Lock", title: "Secure Experience", desc: "Bank-grade security for your data and your documents." },
];

export const stats = [
  { value: 50000, suffix: "+", label: "Happy Customers" },
  { value: 12000, suffix: "+", label: "Verified Properties" },
  { value: 350, suffix: "+", label: "Projects" },
  { value: 25, suffix: "+", label: "Cities" },
] as const;

/** Gradient pairs for initial-based avatars (self-contained, no stock photos). */
export const testimonials = [
  { name: "Ankit Sharma", role: "Homeowner, Rohini", rating: 5, from: "#c8a96a", to: "#8a6d3b", review: "Acre-X made buying our first home feel effortless. Every listing was real and every step was transparent." },
  { name: "Priya Nair", role: "Investor", rating: 5, from: "#334366", to: "#0b1220", review: "The verified badges and dealer ratings gave me the confidence to invest without second-guessing." },
  { name: "Rohit Verma", role: "Business Owner", rating: 5, from: "#0ea5e9", to: "#1e3a8a", review: "Found our commercial space in two weeks. The map discovery is genuinely addictive." },
  { name: "Simran Kaur", role: "Homeowner", rating: 5, from: "#c8a96a", to: "#334366", review: "Booking a site visit from the app is so simple. It felt like ordering food, but for houses." },
  { name: "Vikram Singh", role: "Villa Owner", rating: 5, from: "#10b981", to: "#065f46", review: "Premium experience that actually matches the premium properties they list. Highly recommend." },
  { name: "Neha Gupta", role: "First-time Buyer", rating: 5, from: "#a855f7", to: "#4c1d95", review: "Real-time alerts meant I saw my dream flat the day it went live. Wouldn't have found it otherwise." },
] as const;

export const footerLinks = {
  product: [
    { label: "What is Acre-X", href: "#what" },
    { label: "Why Acre-X", href: "#why" },
    { label: "The App", href: "#experience" },
    { label: "How it works", href: "#how" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
} as const;
