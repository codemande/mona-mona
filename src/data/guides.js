import phoneInsuranceCover from "../assets/guides/phone-insurance-nigeria-cover.webp";

// Placeholder posts removed. Real Guides content starts here.
//
// Post shape:
//   id, title, excerpt, category, metaTitle, metaDescription, author,
//   publishedDate (ISO yyyy-mm-dd), cover, coverAlt, blocks, faqs
//
// `blocks` is a flat, type-tagged array — each entry is one of:
//   { type: "heading", text }
//   { type: "subheading", text }
//   { type: "paragraph", text }
//   { type: "list", items: [string] }
//   { type: "steps", items: [{ title, description }] }
//   { type: "table", columns: [string], rows: [[string]] }
//   { type: "callout", text }
//   { type: "cta", label, to, variant }
// `faqs` is a separate top-level array of { q, a } — feeds the FAQ accordion
// and FAQPage JSON-LD independently of `blocks`.
export const guides = [
  {
    id: "phone-insurance-nigeria",
    title: "Phone Insurance in Nigeria: The Complete Guide to Protecting Your Smartphone",
    excerpt:
      "Learn how phone insurance works in Nigeria, what it covers, what it doesn't, how much it costs, and how Mona Protect helps make smartphone repairs simpler.",
    category: "Protection",
    metaTitle: "Phone Insurance in Nigeria: Complete Guide to Phone Protection",
    metaDescription:
      "Learn how phone insurance works in Nigeria, what it covers, how much it costs, and how Mona Protect helps protect your smartphone from accidental damage.",
    author: "Mona Protect Team",
    publishedDate: "2026-01-15",
    cover: phoneInsuranceCover,
    coverAlt: "A premium smartphone resting on a clean surface, representing smartphone protection.",
    blocks: [
      { type: "paragraph", text: "Your smartphone is more than just a phone. For many people, it is one of the most valuable devices they own and an important part of everyday life." },
      { type: "paragraph", text: "But accidents happen. A cracked screen, liquid damage, broken back glass or accidental impact can quickly turn into an expensive repair." },
      { type: "paragraph", text: "That's where phone insurance and device protection can help." },
      { type: "paragraph", text: "In this guide, we'll explain how phone insurance works in Nigeria, what it can cover, what it doesn't cover, how much protection can cost, and how Mona Protect helps make smartphone repairs simpler." },

      { type: "heading", text: "What Is Phone Insurance?" },
      { type: "paragraph", text: "Phone insurance is a service designed to protect you from the financial impact of certain unexpected events affecting your smartphone." },
      { type: "paragraph", text: "Depending on the plan, protection may cover accidental damage such as:" },
      { type: "list", items: ["Screen damage", "Liquid damage", "Back-glass damage", "Accidental impact", "Other eligible accidental hardware damage"] },
      { type: "paragraph", text: "Instead of having to handle every eligible repair entirely out of pocket, a protection plan can help cover or facilitate the repair according to its terms and conditions." },
      { type: "paragraph", text: "Coverage varies between providers, so it is important to understand exactly what your plan covers before purchasing it." },

      { type: "heading", text: "Why Is Phone Protection Important in Nigeria?" },
      { type: "paragraph", text: "Premium smartphones are expensive to buy and can also be expensive to repair." },
      { type: "paragraph", text: "A damaged screen, back glass or internal component can result in a repair bill that many people did not plan for." },
      { type: "paragraph", text: "This is especially important for owners of premium devices such as iPhones, Samsung Galaxy smartphones and Google Pixel devices." },
      { type: "paragraph", text: "Phone protection gives you a way to prepare for unexpected accidental damage before it happens, rather than trying to find money for a major repair after the incident." },

      { type: "heading", text: "What Does Phone Insurance Cover?" },
      { type: "paragraph", text: "Coverage depends on the provider and plan, but phone protection may include:" },
      { type: "subheading", text: "Screen Damage" },
      { type: "paragraph", text: "A cracked or shattered screen is one of the most common types of smartphone damage. Eligible accidental screen damage may be covered under your protection plan." },
      { type: "subheading", text: "Liquid Damage" },
      { type: "paragraph", text: "Accidentally dropping your phone in water or spilling liquid on it can cause serious internal damage. Some protection plans include accidental liquid damage." },
      { type: "subheading", text: "Back-Glass Damage" },
      { type: "paragraph", text: "Many modern smartphones use glass backs that can crack or shatter following an accidental drop. Eligible back-glass damage may be covered depending on your plan." },
      { type: "subheading", text: "Accidental Hardware Damage" },
      { type: "paragraph", text: "An impact can damage internal components even when the damage isn't immediately visible. Where the incident qualifies under the plan, eligible hardware repairs may be covered." },
      { type: "callout", text: "Important: Coverage is subject to the terms, conditions and exclusions of the applicable protection plan." },

      { type: "heading", text: "What Isn't Covered?" },
      { type: "paragraph", text: "Not every type of damage qualifies for protection." },
      { type: "paragraph", text: "Depending on the plan, common exclusions may include:" },
      { type: "list", items: ["Normal wear and tear", "Battery aging or natural battery degradation", "Existing damage", "Intentional or deliberate damage", "Cosmetic damage that does not affect functionality", "Theft or loss where these risks are not included", "Damage resulting from unauthorized modifications or repairs"] },
      { type: "paragraph", text: "Always review the terms of your specific protection plan." },

      { type: "heading", text: "How Much Does Phone Insurance Cost in Nigeria?" },
      { type: "paragraph", text: "There isn't one price for every phone." },
      { type: "paragraph", text: "The cost of protection can depend on factors such as:" },
      { type: "list", items: ["Device brand", "Device model", "Device value", "Level of protection", "Protection period"] },
      { type: "paragraph", text: "At Mona Protect, the cost is based on the eligible device and selected protection plan." },
      { type: "paragraph", text: "The important thing is to compare the cost of protection with the potential cost of repairing your phone yourself." },

      { type: "heading", text: "Can You Protect a Used Phone?" },
      { type: "paragraph", text: "Yes, eligible used or pre-owned smartphones can be protected, subject to the provider's requirements." },
      { type: "paragraph", text: "This is particularly relevant in Nigeria, where many people buy fairly-used premium smartphones." },
      { type: "paragraph", text: "However, protection must be activated before the damage occurs. You generally cannot wait until your phone is already damaged and then purchase protection for that existing damage." },

      { type: "heading", text: "Can You Protect an iPhone or Samsung Phone?" },
      { type: "paragraph", text: "Yes. Eligible premium smartphones, including selected iPhone and Samsung Galaxy models, can be protected under applicable device protection plans." },
      { type: "paragraph", text: "This can be particularly useful for expensive devices where a single accidental repair could result in a significant unexpected expense." },
      { type: "paragraph", text: "If you own a premium smartphone, the question isn't only how much you paid for it." },
      { type: "paragraph", text: "It's also:" },
      { type: "callout", text: "\"How much would it cost me to repair it if something went wrong tomorrow?\"" },

      { type: "heading", text: "How Does Phone Protection Work?" },
      { type: "paragraph", text: "Getting your phone protected is straightforward." },
      { type: "steps", items: [
        { title: "Check Your Device", description: "Your phone must meet the provider's eligibility requirements." },
        { title: "Register Your Device", description: "Your device is registered while it is in an eligible condition and before an incident occurs." },
        { title: "Activate Protection", description: "Once your plan is successfully activated, your device is protected according to the applicable terms." },
        { title: "Report Damage", description: "If your phone suffers eligible accidental damage, you report the incident through the provider's claims or repair process." },
        { title: "Assessment and Repair", description: "The damage is assessed. If the claim is approved, the eligible repair is arranged according to the protection plan." },
      ] },

      { type: "heading", text: "How Mona Protect Works" },
      { type: "paragraph", text: "Mona Protect is built to make device protection and repairs simpler for premium smartphone owners in Nigeria." },
      { type: "paragraph", text: "Eligible smartphones can be protected against covered accidental damage, including incidents such as screen damage, liquid damage, back-glass damage and eligible accidental hardware damage." },
      { type: "paragraph", text: "Your device is registered before damage occurs. If an eligible incident happens, you report it to Mona and the damage is assessed according to your protection plan." },
      { type: "paragraph", text: "If approved, the eligible repair is handled through Mona's repair process." },
      { type: "callout", text: "Reliable protection. Simplified repairs." },
      { type: "paragraph", text: "Protect your eligible smartphone before an unexpected accident happens." },
      { type: "cta", label: "Get Protected", to: "/smartphone-protection", variant: "primary" },

      { type: "heading", text: "Phone Protection vs Paying for Repairs Yourself" },
      { type: "paragraph", text: "Without protection, an unexpected repair can become a large out-of-pocket expense." },
      { type: "paragraph", text: "With a protection plan, you pay for protection in advance and can access eligible repair support when a covered incident occurs." },
      { type: "table", columns: ["Without Protection", "With Mona Protect"], rows: [
        ["Unexpected repair expense", "Planned protection cost"],
        ["You handle eligible repair costs yourself", "Eligible repairs handled according to your plan"],
        ["Greater financial uncertainty", "More predictable protection"],
        ["You may have to arrange everything yourself", "Mona helps simplify the repair process"],
      ] },

      { type: "heading", text: "Can You Repair Your Phone and Pay Later?" },
      { type: "paragraph", text: "If you have an already damaged phone but don't want to pay the entire repair cost upfront, eligible customers may be able to use Fix Now, Get Protected & Pay Later." },
      { type: "paragraph", text: "The concept is simple:" },
      { type: "callout", text: "Fix your phone now. Pay over time. Stay protected." },
      { type: "paragraph", text: "This gives eligible customers a way to finance a qualifying repair while also accessing Mona protection." },
      { type: "cta", label: "Explore Fix Now, Get Protected & Pay Later", to: "/fix-now-get-protected-pay-later", variant: "outline" },

      { type: "heading", text: "Can You Buy a Phone and Pay Later?" },
      { type: "paragraph", text: "Mona also offers Buy Now, Get Protected & Pay Later for eligible customers." },
      { type: "paragraph", text: "This allows eligible customers to purchase a device, receive protection and spread the applicable cost over an agreed repayment period." },
      { type: "cta", label: "Explore Buy Now, Get Protected & Pay Later", to: "/buy-now-get-protected-pay-later", variant: "outline" },

      { type: "heading", text: "Is Phone Insurance Worth It?" },
      { type: "paragraph", text: "It depends on your phone and your financial situation." },
      { type: "paragraph", text: "If you own a phone that is inexpensive to repair, you may prefer to pay for repairs yourself." },
      { type: "paragraph", text: "But if you own a premium smartphone where one accidental incident could result in a substantial repair bill, protection can make more sense." },
      { type: "paragraph", text: "A simple way to think about it is:" },
      { type: "callout", text: "Protection cost vs. potential repair cost." },
      { type: "paragraph", text: "You're not only paying for the possibility of a repair. You're also paying for greater predictability and a simpler process when something goes wrong." },

      { type: "heading", text: "What Should You Check Before Choosing Phone Protection?" },
      { type: "paragraph", text: "Before choosing a protection plan, look beyond the price." },
      { type: "paragraph", text: "Check:" },
      { type: "list", items: ["What types of damage are covered?", "What is excluded?", "Is your specific phone eligible?", "Can used devices be protected?", "When does protection begin?", "How do you make a claim?", "Where are repairs handled?", "How long does protection last?", "Does the plan automatically renew?"] },
      { type: "paragraph", text: "Understanding these details helps you choose protection that actually fits your needs." },
    ],
    // Rendered after the FAQ accordion, per the approved reading order
    // (all body blocks -> FAQ -> closing section). Verbatim continuation
    // of `blocks` above, just relocated so GuideDetail can render the FAQ
    // between them without index/string matching.
    closingBlocks: [
      { type: "heading", text: "Protect Your Phone Before You Need It" },
      { type: "paragraph", text: "You don't have to wait until your phone is damaged before thinking about protection." },
      { type: "paragraph", text: "Whether you own an eligible iPhone, Samsung Galaxy, Google Pixel or another premium smartphone, Mona Protect helps you prepare for covered accidental damage and simplify the repair experience." },
      { type: "callout", text: "Protect your device. Simplify your repairs." },
      { type: "cta", label: "Get Protected", to: "/smartphone-protection", variant: "primary" },
      { type: "paragraph", text: "Mona Protect — Reliable protection, simplified repairs." },
    ],
    faqs: [
      { q: "What is phone insurance in Nigeria?", a: "Phone insurance or device protection is designed to help protect your smartphone against specified risks, such as accidental damage, according to the terms of the applicable plan." },
      { q: "Does phone insurance cover cracked screens?", a: "Some phone protection plans cover accidental screen damage. Coverage depends on the specific plan and its terms." },
      { q: "Does phone insurance cover water damage?", a: "Some protection plans cover accidental liquid damage. Always check the coverage of your specific plan." },
      { q: "Can I protect a used iPhone?", a: "Eligible used smartphones may be protected, subject to the provider's eligibility and condition requirements." },
      { q: "Can I protect a Samsung phone in Nigeria?", a: "Eligible Samsung Galaxy devices can be protected under applicable device protection plans." },
      { q: "Does phone insurance cover theft?", a: "Not every protection plan covers theft or loss. Check the specific plan before purchasing." },
      { q: "Can I protect my phone after it has been damaged?", a: "Protection generally needs to be activated before the covered incident occurs. Existing damage is normally not eligible for a new protection plan." },
      { q: "Can I finance my phone repair?", a: "Eligible customers may be able to finance qualifying repairs through Mona's Fix Now, Get Protected & Pay Later service." },
      { q: "Can I buy a phone and pay later?", a: "Eligible customers may be able to purchase a device through Mona's Buy Now, Get Protected & Pay Later service and repay over an agreed period." },
    ],
  },
];
