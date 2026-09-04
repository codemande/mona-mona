import phoneInsuranceCover from "../assets/guides/phone-insurance-nigeria-cover.webp";
import iphoneSamsungCover from "../assets/guides/iphone-samsung-phone-insurance-nigeria-cover.webp";
import bnplCover from "../assets/guides/buy-now-pay-later-nigeria-cover.webp";

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
  {
    id: "iphone-samsung-phone-insurance-nigeria",
    title: "iPhone & Samsung Phone Insurance in Nigeria: What You Need to Know",
    excerpt:
      "Protect your iPhone or Samsung phone in Nigeria against covered accidental damage. Learn how screen, liquid and back-glass protection works with Mona Protect.",
    category: "Protection",
    metaTitle: "iPhone & Samsung Phone Insurance in Nigeria",
    metaDescription:
      "Protect your iPhone or Samsung phone in Nigeria against covered accidental damage. Learn about screen, liquid and back-glass protection with Mona Protect.",
    author: "Mona Protect Team",
    publishedDate: "2026-01-22",
    cover: iphoneSamsungCover,
    coverAlt: "An iPhone and a Samsung Galaxy smartphone resting side by side, representing premium phone protection.",
    blocks: [
      { type: "paragraph", text: "iPhones and Samsung Galaxy smartphones are among the most valuable phones people carry every day." },
      { type: "paragraph", text: "They're also expensive to repair." },
      { type: "paragraph", text: "A cracked display, broken back glass, liquid damage or an accidental impact can turn a normal day into an unexpected repair bill." },
      { type: "paragraph", text: "If you own a premium smartphone in Nigeria, protecting it before something happens can help you avoid dealing with the full financial impact of an unexpected repair." },
      { type: "paragraph", text: "This guide explains how iPhone and Samsung phone protection works in Nigeria, what types of damage may be covered, and how Mona Protect helps simplify repairs." },

      { type: "heading", text: "Why Protect Your iPhone or Samsung Phone?" },
      { type: "paragraph", text: "Premium smartphones can cost hundreds of thousands, or even millions, of naira." },
      { type: "paragraph", text: "But the cost doesn't stop at the purchase price." },
      { type: "paragraph", text: "A damaged display, camera, back glass or internal component can require an expensive repair. For many smartphone owners, an unexpected repair can be difficult to budget for." },
      { type: "paragraph", text: "Phone protection gives you a way to prepare for these situations before they happen." },
      { type: "paragraph", text: "Instead of waiting until your phone is damaged and then figuring out how to pay for the repair, you can have protection already in place." },

      { type: "heading", text: "What Can Happen to a Premium Smartphone?" },
      { type: "paragraph", text: "Accidents don't have to be dramatic." },
      { type: "paragraph", text: "Your phone can fall from your hand, slide off a table, get exposed to liquid or suffer an impact during everyday use." },
      { type: "paragraph", text: "Some of the most common types of accidental damage include:" },
      { type: "subheading", text: "Cracked or Damaged Screen" },
      { type: "paragraph", text: "The display is one of the most vulnerable parts of a smartphone." },
      { type: "paragraph", text: "A single drop can crack the glass, damage the display or make the phone difficult to use." },
      { type: "subheading", text: "Broken Back Glass" },
      { type: "paragraph", text: "Many modern iPhones and Samsung Galaxy devices feature glass backs." },
      { type: "paragraph", text: "A fall can crack or shatter the rear glass, creating both a cosmetic and practical problem." },
      { type: "subheading", text: "Liquid Damage" },
      { type: "paragraph", text: "Phones are regularly exposed to water and other liquids through everyday accidents." },
      { type: "paragraph", text: "Liquid entering a device can affect its internal components and may result in a costly repair." },
      { type: "subheading", text: "Accidental Hardware Damage" },
      { type: "paragraph", text: "An impact can damage internal components even when the outside of the phone doesn't appear severely damaged." },
      { type: "paragraph", text: "Where the incident qualifies under the protection plan, eligible accidental hardware damage may be covered." },
      { type: "callout", text: "Coverage is subject to the terms, conditions and exclusions of the applicable protection plan." },

      { type: "heading", text: "iPhone Insurance in Nigeria" },
      { type: "paragraph", text: "iPhones are premium devices, and repairing certain models can be expensive." },
      { type: "paragraph", text: "This makes protection particularly relevant for people who want to avoid being completely exposed to the cost of an unexpected accidental repair." },
      { type: "paragraph", text: "Eligible iPhone models can be protected through Mona Protect against covered accidental damage." },
      { type: "paragraph", text: "Whether you purchased your iPhone brand new or as a used device, eligibility depends on the applicable device and protection requirements." },
      { type: "subheading", text: "Which iPhones Can Be Protected?" },
      { type: "paragraph", text: "Mona Protect is designed for eligible premium smartphones, including selected iPhone models." },
      { type: "paragraph", text: "Your specific model must meet the applicable eligibility requirements and be registered before damage occurs." },
      { type: "paragraph", text: "If you're unsure whether your iPhone qualifies, check its eligibility before purchasing protection." },

      { type: "heading", text: "Samsung Phone Insurance in Nigeria" },
      { type: "paragraph", text: "Samsung Galaxy smartphones are also among the most popular premium Android devices in Nigeria." },
      { type: "paragraph", text: "Their large displays, glass construction and advanced hardware can make certain repairs expensive." },
      { type: "paragraph", text: "Eligible Samsung Galaxy devices can be protected against covered accidental damage through Mona Protect." },
      { type: "paragraph", text: "As with iPhones, your specific model and device condition determine eligibility." },

      { type: "heading", text: "Can You Protect a Used iPhone or Samsung?" },
      { type: "paragraph", text: "Yes, an eligible used or pre-owned smartphone can be protected, subject to the applicable requirements." },
      { type: "paragraph", text: "This matters in Nigeria because buying a fairly-used premium phone is common." },
      { type: "paragraph", text: "A used iPhone 13, iPhone 14, Samsung Galaxy S-series device or similar premium smartphone may still represent a significant financial investment." },
      { type: "paragraph", text: "Protection isn't only about whether the phone is new." },
      { type: "paragraph", text: "It's about protecting a device that would be expensive or inconvenient to repair if something went wrong." },
      { type: "paragraph", text: "However, the device must be registered and eligible before the damage happens." },
      { type: "paragraph", text: "Existing damage cannot simply be added to a new protection plan." },

      { type: "heading", text: "What Does iPhone and Samsung Protection Cover?" },
      { type: "paragraph", text: "Coverage depends on the specific plan, but eligible accidental damage may include:" },
      { type: "list", items: ["Accidental screen damage", "Liquid damage", "Back-glass damage", "Accidental impact", "Other eligible accidental hardware damage"] },
      { type: "paragraph", text: "Protection is not the same as unlimited coverage for every possible problem." },
      { type: "paragraph", text: "For example, normal wear and tear, battery aging and existing damage may not qualify." },
      { type: "paragraph", text: "Always check your protection plan's terms before making a claim." },

      { type: "heading", text: "What Isn't Normally Covered?" },
      { type: "paragraph", text: "Depending on the plan, exclusions may include:" },
      { type: "list", items: ["Existing damage", "Normal wear and tear", "Natural battery degradation", "Intentional damage", "Certain cosmetic damage", "Unauthorized repairs or modifications", "Theft or loss where those risks are not included"] },
      { type: "paragraph", text: "The most important rule is simple:" },
      { type: "callout", text: "Protect your phone before you need the protection." },

      { type: "heading", text: "How Does iPhone & Samsung Protection Work?" },
      { type: "paragraph", text: "The process is designed to be straightforward." },
      { type: "steps", items: [
        { title: "Check Eligibility", description: "Confirm that your iPhone or Samsung model qualifies." },
        { title: "Register Your Device", description: "Your device is registered while it is in an eligible condition. Information about the device may be collected during onboarding." },
        { title: "Activate Protection", description: "Once your protection is successfully activated, your phone is protected according to the applicable plan." },
        { title: "Report an Incident", description: "If your phone suffers eligible accidental damage, report it through the applicable claims process." },
        { title: "Assessment", description: "The damage is reviewed to determine whether it qualifies under your protection plan." },
        { title: "Repair", description: "If approved, the eligible repair is handled instantly through the applicable repair process." },
      ] },

      { type: "heading", text: "What If My iPhone or Samsung Is Already Damaged?" },
      { type: "paragraph", text: "A protection plan is designed to protect against future eligible incidents." },
      { type: "paragraph", text: "If your phone is already cracked, damaged or has an existing fault, that damage generally cannot be covered by purchasing protection afterward." },
      { type: "paragraph", text: "If you need to repair a damaged device but don't want to pay the entire repair cost upfront, Mona also offers a separate solution for eligible customers." },

      { type: "heading", text: "Need to Repair Your Phone and Pay Later?" },
      { type: "paragraph", text: "With Fix Now, Get Protected & Pay Later, eligible customers can finance qualifying phone repairs rather than paying the entire repair cost upfront." },
      { type: "paragraph", text: "The concept is simple:" },
      { type: "callout", text: "Fix your phone now. Pay over time. Stay protected." },
      { type: "paragraph", text: "This can be particularly useful when an unexpected repair bill arrives at the wrong time." },
      { type: "cta", label: "Explore Fix Now, Get Protected & Pay Later", to: "/fix-now-get-protected-pay-later", variant: "outline" },

      { type: "heading", text: "Is iPhone or Samsung Protection Worth It?" },
      { type: "paragraph", text: "It depends on your device and your financial situation." },
      { type: "paragraph", text: "If you own a premium smartphone and a major repair would be difficult to pay for unexpectedly, protection can provide valuable financial predictability." },
      { type: "paragraph", text: "Consider the potential cost of:" },
      // Source presents this as a stacked three-line emphasis ("One accidental
      // repair" / "versus" / "The cost of protecting your phone in advance.").
      // Callout has no line-break handling (plain text node, no
      // white-space: pre-line), so rather than touch the renderer, the three
      // lines are represented as three sequential callout blocks — verbatim
      // wording, stacked visually via GuideBlocks' existing block spacing.
      { type: "callout", text: "One accidental repair" },
      { type: "callout", text: "versus" },
      { type: "callout", text: "The cost of protecting your phone in advance." },
      { type: "paragraph", text: "You should also consider the convenience of having a defined process for dealing with covered damage instead of having to figure everything out yourself after an accident." },

      { type: "heading", text: "iPhone & Samsung Protection With Mona Protect" },
      { type: "paragraph", text: "Mona Protect is designed around a simple idea:" },
      { type: "callout", text: "Reliable protection, simplified repairs." },
      { type: "paragraph", text: "Eligible premium smartphones can be protected against covered accidental damage, while Mona helps simplify the repair experience when an eligible incident occurs." },
      { type: "paragraph", text: "Whether you use an iPhone or Samsung Galaxy, protection gives you a way to prepare for unexpected damage before it happens." },

      { type: "heading", text: "Protect Your iPhone or Samsung" },
      { type: "paragraph", text: "Don't wait until your screen is cracked to start thinking about protection." },
      { type: "cta", label: "Get Protected", to: "/smartphone-protection", variant: "primary" },
    ],
    closingBlocks: [
      { type: "heading", text: "Protect Your Phone Before Something Goes Wrong" },
      { type: "paragraph", text: "Your iPhone or Samsung is too valuable to leave completely exposed to an unexpected repair bill." },
      { type: "paragraph", text: "Protect it while it's still in good condition and have greater peace of mind knowing you have a plan for eligible accidental damage." },
      { type: "callout", text: "Mona Protect, Reliable protection, simplified repairs." },
      { type: "cta", label: "Get Protected", to: "/smartphone-protection", variant: "primary" },
    ],
    faqs: [
      { q: "Can I insure my iPhone in Nigeria?", a: "Eligible iPhone models can be protected under applicable Mona Protect plans, subject to the device and protection requirements." },
      { q: "Can I insure my Samsung phone in Nigeria?", a: "Eligible Samsung Galaxy devices can be protected under applicable protection plans." },
      { q: "Does iPhone protection cover cracked screens?", a: "Eligible accidental screen damage may be covered depending on the applicable protection plan." },
      { q: "Does Samsung phone protection cover screen damage?", a: "Eligible accidental screen damage may be covered according to the applicable plan's terms." },
      { q: "Can I protect a used iPhone?", a: "Yes. Eligible used iPhones may be protected, subject to the applicable eligibility and condition requirements." },
      { q: "Can I protect a used Samsung phone?", a: "Eligible used Samsung devices may also qualify for protection, subject to the provider's requirements." },
      { q: "Does phone protection cover water damage?", a: "Some protection plans cover accidental liquid damage. Check the terms of your specific plan." },
      { q: "Can I protect my phone after it has been damaged?", a: "No. Protection is intended for eligible incidents that occur after the device has been registered and protection activated. Existing damage generally isn't covered." },
      { q: "What happens if my phone needs a repair but I can't pay the full amount?", a: "Eligible customers may be able to use Mona's Fix Now, Get Protected & Pay Later service to finance qualifying repairs." },
    ],
  },
  {
    id: "buy-now-pay-later-nigeria",
    title: "Buy Now, Pay Later in Nigeria: How BNPL Works",
    excerpt:
      "Learn how Buy Now, Pay Later works in Nigeria, who can qualify, how repayments work, and how Mona combines BNPL with device protection.",
    category: "Buying",
    metaTitle: "Buy Now, Pay Later in Nigeria: How BNPL Works",
    metaDescription:
      "Learn how Buy Now, Pay Later works in Nigeria, who can qualify, how repayments work, and how Mona combines BNPL with device protection.",
    author: "Mona Protect Team",
    publishedDate: "2026-01-29",
    cover: bnplCover,
    coverAlt: "A premium smartphone beside a subtle suggestion of flexible payments, representing Buy Now, Pay Later.",
    blocks: [
      { type: "paragraph", text: "Buying something you need shouldn't always mean paying the full cost at once." },
      { type: "paragraph", text: "Whether you're replacing a smartphone, buying a premium device or paying for an important purchase, Buy Now, Pay Later (BNPL) gives eligible customers the option to spread the cost over time." },
      { type: "paragraph", text: "BNPL is becoming an increasingly useful way for consumers in Nigeria to manage larger purchases without paying the entire amount upfront." },
      { type: "paragraph", text: "But how does BNPL work? Who can qualify? What does the application process involve? And what should you consider before choosing a pay-later option?" },
      { type: "paragraph", text: "This guide explains everything you need to know about Buy Now, Pay Later in Nigeria." },

      { type: "heading", text: "What Is Buy Now, Pay Later?" },
      { type: "paragraph", text: "Buy Now, Pay Later is a financing arrangement that allows an eligible customer to purchase an item and repay the financed amount over an agreed period rather than paying the entire cost upfront." },
      { type: "paragraph", text: "Instead of:" },
      { type: "callout", text: "Pay ₦500,000 today" },
      { type: "paragraph", text: "you may have an arrangement where you:" },
      { type: "callout", text: "Pay an initial amount → Receive the purchase → Repay the balance over time" },
      { type: "paragraph", text: "The exact deposit, amount financed, fees, tenure and repayment terms depend on the applicable financing arrangement and the customer's eligibility." },

      { type: "heading", text: "How Does BNPL Work in Nigeria?" },
      { type: "paragraph", text: "The process is generally straightforward." },
      { type: "steps", items: [
        { title: "Choose What You Need", description: "You select an eligible product or service and begin the application process." },
        { title: "Submit Your Details", description: "The required information is collected to allow the financing provider to assess your application." },
        { title: "Eligibility Assessment", description: "Your application is assessed against the applicable eligibility criteria. Being eligible to apply does not necessarily mean that an application will be approved." },
        { title: "Review Your Offer", description: "If approved, you can review the applicable amount, initial payment and repayment terms before proceeding." },
        { title: "Make Your Required Initial Payment", description: "Depending on the financing arrangement, you may need to make a down payment or initial contribution." },
        { title: "Receive the Product", description: "Once the applicable requirements have been completed, the purchase can proceed." },
        { title: "Repay Over Time", description: "You then make the required repayments according to the agreed repayment schedule." },
      ] },

      { type: "heading", text: "Can You Buy a Phone With BNPL in Nigeria?" },
      { type: "paragraph", text: "Yes. Phone financing is one of the practical applications of BNPL." },
      { type: "paragraph", text: "Instead of paying the entire price of an expensive smartphone upfront, an eligible customer may be able to make an initial payment and repay the remaining financed amount over time." },
      { type: "paragraph", text: "This can make premium smartphones more accessible to customers who prefer to manage their cash flow through structured repayments." },
      { type: "paragraph", text: "For example, instead of paying the entire cost of an eligible phone immediately, a customer could make the required initial contribution and spread the remaining amount across the agreed repayment period." },
      { type: "paragraph", text: "The actual amount and repayment terms depend on eligibility and the applicable financing arrangement." },

      { type: "heading", text: "Can You Buy an iPhone and Pay Later?" },
      { type: "paragraph", text: "Eligible customers may be able to finance an iPhone purchase through a BNPL arrangement." },
      { type: "paragraph", text: "This can be particularly useful for customers who want a premium iPhone without committing the entire purchase price at once." },
      { type: "paragraph", text: "Before proceeding, customers should understand:" },
      { type: "list", items: ["Required initial payment", "Amount being financed", "Repayment period", "Applicable fees", "Total repayment amount", "Repayment schedule", "Other applicable terms"] },

      { type: "heading", text: "Can You Buy a Samsung Phone and Pay Later?" },
      { type: "paragraph", text: "Eligible Samsung devices may also be purchased through applicable BNPL arrangements." },
      { type: "paragraph", text: "As with any financed purchase, the customer should understand the total cost and repayment obligations before accepting the arrangement." },

      { type: "heading", text: "How Much Do You Pay Upfront?" },
      { type: "paragraph", text: "The amount you pay upfront depends on the financing arrangement and your eligibility." },
      { type: "paragraph", text: "For Mona's pay-later offerings, eligible customers may be required to make a minimum 25% down payment, while the remaining amount may be financed according to the applicable terms." },
      { type: "paragraph", text: "Your required payment may also include applicable fees or any amount not covered by the financing." },
      { type: "paragraph", text: "The exact figures should always be displayed clearly before the customer confirms the financing arrangement." },

      { type: "heading", text: "How Long Do You Have to Repay?" },
      { type: "paragraph", text: "Repayment periods vary depending on the financing arrangement and the customer's eligibility." },
      { type: "paragraph", text: "Different customers may qualify for different repayment periods." },
      { type: "paragraph", text: "Before accepting an offer, make sure you understand:" },
      { type: "callout", text: "How much you will pay → how often you will pay → how long you will pay." },
      { type: "paragraph", text: "A longer repayment period can reduce the size of individual payments but may affect the overall cost depending on the applicable terms." },

      { type: "heading", text: "Who Can Qualify for BNPL?" },
      { type: "paragraph", text: "BNPL is not automatically available to everyone." },
      { type: "paragraph", text: "Eligibility can depend on factors such as:" },
      { type: "list", items: ["Customer information", "Income or repayment capacity", "Financial profile", "Required verification", "Financing provider criteria", "Requested amount", "Applicable affordability requirements"] },
      { type: "paragraph", text: "Submitting an application does not guarantee approval." },
      { type: "paragraph", text: "The financing provider makes the applicable credit decision based on its assessment criteria." },

      { type: "heading", text: "What Documents or Information May Be Required?" },
      { type: "paragraph", text: "The requirements vary depending on the financing provider and application." },
      { type: "paragraph", text: "Customers may be asked to provide information such as:" },
      { type: "list", items: ["Personal details", "Contact information", "Bank account information", "Identification information", "Address information", "Income or employment information", "Other information required for verification"] },
      { type: "paragraph", text: "Only provide information through the approved application process." },

      { type: "heading", text: "BNPL vs Paying the Full Amount Upfront" },
      { type: "paragraph", text: "Both options have advantages." },
      { type: "table", columns: ["Pay Upfront", "Buy Now, Pay Later"], rows: [
        ["Pay the full price immediately", "Spread eligible payments over time"],
        ["No outstanding repayment", "Repay according to a schedule"],
        ["Larger immediate cash outflow", "Smaller scheduled payments"],
        ["Simple ownership after payment", "Requires repayment discipline"],
      ] },
      { type: "paragraph", text: "BNPL can be useful when you want to preserve cash flow, but it is still a financial commitment." },
      { type: "paragraph", text: "You should only choose a repayment plan you can comfortably afford." },

      { type: "heading", text: "What Makes Mona's Pay-Later Experience Different?" },
      { type: "paragraph", text: "Mona isn't only focused on helping customers finance a purchase." },
      { type: "paragraph", text: "We're building an ecosystem around devices, protection, repairs and flexible payments." },
      { type: "paragraph", text: "That's why Mona offers:" },
      { type: "callout", text: "Buy Now, Get Protected & Pay Later" },
      { type: "paragraph", text: "Eligible customers can:" },
      { type: "callout", text: "Buy a device → Get protected → Pay over time" },
      { type: "paragraph", text: "This combines an eligible device purchase with Mona protection, giving customers both a way to manage the purchase cost and protection for their device." },
      { type: "cta", label: "Explore Buy Now, Get Protected & Pay Later", to: "/buy-now-get-protected-pay-later", variant: "outline" },

      { type: "heading", text: "What If Your Phone Is Already Broken?" },
      { type: "paragraph", text: "Buying a new phone isn't always the answer." },
      { type: "paragraph", text: "Sometimes you simply need to repair the phone you already have." },
      { type: "paragraph", text: "That's where Fix Now, Get Protected & Pay Later comes in." },
      { type: "paragraph", text: "Eligible customers can finance qualifying repairs instead of paying the entire repair cost upfront." },
      { type: "callout", text: "Repair now → Pay over time → Stay protected." },
      { type: "cta", label: "Explore Fix Now, Get Protected & Pay Later", to: "/fix-now-get-protected-pay-later", variant: "outline" },
    ],
    closingBlocks: [
      { type: "heading", text: "Buy What You Need. Pay Over Time. Stay Protected." },
      { type: "paragraph", text: "BNPL can give eligible customers more flexibility when purchasing a premium smartphone or another qualifying product." },
      { type: "paragraph", text: "But flexibility works best when the repayment is affordable and clearly understood." },
      { type: "paragraph", text: "At Mona, we're taking that idea further by connecting flexible payments with device protection." },
      { type: "callout", text: "Buy your device. Get protected. Pay over time." },
      { type: "cta", label: "Explore Buy Now, Get Protected & Pay Later", to: "/buy-now-get-protected-pay-later", variant: "primary" },
    ],
    faqs: [
      { q: "What does BNPL mean?", a: "BNPL stands for Buy Now, Pay Later. It allows eligible customers to purchase an item and repay the applicable financed amount over an agreed period." },
      { q: "How does Buy Now, Pay Later work in Nigeria?", a: "An eligible customer applies for financing, completes the required assessment, makes any required initial payment and repays the financed amount according to the agreed schedule." },
      { q: "Can I buy an iPhone and pay monthly in Nigeria?", a: "Eligible customers may be able to finance an eligible iPhone purchase and repay the financed amount over an agreed period." },
      { q: "Can I buy a Samsung phone and pay later?", a: "Eligible Samsung devices may be available through applicable BNPL arrangements, subject to eligibility." },
      { q: "How much deposit do I need for BNPL?", a: "The required initial payment depends on the financing arrangement and customer eligibility. Mona's applicable pay-later products may require a minimum 25% down payment." },
      { q: "Does everyone qualify for BNPL?", a: "No. Applications are assessed according to the applicable eligibility and affordability criteria." },
      { q: "Does applying guarantee approval?", a: "No. Submitting an application does not guarantee that financing will be approved." },
      { q: "Can I use BNPL to repair my phone?", a: "Eligible customers may be able to finance qualifying phone repairs through Mona's Fix Now, Get Protected & Pay Later service." },
      { q: "What is Buy Now, Get Protected & Pay Later?", a: "It is Mona's pay-later solution that combines an eligible device purchase with Mona protection, allowing eligible customers to buy, get protected and repay over time." },
    ],
  },
];
