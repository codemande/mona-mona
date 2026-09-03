// Verbatim legal text, ported from the old monaprotect.com site
// (src/pages/Privacy.tsx and src/pages/TermsOfUse.tsx). Do not paraphrase —
// any wording change here is a change to the legal terms customers agreed to.
//
// Clause shape: { number, text, bullets?, paragraphs?, children? }
//   - text: the clause's own line (may contain "\n" for embedded line breaks
//     that were rendered via <br/> in the source, e.g. lettered a./b./c. runs)
//   - bullets: an unordered list rendered under the clause (source used <ul>)
//   - paragraphs: additional un-numbered prose continuing the clause
//   - children: nested numbered sub-clauses (nesting goes up to 4 levels deep)
// Section shape: { number, heading, clauses? } or { number, heading, paragraphs? }
//   for the handful of sections that have plain, un-numbered prose only.

export const legalContent = {
  terms: {
    title: "Terms of Use",
    effectiveDate: "01/09/2025",
    lastUpdated: "18/10/2025",
    intro: [
      "Welcome to Mona Protect, a licensed insurtech service provided by Mona Technologies Ltd (\"Mona\", \"we\", \"our\", or \"us\"). These Terms of Use (\"Terms\") govern your access to and use of our website, mobile app, web app, and in-store services (collectively, the \"Services\"). By accessing or using Mona Protect, you agree to comply with and be bound by these Terms.",
      "If you do not agree, you must stop using our Services immediately.",
    ],
    sections: [
      {
        number: "1",
        heading: "Eligibility",
        clauses: [
          { number: "1.1", text: "You must be at least 18 years old or have parental/guardian consent to use Mona Protect." },
          { number: "1.2", text: "Mona Protect is available only for eligible smartphone devices (Apple iPhone X and newer, Samsung Galaxy flagship devices, and Google Pixel devices)." },
          { number: "1.3", text: "Your device must pass a device inspection and onboarding verification before coverage can begin." },
        ],
      },
      {
        number: "2",
        heading: "Services Provided",
        clauses: [
          { number: "2.1", text: "Mona Protect is an annual device protection plan covering accidental damage (such as cracked screens, water damage, or hardware faults) in accordance with your plan details." },
          { number: "2.2", text: "Mona Protect is a licensed insurtech operator under the Guidelines for Insurtech Operations in Nigeria (2025) issued by the National Insurance Commission (NAICOM). As such, our services are regulated to ensure compliance with Nigerian insurance law and consumer protection standards." },
          { number: "2.3", text: "Device theft, intentional damage, and ordinary wear and tear (e.g., battery aging not caused by impact) are not covered." },
          { number: "2.4", text: "Repairs are provided only through Mona authorized centres. Unauthorized repairs void your coverage." },
        ],
      },
      {
        number: "3",
        heading: "User Responsibilities",
        clauses: [
          { number: "3.1", text: "Provide accurate personal and device information during onboarding." },
          { number: "3.2", text: "Ensure your device is in good working condition at the time of onboarding." },
          { number: "3.3", text: "Pay all required fees in accordance with Mona Protect's pricing." },
          { number: "3.4", text: "Report claims promptly, providing required evidence (photos, videos, or receipts) where applicable." },
          { number: "3.5", text: "Not engage in fraud, misrepresentation, or misuse of the Services." },
        ],
      },
      {
        number: "4",
        heading: "Payments and Fees",
        clauses: [
          { number: "4.1", text: "Payment for coverage must be made in full at the time of onboarding via Mona's approved payment channels." },
          { number: "4.2", text: "All payments are non-refundable except where required by law." },
          { number: "4.3", text: "Mona does not store your banking details; payments are processed securely through third-party payment processors." },
        ],
      },
      {
        number: "5",
        heading: "Claims",
        clauses: [
          { number: "5.1", text: "Claims may only be filed by users with an active subscription." },
          { number: "5.2", text: "Approved claims are subject to Mona's repair and settlement process in partnership with our insurance partner(s)." },
          {
            number: "5.3",
            text: "Mona reserves the right to reject claims that",
            bullets: [
              "Involve pre-existing or unreported damage at onboarding.",
              "Arise from intentional or fraudulent acts.",
              "Are outside the coverage scope.",
            ],
          },
          {
            number: "5.4",
            text: "Fair Usage, Repeated Claims & Review",
            paragraphs: [
              "Mona Protect is committed to delivering the unlimited accidental damage protection described in these Terms. To ensure the sustainability of that promise to customers, any account that requests more than two (2) device screen repairs in a 12-month plan period (or other repeated similar incidents) will be placed under review in accordance with this clause.",
            ],
          },
          {
            number: "5.5",
            text: "Investigation and Fraud Review Unit",
            paragraphs: [
              "When a customer reports a third (or subsequent) screen repair (or multiple substantially similar claims within a 12-month period), Mona may:\na. Open a claims review process conducted by our Fraud & Inspections Unit (the “Review Unit”); and\nb. Request additional documentation and or evidence. You agree to cooperate with such requests. Failure to cooperate may result in temporary suspension of claim processing or coverage pending completion of the review.",
            ],
          },
          {
            number: "5.6",
            text: "Outcomes of Review, Discretionary Relief",
            paragraphs: [
              "Following review, and acting in good faith, Mona may determine (at its discretion) one of the following outcomes:\na. Full coverage: Cover the full cost of the approved repair(s); or\nb. Cost-share: Require the customer to contribute a portion of the repair cost, not exceeding forty percent (40%) of the total repair cost. A contribution will apply only where:\ni. The same device has suffered repeated identical damage (e.g., multiple screen breaks) within the same plan year; or\nii. The pattern of damage indicates unusual frequency or negligence inconsistent with normal careful use; or\niii. There is incomplete or conflicting evidence during review, but Mona determines in good faith that partial coverage remains fair. The percentage contribution will be determined on a case-by-case basis, considering the damage history, cooperation during review, and fairness to other plan members.\nc. Decline the claim where evidence indicates intentional damage, material misrepresentation, or fraud. Where a customer contribution is required, a written explanation of the basis for that decision and an itemised account of costs will be provided.",
            ],
          },
          {
            number: "5.7",
            text: "Timing and Notice",
            paragraphs: [
              "We will endeavour to complete the Review Unit’s assessment within seventy-two (72) hours of receiving all required information and evidence from the customer. Upon completion, we will notify you in writing of the outcome and any required next steps. If a claim is declined, we will explain the reasons for the decision and provide clear guidance on how to dispute or appeal it.",
            ],
          },
          {
            number: "5.8",
            text: "Appeal & Dispute",
            paragraphs: [
              "If you disagree with the Review Unit’s outcome, you may submit a written appeal within fourteen (14) days of receiving our decision. All appeals will be considered by a separate internal review panel. If the dispute remains unresolved, you may pursue the dispute resolution process set out in these Terms or contact NAICOM as applicable under Nigerian law.",
            ],
          },
          {
            number: "5.9",
            text: "No Unintended Erosion of the Unlimited Promise",
            paragraphs: [
              "These provisions do not remove or rebrand Mona’s unlimited protection offering. They are intended solely to protect customers collectively by:\n(i) deterring fraudulent or abusive claims;\n(ii) enabling fair and proportionate cost sharing in clearly identified repeated use cases; and\n(iii) preserving Mona’s ability to deliver fast, high quality repairs to its customers.\nWhere we exercise discretion under this section, we will act lawfully, reasonably and in good faith.",
            ],
          },
        ],
      },
      {
        number: "6",
        heading: "Data Protection & Privacy",
        clauses: [
          { number: "6.1", text: "We collect and process your personal data in accordance with the Nigeria Data Protection Act, 2023, the NAICOM Insurtech Guidelines (2025), and related NDPC guidance." },
          { number: "6.2", text: "By using our Services, you consent to the lawful processing of your personal data as described in our Privacy Policy." },
          { number: "6.3", text: "Mona will never sell your data. Personal information is only shared with partners when necessary to deliver Services or when legally required." },
        ],
      },
      {
        number: "7",
        heading: "Intellectual Property",
        clauses: [
          { number: "7.1", text: "All content on our website, mobile app, and platforms including logos, designs, texts, and images is owned or licensed by Mona Technologies Ltd." },
          { number: "7.2", text: "You may not reproduce, distribute, or exploit our intellectual property without prior written consent." },
        ],
      },
      {
        number: "8",
        heading: "Limitations of Liability",
        clauses: [
          { number: "8.1", text: "Mona Protect provides Services \"as is\" and \"as available.\"" },
          { number: "8.2", text: "To the maximum extent permitted by Nigerian law, Mona shall not be liable for indirect, incidental, or consequential damages arising from your use of the Services." },
          { number: "8.3", text: "Our total liability to you shall not exceed the total amount insured under your protection plan in the year the claim arises." },
        ],
      },
      {
        number: "9",
        heading: "Termination",
        clauses: [
          {
            number: "9.1",
            text: "Mona may suspend or terminate your plan if you:",
            bullets: ["Breach these Terms,", "Engage in fraud or misuse, or", "Fail to pay required fees."],
          },
          { number: "9.2", text: "Upon termination, you lose access to the Services and coverage under Mona Protect." },
        ],
      },
      {
        number: "10",
        heading: "Amendments",
        paragraphs: [
          "We may update these Terms from time to time. Updates will be posted on our website with the \"Last Updated\" date. Continued use of the Services after such updates means you accept the revised Terms.",
        ],
      },
      {
        number: "11",
        heading: "Governing Law",
        paragraphs: [
          "These Terms are governed by and construed under the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of Nigerian courts.",
        ],
      },
      {
        number: "12",
        heading: "Contact Us",
        paragraphs: [
          "For questions or concerns, please contact:",
          "Mona Technologies Ltd",
          "Email: hello@monaprotect.com",
        ],
      },
    ],
  },

  privacy: {
    title: "Privacy Policy",
    effectiveDate: "01 September 2025",
    lastUpdated: "23 January 2026",
    sections: [
      {
        number: "1",
        heading: "Introduction",
        clauses: [
          { number: "1.1", text: "Mona Technologies Ltd (\"Mona\", \"Mona Protect\", \"we\", \"our\", or \"us\") provides mobile device protection and insurtech-related services in Nigeria." },
          {
            number: "1.2",
            text: "Mona is committed to protecting personal data and processing personal data lawfully, fairly, and transparently in accordance with:",
            children: [
              { number: "1.2.1", text: "the Nigeria Data Protection Act, 2023 (NDPA);" },
              { number: "1.2.2", text: "the NAICOM Guidelines for Insurtech Operations (2025); and" },
              { number: "1.2.3", text: "guidance issued by the Nigeria Data Protection Commission (NDPC)." },
            ],
          },
          {
            number: "1.3",
            text: "This Privacy Policy explains:",
            children: [
              { number: "1.3.1", text: "the personal data Mona collects;" },
              { number: "1.3.2", text: "the purposes and legal bases for processing;" },
              { number: "1.3.3", text: "how personal data is shared and disclosed;" },
              { number: "1.3.4", text: "how personal data is secured and retained; and" },
              { number: "1.3.5", text: "the rights available to data subjects." },
            ],
          },
        ],
      },
      {
        number: "2",
        heading: "Data Controller",
        clauses: [
          { number: "2.1", text: "The data controller is Mona Technologies Ltd." },
          {
            number: "2.2",
            text: "Mona’s company registration details are as follows:",
            children: [{ number: "2.2.1", text: "RC Number: 7480610." }],
          },
          {
            number: "2.3",
            text: "Mona is the data controller for personal data processed through:",
            children: [
              { number: "2.3.1", text: "Mona Protect websites and landing pages;" },
              { number: "2.3.2", text: "Mona Protect web applications;" },
              { number: "2.3.3", text: "Mona Protect mobile applications (including internal applications); and" },
              { number: "2.3.4", text: "onboarding and repair activities conducted by authorised staff, agents, and partner locations." },
            ],
          },
        ],
      },
      {
        number: "3",
        heading: "Data Protection Officer (DPO)",
        clauses: [
          { number: "3.1", text: "Mona has appointed a Data Protection Officer (DPO) in accordance with the NDPA." },
          {
            number: "3.2",
            text: "The DPO may be contacted at:",
            children: [{ number: "3.2.1", text: "Email: dpo@monaprotect.com." }],
          },
        ],
      },
      {
        number: "4",
        heading: "Contact Channels and Communication",
        clauses: [
          { number: "4.1", text: "Mona operates separate contact channels depending on the nature of a request." },
          {
            number: "4.2",
            text: "Operational support, partner matters, and Team Member App account requests shall be directed to:",
            children: [{ number: "4.2.1", text: "Email: partners@monaprotect.com." }],
          },
          {
            number: "4.3",
            text: "Privacy rights requests (including NDPA data access, correction, deletion, objection, restriction, portability, and complaints) shall be directed to:",
            children: [{ number: "4.3.1", text: "Email: dpo@monaprotect.com." }],
          },
          { number: "4.4", text: "Where a request is submitted via an incorrect channel, Mona may redirect such request to the appropriate channel." },
        ],
      },
      {
        number: "5",
        heading: "Scope of This Privacy Policy",
        clauses: [
          {
            number: "5.1",
            text: "This Privacy Policy applies to personal data processed by Mona in connection with:",
            children: [
              { number: "5.1.1", text: "Mona Protect websites;" },
              { number: "5.1.2", text: "Mona Protect web applications;" },
              { number: "5.1.3", text: "Mona Protect mobile applications; and" },
              { number: "5.1.4", text: "Mona-authorised onboarding, inspection, and claims processes." },
            ],
          },
        ],
      },
      {
        number: "6",
        heading: "Categories of Personal Data Collected",
        clauses: [
          { number: "6.1", text: "Mona may collect and process personal data depending on the service and platform involved." },
          {
            number: "6.2",
            text: "Identity Data",
            children: [
              { number: "6.2.1", text: "full name;" },
              { number: "6.2.2", text: "date of birth;" },
              { number: "6.2.3", text: "gender;" },
              { number: "6.2.4", text: "National Identification Number (NIN), where legally required and processed within Mona’s secure administrative systems; and" },
              { number: "6.2.5", text: "other government-issued identification details where applicable." },
            ],
          },
          {
            number: "6.3",
            text: "Contact Data",
            children: [
              { number: "6.3.1", text: "email address;" },
              { number: "6.3.2", text: "phone number; and" },
              { number: "6.3.3", text: "state and city (where applicable)." },
            ],
          },
          {
            number: "6.4",
            text: "Device and Inspection Data",
            children: [
              { number: "6.4.1", text: "IMEI and other device identifiers provided during onboarding or claims;" },
              { number: "6.4.2", text: "device make and model;" },
              { number: "6.4.3", text: "photos and videos captured during device onboarding or claim inspection; and" },
              { number: "6.4.4", text: "tamper-sticker identifiers (where used)." },
            ],
          },
          {
            number: "6.5",
            text: "Transaction Data",
            children: [
              { number: "6.5.1", text: "payment confirmations;" },
              { number: "6.5.2", text: "receipts; and" },
              { number: "6.5.3", text: "bank transfer references (where applicable)." },
            ],
          },
          {
            number: "6.6",
            text: "Claims Data",
            children: [
              { number: "6.6.1", text: "claim forms and supporting documentation;" },
              { number: "6.6.2", text: "photos and videos of damaged devices; and" },
              { number: "6.6.3", text: "repair and service records." },
            ],
          },
          {
            number: "6.7",
            text: "Technical and Security Data (Limited)",
            children: [
              { number: "6.7.1", text: "IP address (where applicable);" },
              { number: "6.7.2", text: "authentication and access logs; and" },
              { number: "6.7.3", text: "session and security-related records." },
            ],
          },
          { number: "6.8", text: "Mona does not collect behavioural analytics tied to identifiable users and does not use personal data for advertising tracking." },
          {
            number: "6.9",
            text: "Partner and Operational Data",
            children: [
              { number: "6.9.1", text: "sales and repair partner details;" },
              { number: "6.9.2", text: "store and service records; and" },
              { number: "6.9.3", text: "authorised representative information." },
            ],
          },
        ],
      },
      {
        number: "7",
        heading: "Purposes of Processing",
        clauses: [
          {
            number: "7.1",
            text: "Mona processes personal data for the following purposes:",
            children: [
              { number: "7.1.1", text: "device onboarding and activation of protection plans;" },
              { number: "7.1.2", text: "identity verification and fraud prevention;" },
              { number: "7.1.3", text: "payment confirmation and service activation;" },
              { number: "7.1.4", text: "claims assessment, validation, and settlement;" },
              { number: "7.1.5", text: "coordination of authorised repairs;" },
              { number: "7.1.6", text: "compliance with the NDPA, NAICOM requirements, and other applicable laws;" },
              { number: "7.1.7", text: "internal audits, security controls, and operational integrity; and" },
              { number: "7.1.8", text: "marketing communications, only where valid consent has been provided." },
            ],
          },
        ],
      },
      {
        number: "8",
        heading: "Legal Basis for Processing",
        clauses: [
          {
            number: "8.1",
            text: "Mona processes personal data on one or more of the following legal bases:",
            children: [
              { number: "8.1.1", text: "consent;" },
              { number: "8.1.2", text: "contractual necessity;" },
              { number: "8.1.3", text: "legal obligation; and" },
              { number: "8.1.4", text: "legitimate interests." },
            ],
          },
        ],
      },
      {
        number: "9",
        heading: "Data Sharing and Disclosure",
        clauses: [
          { number: "9.1", text: "Mona shares personal data only where necessary and under appropriate safeguards." },
          {
            number: "9.2",
            text: "Personal data may be shared with:",
            children: [
              { number: "9.2.1", text: "authorised sales and repair partners for onboarding and repair fulfilment;" },
              { number: "9.2.2", text: "insurance partners for claim validation and settlement;" },
              { number: "9.2.3", text: "payment processors and banks to process and confirm payments;" },
              { number: "9.2.4", text: "regulators and law enforcement agencies where legally required; and" },
              { number: "9.2.5", text: "IT, hosting, and security service providers under data protection agreements." },
            ],
          },
          { number: "9.3", text: "Mona does not sell personal data to third parties." },
        ],
      },
      {
        number: "10",
        heading: "Inspection Videos and Device Information",
        clauses: [
          { number: "10.1", text: "Inspection videos and device information may be shared with insurance partners strictly for claim validation and settlement." },
          { number: "10.2", text: "Such materials are provided for the purpose of assessing device condition and claim legitimacy." },
          { number: "10.3", text: "Inspection videos and device information are shared with insurance partners solely for claim validation purposes and are not intended to be used to identify individuals." },
        ],
      },
      {
        number: "11",
        heading: "International Data Transfers",
        clauses: [
          { number: "11.1", text: "Personal data is processed primarily within Nigeria." },
          { number: "11.2", text: "Where cross-border processing is required, Mona shall implement NDPA-compliant safeguards and contractual protections." },
        ],
      },
      {
        number: "12",
        heading: "Data Security Measures",
        clauses: [
          {
            number: "12.1",
            text: "Mona implements appropriate technical and organisational safeguards including:",
            children: [
              { number: "12.1.1", text: "role-based access controls;" },
              { number: "12.1.2", text: "encryption in transit and at rest (where applicable);" },
              { number: "12.1.3", text: "authentication and security logging; and" },
              { number: "12.1.4", text: "backup and disaster recovery measures." },
            ],
          },
        ],
      },
      {
        number: "13",
        heading: "Data Retention",
        clauses: [
          { number: "13.1", text: "Mona retains personal data for as long as necessary to provide services and comply with legal obligations." },
          {
            number: "13.2",
            text: "Certain records may be retained for up to ten (10) years after account closure where required for:",
            children: [
              { number: "13.2.1", text: "regulatory compliance;" },
              { number: "13.2.2", text: "fraud prevention;" },
              { number: "13.2.3", text: "audit and record-keeping; and" },
              { number: "13.2.4", text: "insurance and financial reporting." },
            ],
          },
        ],
      },
      {
        number: "14",
        heading: "Data Subject Rights",
        clauses: [
          {
            number: "14.1",
            text: "Data subjects may have the right to:",
            children: [
              { number: "14.1.1", text: "be informed about processing activities;" },
              { number: "14.1.2", text: "access personal data;" },
              { number: "14.1.3", text: "request correction of inaccurate data;" },
              { number: "14.1.4", text: "request deletion, subject to lawful retention obligations;" },
              { number: "14.1.5", text: "restrict or object to processing;" },
              { number: "14.1.6", text: "data portability, where applicable;" },
              { number: "14.1.7", text: "withdraw consent where processing is consent-based; and" },
              { number: "14.1.8", text: "lodge complaints with the NDPC." },
            ],
          },
          {
            number: "14.2",
            text: "Requests may be submitted to:",
            children: [{ number: "14.2.1", text: "Email: dpo@monaprotect.com." }],
          },
        ],
      },
      {
        number: "15",
        heading: "Mona Protect Team Member App (Invite-Only Internal Application)",
        clauses: [
          {
            number: "15.1",
            text: "Nature of the Application",
            children: [
              { number: "15.1.1", text: "The Mona Protect Team Member App is an invite-only internal application." },
              { number: "15.1.2", text: "It is used exclusively by authorised staff, agents, and representatives of Mona." },
            ],
          },
          {
            number: "15.2",
            text: "Account Creation and Access",
            children: [
              { number: "15.2.1", text: "Team Member accounts are created and managed exclusively by Mona." },
              { number: "15.2.2", text: "Users do not self-register within the application." },
              { number: "15.2.3", text: "Access is granted only via invitation." },
              { number: "15.2.4", text: "Login is via email and password, with additional authentication measures (such as email OTP) for security." },
            ],
          },
          {
            number: "15.3",
            text: "Team Member Profile Information",
            children: [
              { number: "15.3.1", text: "Team member profile information is created and maintained by Mona." },
              { number: "15.3.2", text: "Certain profile fields may not be editable within the application." },
              {
                number: "15.3.3",
                text: "Requests for profile updates or corrections may be submitted to:",
                children: [{ number: "15.3.3.1", text: "Email: partners@monaprotect.com." }],
              },
            ],
          },
          {
            number: "15.4",
            text: "Date of Birth (Team Members)",
            children: [
              {
                number: "15.4.1",
                text: "Date of birth is processed strictly for:",
                children: [
                  { number: "15.4.1.1", text: "identity verification;" },
                  { number: "15.4.1.2", text: "fraud prevention; and" },
                  { number: "15.4.1.3", text: "audit and security controls." },
                ],
              },
              { number: "15.4.2", text: "Team members cannot edit date of birth within the application." },
              {
                number: "15.4.3",
                text: "Correction requests must be submitted via:",
                children: [{ number: "15.4.3.1", text: "Email: partners@monaprotect.com." }],
              },
            ],
          },
          {
            number: "15.5",
            text: "Customer Identity Verification (KYC)",
            children: [
              { number: "15.5.1", text: "Mona conducts identity verification during customer onboarding for fraud prevention, compliance, and accurate account management." },
              { number: "15.5.2", text: "Government-issued identifiers such as NIN are processed within Mona’s secure administrative systems." },
              { number: "15.5.3", text: "The Team Member App does not store or display government-issued identification numbers." },
              { number: "15.5.4", text: "Authorised team members may view verified customer details (including name, date of birth, email address, and contact information) strictly for service activation and claims processing." },
            ],
          },
          {
            number: "15.6",
            text: "Account Deactivation",
            children: [
              { number: "15.6.1", text: "Mona may suspend or deactivate Team Member accounts in accordance with internal policies, contractual obligations, or regulatory requirements." },
              { number: "15.6.2", text: "Access to the application is revoked immediately upon deactivation." },
            ],
          },
          {
            number: "15.7",
            text: "Account Deletion (Team Member App)",
            children: [
              {
                number: "15.7.1",
                text: "Team members may request deletion of their account and associated personal data by emailing:",
                children: [
                  { number: "15.7.1.1", text: "Email: partners@monaprotect.com; and" },
                  { number: "15.7.1.2", text: "Subject: Team Member App – Account Deletion Request." },
                ],
              },
              { number: "15.7.2", text: "Mona may require identity verification before processing deletion requests." },
              { number: "15.7.3", text: "Upon verification, eligible personal account data will be permanently deleted within thirty (30) days, except where retention is required under Section 13." },
            ],
          },
        ],
      },
      {
        number: "16",
        heading: "Updates to This Privacy Policy",
        clauses: [
          { number: "16.1", text: "Mona may update this Privacy Policy from time to time." },
          { number: "16.2", text: "Updates shall be published on Mona’s website with a revised “Last Updated” date." },
        ],
      },
      {
        number: "17",
        heading: "Contact Details",
        clauses: [
          {
            number: "17.1",
            text: "Operational / Team Member App Support:",
            children: [{ number: "17.1.1", text: "Email: partners@monaprotect.com" }],
          },
          {
            number: "17.2",
            text: "Data Protection Officer:",
            children: [{ number: "17.2.1", text: "Email: dpo@monaprotect.com" }],
          },
          {
            number: "17.3",
            text: "Company:",
            children: [{ number: "17.3.1", text: "Mona Technologies Ltd" }],
          },
        ],
      },
    ],
  },
};
