import type { Metadata } from 'next';
import { LegalLayout, LegalSection, LegalList } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy | One HR',
  description:
    'How One Path Business Solutions collects, uses, shares and protects personal data for One HR.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="One HR Privacy Policy" effectiveDate="October 20, 2026">
      <p>
        This Privacy Policy explains how One Path Business Solutions collects, uses, shares and
        protects personal data when you visit one-hr.onepathsolutions.com or use the One HR
        platform (together, the &quot;Service&quot;).
      </p>

      <LegalSection title="1. Who we are">
        <p>
          One HR is owned and operated by One Path Business Solutions (&quot;OnePath&quot;,
          &quot;we&quot;, &quot;us&quot; or &quot;our&quot;), 8-1-21/146, Level 1, Mirza Arcade,
          Shaikpet Road, Surya Nagar, Toli Chowki, Hyderabad, Telangana 500008, India.
        </p>
      </LegalSection>

      <LegalSection title="2. Our role">
        <p>We play two different roles depending on whose data it is.</p>
        <LegalList
          items={[
            <>
              <strong>Website visitors, prospects and account owners.</strong> We decide how this
              data is used, so we act as the data fiduciary (or controller).
            </>,
            <>
              <strong>Employee data your organisation stores in One HR.</strong> Your organisation
              decides what to collect and why, so it is the data fiduciary. We process that data
              only on its instructions, as a data processor. If you are an employee of one of our
              customers, please send privacy requests to your employer first. Our handling of this
              data is also covered by the One HR Data Processing Addendum.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="3. Information we collect">
        <p className="font-semibold text-[#111827]">Information you give us</p>
        <LegalList
          items={[
            'Contact, demo and sales requests: name, work email, phone number, company name, services of interest and your message.',
            'Account details: name, work email, phone number, job role and password (stored only in hashed form).',
            'Billing details: company name, billing address, tax or GST number and plan. Card and bank payments are handled by our payment partners. We do not store full card numbers.',
            'Newsletter sign ups: email address.',
          ]}
        />

        <p className="font-semibold text-[#111827] pt-2">Information organisations store in One HR</p>
        <LegalList
          items={[
            'Identity and employment: name, employee ID, photo, date of birth, gender, contact details, address, emergency contacts, department, designation, reporting manager, joining and exit dates.',
            'Attendance and leave: check in and check out times, attendance corrections, leave requests, balances and holiday calendars. Where an employer enables it, this may include device or location details at check in.',
            'Payroll and compensation: salary structure, allowances, deductions, tax slabs, provident fund details, bank account details for salary credit and payslips.',
            'Documents: offer letters, identity proofs, certificates and their expiry dates.',
            'Onboarding, performance and HR records added by your organisation.',
          ]}
        />
        <p>
          We ask customers to store only what they need. Government ID numbers and bank details
          should be stored only where payroll or the law requires them.
        </p>

        <p className="font-semibold text-[#111827] pt-2">Information collected automatically</p>
        <p>
          IP address, browser type, device type, operating system, pages viewed, actions taken,
          timestamps and error logs. We use cookies for this, as described in our Cookie Policy.
        </p>

        <p className="font-semibold text-[#111827] pt-2">Information from connected services</p>
        <p>
          If your organisation turns on an integration, we receive data from it. This includes
          employee records and organisation structures from Oracle Fusion HCM, sign in details from
          single sign on providers, and delivery status for WhatsApp and email notifications.
        </p>
      </LegalSection>

      <LegalSection title="4. How we use information">
        <LegalList
          items={[
            'To provide, run and maintain the Service, including attendance, leave, payroll calculations, payslips, reports and dashboards as your organisation configures them.',
            'To verify identity, secure accounts and prevent fraud or misuse.',
            'To send service notifications by email, in app messages or WhatsApp.',
            'To keep connected systems in sync when your organisation enables an integration.',
            'To answer support requests and train our support team on real issues.',
            'To bill you and keep financial records.',
            'To improve the Service using aggregated or de-identified usage data.',
            'To send product news to business contacts, with an unsubscribe link in every email.',
            'To meet legal obligations and enforce our terms.',
          ]}
        />
        <p>
          We do not sell personal data. We do not use employee data for advertising, and we do not
          use one customer&apos;s data to build features for another customer.
        </p>
      </LegalSection>

      <LegalSection title="5. Legal basis">
        <p>
          In India we process personal data under the Digital Personal Data Protection Act, 2023 on
          the basis of consent or a legitimate use permitted by that Act. For employee data in One
          HR, your organisation is responsible for giving notice to its employees and having a
          lawful basis. Where the GDPR or UK GDPR applies, we rely on performance of a contract,
          legitimate interests, legal obligations and, where needed, consent.
        </p>
      </LegalSection>

      <LegalSection title="6. How we share information">
        <LegalList
          items={[
            'Service providers who host our infrastructure, store data, send emails and WhatsApp messages, process payments, provide analytics and support tools. They act on our instructions under written contracts.',
            'Integrations your organisation enables, such as Oracle Fusion HCM or a single sign on provider.',
            'People inside your organisation, according to the roles and permissions your admin sets.',
            'Authorities, when the law, a court order or a valid government request requires it, or to protect the rights and safety of users and the public.',
            'A buyer or successor, if OnePath is involved in a merger, acquisition or sale of assets. This Policy will continue to protect your data.',
          ]}
        />
        <p>A current list of our sub-processors is available on request.</p>
      </LegalSection>

      <LegalSection title="7. International transfers">
        <p>
          Your data may be stored in India or in other countries where our cloud providers run data
          centres. When data leaves your country, we use contractual and technical safeguards so it
          stays protected to the standard in this Policy.
        </p>
      </LegalSection>

      <LegalSection title="8. How long we keep data">
        <LegalList
          items={[
            'Account and employee data is kept while your subscription is active.',
            'After cancellation or expiry, your organisation has 90 days to export its data. We then delete or anonymise it.',
            'Backups are overwritten on a rolling cycle and are fully cleared within 30 days of deletion from live systems.',
            'Invoices and payment records are kept for as long as tax and accounting laws require.',
            'Leads and enquiries are kept for up to 24 months after our last contact with you.',
          ]}
        />
      </LegalSection>

      <LegalSection title="9. Security">
        <p>
          We use encryption in transit, encryption at rest through our hosting providers, role based
          access control, audit logs, single sign on options and regular backups. Only staff who
          need access to help you can reach customer data. No system is fully secure, so we cannot
          promise absolute security. If a personal data breach affects your data, we will inform
          affected customers without undue delay and notify the Data Protection Board of India and
          other authorities where the law requires.
        </p>
      </LegalSection>

      <LegalSection title="10. Your rights">
        <p>Depending on where you live, you may have the right to:</p>
        <LegalList
          items={[
            'access a summary of the personal data we hold about you;',
            'correct, complete or update it;',
            'ask us to erase it;',
            'withdraw consent you have given;',
            'nominate another person to exercise your rights if you die or become incapable;',
            'object to or restrict some processing, and ask for a portable copy (where the GDPR applies);',
            'complain to a data protection authority.',
          ]}
        />
        <p>
          Email info@onepathsolutions.com to use these rights. We may need to verify your identity
          first. Employees of our customers should contact their employer, and we will help the
          employer respond.
        </p>
      </LegalSection>

      <LegalSection title="11. Children">
        <p>
          One HR is a business tool for adults. We do not knowingly collect personal data from
          anyone under 18 through our website. Employers must not add minors to One HR unless local
          law allows their employment and the employer has any consents the law requires.
        </p>
      </LegalSection>

      <LegalSection title="12. Changes to this Policy">
        <p>
          We may update this Policy as the Service or the law changes. We will post the new version
          here with a new effective date. For important changes, we will also notify account admins
          by email or in the app.
        </p>
      </LegalSection>

      <LegalSection title="13. Contact">
        <p>If you have a question or complaint about your personal data, contact us:</p>
        <LegalList
          items={[
            'One Path Business Solutions',
            'Email: info@onepathsolutions.com',
            'Phone: +91 96523 01382',
            'Address: One Path Business Solutions, 8-1-21/146, Level 1, Mirza Arcade, Shaikpet Road, Surya Nagar, Toli Chowki, Hyderabad, Telangana 500008, India',
          ]}
        />
        <p>
          We aim to acknowledge complaints within 2 business days and resolve them within 30 days.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
