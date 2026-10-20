import type { Metadata } from 'next';
import { LegalLayout, LegalSection, LegalList } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Service | One HR',
  description:
    'Terms of Service for the One HR platform operated by One Path Business Solutions.',
};

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="One HR Terms of Service" effectiveDate="October 20, 2026">
      <p>
        These Terms of Service (&quot;Terms&quot;) are a contract between One Path Business
        Solutions (&quot;OnePath&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) and the
        organisation that signs up for One HR (&quot;Customer&quot; or &quot;you&quot;). By
        creating an account, starting a trial or paying for a plan, you accept these Terms. If you
        accept on behalf of an organisation, you confirm that you have authority to bind it.
      </p>

      <LegalSection title="1. The Service">
        <p>
          One HR is a cloud HR management platform for employee records, attendance, leave, payroll,
          salary structures, onboarding, documents, notifications and HR analytics, with optional
          integrations such as Oracle Fusion HCM and single sign on (the &quot;Service&quot;).
          Features depend on your plan. We may improve or change features over time, but we will not
          materially reduce the core features of a paid plan during a paid term.
        </p>
      </LegalSection>

      <LegalSection title="2. Accounts and users">
        <LegalList
          items={[
            'You must give accurate account and billing details and keep them current.',
            'Your admins control who can use the Service and what each user can see. You are responsible for all activity under your account.',
            'Keep passwords and access keys confidential. Tell us at once at info@onepathsolutions.com if you suspect unauthorised access.',
            'The number of users must stay within your plan limit: Basic up to 50 users, Professional up to 200 users, Enterprise as agreed.',
          ]}
        />
      </LegalSection>

      <LegalSection title="3. Free trial">
        <p>
          When we offer a free trial, you can use the included features at no charge for the trial
          period shown at sign up. Trial accounts are provided as is. If you do not choose a paid
          plan, we may delete trial data 30 days after the trial ends.
        </p>
      </LegalSection>

      <LegalSection title="4. Plans, fees and payment">
        <LegalList
          items={[
            'Prices are shown on our website or in your order form. Published prices are in US dollars unless your quote says otherwise.',
            'Fees are billed in advance, monthly or yearly. Taxes such as GST are added where applicable.',
            'Subscriptions renew automatically for the same period unless cancelled before the renewal date.',
            'We may change prices with at least 30 days notice. New prices apply from your next renewal.',
            'If a payment fails or an invoice stays unpaid 15 days after we notify you, we may suspend access until it is paid. Your data is not deleted during suspension.',
            'Refunds are covered by our Refund and Cancellation Policy.',
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Your data">
        <LegalList
          items={[
            'You own all data you and your users put into One HR ("Customer Data").',
            'You give us a limited licence to host, copy, process and display Customer Data only to provide and support the Service, as described in our Privacy Policy and Data Processing Addendum.',
            'You are responsible for collecting employee data lawfully, giving employees any notices the law requires and getting any consents you need.',
            'You can export your data while your subscription is active and for 90 days after it ends.',
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Payroll and compliance">
        <p>
          One HR calculates salaries, deductions, taxes and contributions using the rules and values
          you configure. You remain responsible for checking payroll output, paying employees,
          filing statutory returns and complying with labour, tax and social security laws. One HR
          does not give legal, tax or accounting advice.
        </p>
      </LegalSection>

      <LegalSection title="7. Acceptable use">
        <p>You and your users must not:</p>
        <LegalList
          items={[
            'use the Service for anything unlawful, fraudulent or harmful;',
            'upload data you have no right to process, or malicious code;',
            "try to break, probe or bypass our security, or access other customers' data;",
            'overload the Service, scrape it, or reverse engineer it, except where the law allows;',
            'resell or sublicense the Service without our written approval;',
            'send spam or unsolicited messages through WhatsApp or email notifications.',
          ]}
        />
        <p>We may suspend users or accounts that break these rules, with notice where practical.</p>
      </LegalSection>

      <LegalSection title="8. Third party services">
        <p>
          Integrations such as Oracle Fusion HCM, single sign on providers, WhatsApp and email
          providers are run by third parties under their own terms. We are not responsible for their
          availability, changes or actions. If a third party changes or withdraws its service, we
          may need to change or stop the related integration.
        </p>
      </LegalSection>

      <LegalSection title="9. Availability and support">
        <p>
          We work to keep the Service available at all times, apart from planned maintenance, which
          we try to schedule outside business hours. Support is offered by email on Basic, by email
          and chat on Professional, and through a dedicated success manager on Enterprise. Service
          levels and credits for Enterprise customers are set out in their order form.
        </p>
      </LegalSection>

      <LegalSection title="10. Intellectual property">
        <p>
          OnePath owns the Service, its software, design, documentation and brand. These Terms do
          not transfer any of these rights to you. If you send us feedback, we may use it freely
          without any obligation to you.
        </p>
      </LegalSection>

      <LegalSection title="11. Confidentiality">
        <p>
          Each party will protect the other&apos;s confidential information with reasonable care and
          use it only to perform these Terms. This does not apply to information that is public,
          already known, independently developed or lawfully received from someone else. Disclosure
          required by law is allowed with prompt notice where permitted.
        </p>
      </LegalSection>

      <LegalSection title="12. Disclaimer">
        <p>
          Except as stated in these Terms, the Service is provided &quot;as is&quot; and &quot;as
          available&quot;. We do not promise that it will be error free or uninterrupted, or that it
          will meet every requirement you have.
        </p>
      </LegalSection>

      <LegalSection title="13. Limitation of liability">
        <p>
          To the extent the law allows, neither party is liable for indirect, incidental, special or
          consequential losses, or for lost profits, revenue, goodwill or data. Our total liability
          for all claims relating to the Service is limited to the fees you paid us for One HR in
          the 12 months before the event that caused the claim. These limits do not apply to your
          payment obligations, to either party&apos;s fraud, or to liability that cannot be limited
          by law.
        </p>
      </LegalSection>

      <LegalSection title="14. Indemnity">
        <p>
          You will defend and indemnify OnePath against third party claims arising from Customer
          Data, your breach of these Terms, or your violation of law. We will defend and indemnify
          you against third party claims that the Service, as provided by us, infringes their
          intellectual property rights.
        </p>
      </LegalSection>

      <LegalSection title="15. Term and termination">
        <LegalList
          items={[
            'These Terms apply from sign up until your subscription ends.',
            'You may cancel at any time. Cancellation takes effect at the end of the current billing period.',
            'Either party may end the subscription if the other seriously breaches these Terms and does not fix the breach within 15 days of written notice.',
            'We may suspend or end access at once where needed to stop serious harm, fraud or illegal activity.',
            'After termination, you may export your data for 90 days. We then delete it as described in our Privacy Policy.',
          ]}
        />
      </LegalSection>

      <LegalSection title="16. Governing law and disputes">
        <p>
          These Terms are governed by the laws of India. Both parties will first try to settle any
          dispute through good faith discussion for 30 days. If that fails, the courts of
          Hyderabad, Telangana have exclusive jurisdiction.
        </p>
      </LegalSection>

      <LegalSection title="17. Changes to these Terms">
        <p>
          We may update these Terms from time to time. We will post the new version here and give
          account admins at least 15 days notice of material changes. If you keep using the Service
          after changes take effect, you accept the updated Terms.
        </p>
      </LegalSection>

      <LegalSection title="18. General">
        <p>
          Neither party is liable for delays caused by events beyond its reasonable control. You may
          not assign these Terms without our consent, but we may assign them as part of a merger or
          sale of business. If any part of these Terms is invalid, the rest stays in force. These
          Terms, any order form and the documents they refer to are the entire agreement between us
          on this subject.
        </p>
      </LegalSection>

      <LegalSection title="19. Contact">
        <p>
          One Path Business Solutions, 8-1-21/146, Level 1, Mirza Arcade, Shaikpet Road, Surya
          Nagar, Toli Chowki, Hyderabad, Telangana 500008, India. Email:
          info@onepathsolutions.com. Phone: +91 96523 01382.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
