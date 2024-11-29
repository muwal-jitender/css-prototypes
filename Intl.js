const date = new Date();
//en-US de-DE

// Formats dates and times.
const formatter = new Intl.DateTimeFormat("en-IN", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

console.log(formatter.format(date));

// Formats numbers, currencies, and percentages.

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

console.log(currencyFormatter.format(123456.78)); // "123.456,78 €"

// Compares and sorts strings in a locale-sensitive way.
const collator = new Intl.Collator("de", { sensitivity: "case" });

const names = ["Änne", "Fränzi", "Anita", "Hjördis", "Mädelein", "Björn"];

console.log(names.sort(collator.compare));

// Formats lists in a locale-sensitive manner.

const listFormatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});

console.log(listFormatter.format(["Apple", "Banana", "Cherry"])); // "Apple,

/// Formats relative time (e.g., "3 days ago" or "in 5 minutes").

const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
console.log(rtf.format(-3, "days")); // "3 days ago"
console.log(rtf.format(5, "minutes")); // "in 5 minutes"
