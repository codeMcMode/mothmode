import React from 'react';
import LegalLayout from '../components/LegalLayout';
import { COMPANY } from '../constants/company';

const Section = ({ title, children }) => (
  <section>
    <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>
    {children}
  </section>
);

const PrivacyPolicy = () => {
  const address = [
    COMPANY.registeredOffice.line1,
    COMPANY.registeredOffice.line2,
    COMPANY.registeredOffice.line3,
    COMPANY.registeredOffice.line4,
    COMPANY.registeredOffice.country,
  ].join(', ');

  return (
    <LegalLayout title="Privacy Policy" lastUpdated="10 June 2026">
      <p>
        This Privacy Policy explains how {COMPANY.tradingName} (a trading name of {COMPANY.legalName},
        company number {COMPANY.companyNumber}) collects, uses, stores and shares personal data when you
        visit {COMPANY.website}, use our free software or services, purchase paid products, or otherwise
        interact with us. We process personal data in accordance with UK data protection law, including
        the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
      </p>

      <Section title="1. Who we are">
        <p className="mb-3">
          {COMPANY.legalName} is the data controller for personal data processed in connection with
          {COMPANY.tradingName} products and this website.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Registered office: {address}</li>
          <li>Email: <a href={`mailto:${COMPANY.contactEmail}`} className="text-white hover:underline">{COMPANY.contactEmail}</a></li>
          <li>{COMPANY.jurisdiction} company number {COMPANY.companyNumber}</li>
        </ul>
      </Section>

      <Section title="2. Personal data we collect">
        <p className="mb-3">Depending on how you use our services, we may collect:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-white/90">Contact and account data</strong> — name, email address, username, password (stored in hashed form), billing address and account preferences.</li>
          <li><strong className="text-white/90">Purchase and payment data</strong> — order history, licence details, transaction references and limited payment information. Card payments are processed by our payment providers; we do not store full card numbers.</li>
          <li><strong className="text-white/90">Software and service usage data</strong> — licence keys, activation records, version information, crash reports, diagnostics, feature usage and technical logs needed to operate, secure and improve our software and cloud services.</li>
          <li><strong className="text-white/90">Communications</strong> — messages you send us, support requests, feedback and marketing preferences.</li>
          <li><strong className="text-white/90">Website and device data</strong> — IP address, browser type, operating system, referral source, pages viewed and similar technical information collected through cookies and similar technologies.</li>
          <li><strong className="text-white/90">User content</strong> — where you use cloud or sync features, project notes, references, tags, feedback or other content you choose to upload or store.</li>
        </ul>
        <p className="mt-3">
          Where we offer free products, trials, newsletters or early-access programmes, we may collect only
          the data needed for that specific purpose.
        </p>
      </Section>

      <Section title="3. How we use your data and our lawful bases">
        <p className="mb-3">We use personal data only where we have a lawful basis under UK GDPR:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-white/90">Contract</strong> — to provide software, cloud services, licences, customer support and to process purchases.</li>
          <li><strong className="text-white/90">Legitimate interests</strong> — to secure our services, prevent fraud, improve products, understand usage, and communicate about your account or purchases, balanced against your rights.</li>
          <li><strong className="text-white/90">Consent</strong> — for optional marketing, non-essential cookies and certain communications where required. You may withdraw consent at any time.</li>
          <li><strong className="text-white/90">Legal obligation</strong> — to comply with tax, accounting, regulatory or law-enforcement requirements.</li>
        </ul>
      </Section>

      <Section title="4. Marketing">
        <p>
          If you are a consumer, we will only send marketing emails where permitted by law — for example,
          where you have opted in, or where you have purchased similar products from us and have not opted out.
          Every marketing email includes an unsubscribe option.
        </p>
      </Section>

      <Section title="5. Sharing your data">
        <p className="mb-3">We may share personal data with:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Payment processors and fraud-prevention providers</li>
          <li>Hosting, cloud infrastructure and analytics providers</li>
          <li>Customer support, email delivery and software licensing platforms</li>
          <li>Professional advisers where reasonably necessary</li>
          <li>Regulators, courts or law enforcement when required by law</li>
        </ul>
        <p className="mt-3">
          We require service providers to protect personal data and use it only for the services they provide
          to us. We do not sell your personal data.
        </p>
      </Section>

      <Section title="6. International transfers">
        <p>
          Some providers may process data outside the UK. Where this happens, we use appropriate safeguards
          such as UK adequacy regulations, the UK International Data Transfer Agreement, or equivalent
          contractual protections.
        </p>
      </Section>

      <Section title="7. Data retention">
        <p>
          We keep personal data only for as long as necessary for the purposes described in this policy,
          including to meet legal, tax and accounting requirements. Account and purchase records are
          generally retained for up to seven years where required for legal or financial compliance.
          Support correspondence is typically retained for up to three years. You may request erasure where
          we no longer have a lawful reason to retain your data.
        </p>
      </Section>

      <Section title="8. Security">
        <p>
          We use appropriate technical and organisational measures to protect personal data against
          unauthorised access, loss or misuse. No method of transmission or storage is completely secure,
          and we cannot guarantee absolute security.
        </p>
      </Section>

      <Section title="9. Your rights">
        <p className="mb-3">
          If you are in the UK or EEA, you have rights including access, rectification, erasure,
          restriction, portability and objection to certain processing. Where we rely on consent, you may
          withdraw it at any time. You also have the right to lodge a complaint with the Information
          Commissioner&apos;s Office (ICO) at{' '}
          <a href="https://ico.org.uk" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">
            ico.org.uk
          </a>.
        </p>
        <p>
          To exercise your rights, contact us at{' '}
          <a href={`mailto:${COMPANY.contactEmail}`} className="text-white hover:underline">{COMPANY.contactEmail}</a>.
          We may need to verify your identity before responding.
        </p>
      </Section>

      <Section title="10. Cookies">
        <p>
          Our website uses essential cookies needed for security and basic functionality. Where we use
          analytics or preference cookies, we will ask for your consent where required. You can manage
          cookies through your browser settings.
        </p>
      </Section>

      <Section title="11. Children">
        <p>
          Our services are not directed at children under 13, and we do not knowingly collect personal
          data from children. If you believe a child has provided us with personal data, please contact us
          and we will take appropriate steps to delete it.
        </p>
      </Section>

      <Section title="12. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top
          will change when we do. Where changes are material, we will take reasonable steps to notify you,
          such as by email or a notice on our website.
        </p>
      </Section>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
