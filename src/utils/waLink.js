const WHATSAPP_NUMBER = "2347048100101";

function buildLink(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function waProtectionLink(model = "phone", city = "Nigeria", number = WHATSAPP_NUMBER) {
  return buildLink(
    number,
    `Hello Mona, I want to protect my ${model}. I am located in ${city}.`
  );
}

export function waBuyLink(brand = "smartphone", city = "Nigeria", number = WHATSAPP_NUMBER) {
  return buildLink(
    number,
    `Hello Mona, I want to use Buy Now, Get Protected & Pay Later for an eligible ${brand}. I am located in ${city}.`
  );
}

export function waFixLink(model = "phone", city = "Nigeria", number = WHATSAPP_NUMBER) {
  return buildLink(
    number,
    `Hello Mona, my ${model} is damaged and I want to use Fix Now, Get Protected & Pay Later. I am located in ${city}.`
  );
}

export function waPartnerLink(type = "retail store", city = "Nigeria", number = WHATSAPP_NUMBER) {
  return buildLink(
    number,
    `Hello Mona, I operate a smartphone ${type} in ${city} and I would like to become a Mona Partner Store.`
  );
}

export function waExistingLink(city = "Nigeria", number = WHATSAPP_NUMBER) {
  return buildLink(
    number,
    `Hello Mona, I already have Mona Protection and my phone is damaged. Please help me get it repaired at an authorised Partner Store. I am located in ${city}.`
  );
}

export function waGenericLink(message = "Hello Mona, I have a question.", number = WHATSAPP_NUMBER) {
  return buildLink(number, message);
}

export { WHATSAPP_NUMBER };
