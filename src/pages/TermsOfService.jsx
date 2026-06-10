import React from 'react';
import LegalLayout from '../components/LegalLayout';
import { COMPANY } from '../constants/company';

const Section = ({ title, children }) => (
  <section>
    <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>
    {children}
  </section>
);

const TermsOfService = () => {
  const address = [
    COMPANY.registeredOffice.line1,
    COMPANY.registeredOffice.line2,
    COMPANY.registeredOffice.line3,
    COMPANY.registeredOffice.line4,
    COMPANY.registeredOffice.country,
  ].join(', ');

  return (
    <LegalLayout title="Terms of Service" lastUpdated="10 June 2026">
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the website, software,
        plugins, cloud applications and related services offered under the {COMPANY.tradingName} brand
        (collectively, the &quot;Services&quot;). {COMPANY.tradingName} is a trading name of {COMPANY.legalName}
        (company number {COMPANY.companyNumber}), whose registered office is at {address}.
      </p>
      <p>
        By accessing or using the Services, you agree to these Terms. If you do not agree, do not use the
        Services. If you purchase paid Services as a consumer, your statutory rights under UK law are not
        affected by these Terms.
      </p>

      <Section title="1. Eligibility and accounts">
        <p>
          You must be at least 18 years old, or have parental or guardian consent, to create an account or
          purchase paid Services. You are responsible for keeping your login details secure and for all
          activity under your account. Please notify us promptly of any unauthorised use.
        </p>
      </Section>

      <Section title="2. Free and paid Services">
        <p className="mb-3">
          We may offer free Services (such as website access, beta software, trials, freemium features or
          early-access programmes) and paid Services (such as software licences, subscriptions or cloud
          plans). The applicable terms for each offering will be shown at the point of purchase or sign-up.
        </p>
        <p>
          We may change, suspend or discontinue any free Service at any time. For paid Services, we will
          not materially reduce core paid functionality during an active paid term without giving you a
          reasonable remedy where required by law.
        </p>
      </Section>

      <Section title="3. Orders, pricing and payment">
        <p>
          Prices are shown inclusive of VAT where applicable unless stated otherwise. By placing an order,
          you make an offer to purchase on these Terms. A contract is formed when we confirm your order or
          provide access to the paid Service. We may refuse or cancel orders in cases of error, suspected
          fraud or unavailability. Payment must be made using the methods we make available at checkout.
        </p>
      </Section>

      <Section title="4. Software licences">
        <p className="mb-3">
          Unless we state otherwise, paid and free software is licensed, not sold. Subject to these Terms
          and payment of applicable fees, we grant you a personal, non-exclusive, non-transferable,
          revocable licence to install and use the software for your own lawful creative or business purposes.
        </p>
        <p className="mb-3">You must not:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>copy, modify, reverse engineer or create derivative works except where permitted by law</li>
          <li>resell, sublicense, rent or share licences except where expressly allowed</li>
          <li>remove proprietary notices or circumvent licence or security controls</li>
          <li>use the software unlawfully or in a way that harms us or others</li>
        </ul>
        <p className="mt-3">
          Licence scope, device limits, subscription periods and renewal terms will be stated at purchase.
          If your subscription ends or is cancelled, your right to use subscription-based Services ends at
          the end of the current billing period unless otherwise stated.
        </p>
      </Section>

      <Section title="5. Cloud Services and user content">
        <p>
          Where cloud or sync features are available, you retain ownership of content you upload. You grant
          us a limited licence to host, process, back up and display that content solely to provide the
          Services. You are responsible for ensuring you have the rights to any content you upload and that
          your content complies with these Terms and applicable law. We may remove content that infringes
          rights or violates law or these Terms.
        </p>
      </Section>

      <Section title="6. Your consumer rights (UK)">
        <p className="mb-3">
          If you are a consumer in the UK, you have legal rights in relation to digital content and
          services under the Consumer Rights Act 2015 and related law. Digital content must be of
          satisfactory quality, fit for a particular purpose and as described. If our digital content is
          faulty, you may be entitled to a repair, replacement or price reduction, and in some cases a
          refund.
        </p>
        <p>
          Nothing in these Terms limits or excludes rights you have as a consumer that cannot lawfully be
          limited or excluded.
        </p>
      </Section>

      <Section title="7. Cancellation and refunds">
        <p className="mb-3">
          If you are a UK consumer buying at a distance, you generally have a 14-day right to cancel most
          contracts under the Consumer Contracts (Information, Cancellation and Additional Charges)
          Regulations 2013.
        </p>
        <p className="mb-3">
          For digital content not supplied on a tangible medium, if you ask us to begin supply immediately
          and acknowledge that you will lose your cancellation right once download or access begins, your
          statutory cancellation right may not apply from that point. We will obtain any required express
          consent and acknowledgement before supply begins.
        </p>
        <p>
          Refund eligibility outside the statutory cancellation period will be considered fairly and in
          line with your consumer rights and any refund policy stated at purchase. Contact us at{' '}
          <a href={`mailto:${COMPANY.contactEmail}`} className="text-white hover:underline">{COMPANY.contactEmail}</a>{' '}
          to request a cancellation or refund.
        </p>
      </Section>

      <Section title="8. Acceptable use">
        <p>
          You must not misuse the Services, interfere with their operation, attempt unauthorised access,
          distribute malware, harass others, infringe intellectual property, or use the Services in breach
          of law or third-party rights. We may suspend or terminate access where we reasonably believe
          there has been a breach.
        </p>
      </Section>

      <Section title="9. Intellectual property">
        <p>
          We and our licensors own all rights in the Services, including software, branding, website
          content, documentation and underlying technology. Except for the limited licence granted to you,
          no rights are transferred under these Terms.
        </p>
      </Section>

      <Section title="10. Availability, updates and beta features">
        <p>
          We aim to keep the Services available and secure, but uninterrupted access is not guaranteed.
          We may release updates, patches or beta features. Beta or preview features may be incomplete or
          change without notice and are provided &quot;as is&quot; to the extent permitted by law.
        </p>
      </Section>

      <Section title="11. Liability">
        <p className="mb-3">
          If you are a consumer, we are responsible for loss or damage that is a foreseeable result of our
          breach of these Terms or failure to use reasonable care and skill, but we are not responsible for
          loss that is not foreseeable. We do not exclude or limit liability where it would be unlawful to
          do so, including liability for death or personal injury caused by negligence, fraud, or your
          statutory consumer rights.
        </p>
        <p>
          If you use the Services for business purposes and are not a consumer, our total liability arising
          out of or in connection with the Services is limited to the amount you paid us in the 12 months
          before the event giving rise to the claim, except where liability cannot be limited by law.
        </p>
      </Section>

      <Section title="12. Suspension and termination">
        <p>
          You may stop using the Services at any time. We may suspend or terminate access if you materially
          breach these Terms, if required by law, or if we discontinue a Service. On termination, your
          licence to use paid software or cloud Services ends, subject to any rights you have under
          applicable law.
        </p>
      </Section>

      <Section title="13. Changes to these Terms">
        <p>
          We may update these Terms from time to time. If you are a consumer and changes are material, we
          will give you reasonable notice before they take effect. If you do not agree to updated Terms,
          you should stop using the Services. Continued use after the effective date constitutes acceptance
          where permitted by law.
        </p>
      </Section>

      <Section title="14. Governing law and disputes">
        <p>
          These Terms are governed by the laws of England and Wales. If you are a consumer resident in
          Scotland or Northern Ireland, you may also benefit from mandatory protections in your home
          jurisdiction. The courts of England and Wales have jurisdiction, subject to your right as a
          consumer to bring proceedings in your local courts where applicable.
        </p>
      </Section>

      <Section title="15. Contact">
        <p>
          Questions about these Terms can be sent to{' '}
          <a href={`mailto:${COMPANY.contactEmail}`} className="text-white hover:underline">{COMPANY.contactEmail}</a>.
          You may also contact {COMPANY.legalName} at {address}.
        </p>
      </Section>
    </LegalLayout>
  );
};

export default TermsOfService;
