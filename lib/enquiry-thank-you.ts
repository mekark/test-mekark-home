const ENQUIRY_SUBMITTED_KEY = "mekark-enquiry-submitted";

export function markEnquirySubmitted() {
  if (typeof window === "undefined") {
    return;
  }

  sessionStorage.setItem(ENQUIRY_SUBMITTED_KEY, "1");
}

export function hasEnquirySubmitted() {
  if (typeof window === "undefined") {
    return false;
  }

  return sessionStorage.getItem(ENQUIRY_SUBMITTED_KEY) === "1";
}
