import LegalPage from "../components/layout/LegalPage";

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="April 2026">
      <h2>1. Introduction</h2>
      <p>Welcome to AcreX.</p>
      <p>
        AcreX is a real estate application designed to help users discover property inventory and manage
        listings for brokers, dealers, and property owners.
      </p>
      <p>
        We value your privacy and are committed to protecting your personal information. This Privacy Policy
        explains how we collect, use, and safeguard your data when you use our application.
      </p>

      <h2>2. Information We Collect</h2>
      <p className="font-semibold text-navy">a. Personal Information</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Name</li>
        <li>Mobile number</li>
        <li>Email address</li>
        <li>User role (Dealer/Broker or Owner)</li>
      </ul>
      <p className="font-semibold text-navy">b. Location Information</p>
      <p>We may access your location to display properties on the map and improve property discovery.</p>
      <p>Location data is used only within the app experience.</p>
      <p className="font-semibold text-navy">c. Property Listing Information</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Property location (Sector, Block, Pocket, Plot)</li>
        <li>Property details (price, size, configuration, description)</li>
      </ul>
      <p className="font-semibold text-navy">d. Usage Data</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>App interactions (pages visited, actions performed)</li>
        <li>Device information (basic technical data for app performance)</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>Provide and improve app functionality</li>
        <li>Enable property browsing and map-based discovery</li>
        <li>Allow users to create and manage property listings</li>
        <li>Facilitate owner approvals for listings</li>
        <li>Send notifications regarding listing status and updates</li>
        <li>Maintain account security and authentication</li>
      </ul>

      <h2>4. Notifications</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>Listing approvals or rejections</li>
        <li>Activity updates</li>
      </ul>
      <p>You can control notifications through your device settings.</p>

      <h2>5. Data Sharing</h2>
      <p>We do not sell your personal data.</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>With service providers (e.g., Firebase for notifications)</li>
        <li>When required by law or legal processes</li>
      </ul>

      <h2>6. Data Security</h2>
      <p>
        We implement reasonable security measures to protect your information. However, no system is 100%
        secure, and we cannot guarantee absolute security.
      </p>

      <h2>7. User Roles and Data Visibility</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>Dealers/Brokers can create listings visible to users</li>
        <li>Owners can review and approve or reject listings related to their properties</li>
      </ul>

      <h2>8. Third-Party Services</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>Firebase (for notifications and backend services)</li>
        <li>Google Maps (for location and map display)</li>
      </ul>
      <p>These services may collect data as per their own privacy policies.</p>

      <h2>9. App Permissions</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>Location – to display properties on maps and improve discovery</li>
        <li>Internet – to connect with backend services and load data</li>
      </ul>

      <h2>10. Data Retention</h2>
      <p>
        We retain your data only as long as necessary to provide our services. You may request deletion of
        your data at any time.
      </p>

      <h2>11. Your Rights</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>Update your profile information</li>
        <li>Request deletion of your account</li>
      </ul>

      <h2>12. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be reflected with an updated date
        at the top of this page.
      </p>

      <h2>13. Consent</h2>
      <p>By using AcreX, you agree to this Privacy Policy.</p>

      <p className="pt-4 text-sm text-muted/70">© 2026 AcreX. All rights reserved.</p>
    </LegalPage>
  );
}
