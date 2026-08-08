/**
 * Mocked "Ask AI Assistant" responses — no LLM backend wired up yet, so
 * this does simple keyword matching over a small set of canned, portfolio-
 * flavoured answers. Swap this out for a real AI/analytics API later
 * without touching the screen itself.
 */

const RESPONSE_BANK: { keywords: string[]; text: string }[] = [
  {
    keywords: ["centre", "kendra", "group", "grt"],
    text:
      "Across your active centres, average repayment health is 74/100. Kalyanpur Pragati Kendra needs the most attention (score 60) — consider a GRT refresher before adding new members there.",
  },
  {
    keywords: ["npa", "overdue", "default", "write off"],
    text:
      "3 accounts in your portfolio are 90+ days overdue. Prioritise a home visit for the largest outstanding balance first — early contact typically improves recovery odds by ~30% in similar cases.",
  },
  {
    keywords: ["kyc", "aadhaar", "document", "verif"],
    text:
      "2 pending KYC re-verifications were flagged due to address mismatches. Ask the customer to reconfirm their current address before the next disbursement step.",
  },
  {
    keywords: ["collection", "emi", "repayment", "installment"],
    text:
      "Collection efficiency this month is 94.5%, slightly above target. 5 customers are at risk of missing this week's EMI — a reminder call today could prevent 2-3 delays.",
  },
  {
    keywords: ["risk", "fraud", "duplicate"],
    text:
      "2 duplicate Aadhaar numbers were detected across recent onboarding records. Review both applications before approving disbursement.",
  },
];

const FALLBACK_RESPONSE =
  "Based on your current portfolio, focus today on the high-priority alerts above — they cover the accounts most likely to need attention this week.";

const RESPONSE_DELAY_MS = 900;

export const getAiAssistantResponse = (query: string): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const lower = query.toLowerCase();
      const match = RESPONSE_BANK.find(entry =>
        entry.keywords.some(keyword => lower.includes(keyword))
      );
      resolve(match ? match.text : FALLBACK_RESPONSE);
    }, RESPONSE_DELAY_MS);
  });
};
