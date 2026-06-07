window.OSLOCATION_CONFIG = {
  booking: {
    providerName: "Calendly",
    // Replace with your real provider booking URL before production.
    bookingUrl: "https://calendly.com/YOUR_ACCOUNT/oslocation-guiding",
    embedUrl: "",
    availability: [
      "Weekday city tours: 09:00, 13:00, 17:00",
      "Weekend highlights: 10:00 and 14:00",
      "Private/custom guiding: request preferred times in booking notes"
    ]
  },
  reviews: {
    // Replace with your real review submission endpoint before production.
    submissionEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
    approvedReviewsPath: "data/approved-reviews.json"
  }
};
