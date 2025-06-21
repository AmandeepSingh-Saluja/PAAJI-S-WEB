
'use client';

import { ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function PrivacyPolicyPage() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    document.title = "Privacy Policy - Paaji's Restaurant";
    setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <header className="py-16 lg:py-24 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck size={64} className="mx-auto text-primary mb-6" />
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-primary tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-6 font-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Your privacy is important to us. This policy outlines how Paaji&apos;s Restaurant collects, uses, and protects your personal information.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-3xl mx-auto bg-card p-8 sm:p-12 rounded-lg shadow-xl prose prose-lg prose-headings:font-headline prose-headings:text-primary prose-a:text-primary hover:prose-a:text-accent prose-strong:text-foreground">
          {lastUpdated && <p className="text-sm text-muted-foreground">Last Updated: {lastUpdated}</p>}

          <h2>1. Introduction</h2>
          <p>
            Welcome to Paaji&apos;s Restaurant. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We may collect personal information from you in a variety of ways, including, but not limited to, when you visit our site, make a reservation, place an order, subscribe to a newsletter, fill out a form, or in connection with other activities, services, features or resources we make available.
          </p>
          <p>
            Information you may provide includes:
          </p>
          <ul>
            <li>Name</li>
            <li>Contact information (email address, phone number)</li>
            <li>Reservation details</li>
            <li>Payment information (processed securely by third-party providers)</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>
            We may use the information we collect for various purposes, including to:
          </p>
          <ul>
            <li>Process your reservations and orders.</li>
            <li>Improve customer service and personalize your experience.</li>
            <li>Communicate with you, including sending emails about specials or updates (if you opt-in).</li>
            <li>Administer contests, promotions, surveys or other site features.</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h2>4. Information Sharing and Disclosure</h2>
          <p>
            We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above. We may use third-party service providers to help us operate our business and the site or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes provided that you have given us your permission.
          </p>
          
          <h2>5. Data Security</h2>
          <p>
            We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
          </p>

          <h2>6. Third-Party Websites</h2>
          <p>
            Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website&apos;s own terms and policies.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us using the contact information provided below.
          </p>

          <h2>8. Changes to This Privacy Policy</h2>
          <p>
            Paaji&apos;s Restaurant has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
          </p>

          <h2>9. Your Acceptance of These Terms</h2>
          <p>
            By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
          </p>

          <h2>10. Contacting Us</h2>
          <p>
            If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
            <br />
            Paaji&apos;s Restaurant
            <br />
            1843, Sadashiv Peth, Pune, Maharashtra 411030
            <br />
            <a href="mailto:paajisrestaurant@gmail.com">paajisrestaurant@gmail.com</a>
            <br />
            <a href="tel:+919834464883">098344 64883</a>
          </p>
        </div>
      </div>
    </div>
  );
}
