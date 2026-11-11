export type FaqItem = { question: string; answer: string };

export type FaqCategory = {
  id: string;
  name: string;
  faqs: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: 'general',
    name: 'General',
    faqs: [
      {
        question: 'Do you offer free estimates?',
        answer: 'Yes. At GA Tucker PI, you can receive a free estimate before hiring a private detective.',
      },
      {
        question: 'Are you licensed?',
        answer: 'Yes, GA Tucker PI is licensed by the state of California. Our license number is PI188351. You will work with a licensed private investigator when you hire us. Verify license: https://search.dca.ca.gov/',
      },
      {
        question: 'Do private investigators have to be licensed?',
        answer: 'Yes, a private investigator must be licensed in the state of California. Contact GA Tucker PI today.',
      },
      {
        question: 'Who hires private investigators?',
        answer: "There are many reasons why a person may hire a private investigator. Typically, a client will hire one when they are trying to obtain information that they aren't able to get on their own. Contact GA Tucker PI for more information today.",
      },
      {
        question: 'How long does it take to solve a particular case?',
        answer: 'The length of a case depends on many different factors. It also depends on the specifics of the case and the details involved. The length of an investigation can vary from a few days to several weeks or months. We recommend calling GA Tucker PI and speaking with a private detective to discuss the details.',
      },
      {
        question: 'Will my case be confidential?',
        answer: 'Yes, your case at GA Tucker PI will remain confidential. You can trust that your private detective will not share your personal information.',
      },
      {
        question: 'How do you charge?',
        answer: 'At GA Tucker PI, we collect money upfront after you hire a private investigator.',
      },
      {
        question: 'What are the benefits of choosing GA Tucker PI?',
        answer: "We work closely with all of our clients to provide the best service possible. We manage our client's hours and prioritize efficiency.",
      },
    ],
  },
  {
    id: 'background-checks',
    name: 'Background Checks',
    faqs: [
      {
        question: 'How long do background checks take?',
        answer: 'Background checks usually take one to two business days to pull. We begin by gathering information through our comprehensive check and then have our technical analyst dig further into the content to establish connections.',
      },
      {
        question: 'What is included in a background check?',
        answer: 'Our comprehensive background checks include criminal records, social media analysis, address history, employment verification, and more. We use databases similar to those used by law enforcement to provide thorough results.',
      },
      {
        question: 'Can you do employment background checks?',
        answer: 'Yes, we provide comprehensive pre-employment screening services for businesses. This includes criminal history, work history verification, and other relevant checks to help you make informed hiring decisions.',
      },
    ],
  },
  {
    id: 'infidelity',
    name: 'Infidelity',
    faqs: [
      {
        question: 'How long does an infidelity investigation typically take?',
        answer: "Investigation timelines vary based on your specific circumstances. Some cases require only a few days of surveillance, while others may need several weeks to establish patterns and gather conclusive evidence. We'll discuss the optimal timeline during your consultation.",
      },
      {
        question: 'Is the evidence you gather admissible in court?',
        answer: 'Yes. All our investigations are conducted legally and ethically. The evidence we gather meets legal standards and can be used in divorce proceedings, custody battles, or other legal matters. We can also provide expert testimony if required.',
      },
      {
        question: "Will my partner know they're being investigated?",
        answer: 'No. Our investigators are highly trained in discreet surveillance techniques. We use unmarked vehicles, maintain safe distances, and employ professional methods to ensure your partner remains unaware of the investigation.',
      },
      {
        question: "What happens if you don't find evidence of infidelity?",
        answer: "While we hope to provide you with peace of mind either way, if we don't find evidence of infidelity during the agreed-upon investigation period, we'll provide a full report of our findings. Many clients find relief in knowing the truth, regardless of the outcome.",
      },
      {
        question: 'How much does an infidelity investigation cost?',
        answer: 'Costs vary depending on the complexity and duration of the investigation. We offer customized packages to fit different budgets and needs. Contact us for a confidential consultation and detailed pricing information.',
      },
      {
        question: 'Can you investigate digital evidence like texts and emails?',
        answer: "We can guide you on legally obtaining digital evidence and analyze information you have legal access to. However, all digital investigations must comply with privacy laws and regulations. We'll advise you on legal methods during your consultation.",
      },
    ],
  },
  {
    id: 'profiling',
    name: 'Profiling',
    faqs: [
      {
        question: 'What is criminal profiling?',
        answer: 'Criminal profiling is the process of analyzing crime scene evidence, victim information, and behavioral patterns to develop a psychological and demographic profile of an unknown offender. It helps narrow suspect pools and guide investigations.',
      },
      {
        question: 'How accurate is behavioral profiling?',
        answer: 'When conducted by experienced professionals using proven methodologies, behavioral profiling is a valuable investigative tool. While not infallible, it provides actionable insights that significantly aid investigations when combined with other evidence.',
      },
      {
        question: 'Can profiling be used in civil cases?',
        answer: 'Yes, profiling techniques are applicable to many civil matters including custody disputes, workplace investigations, threat assessments, and risk management. The behavioral analysis principles apply across various legal and security contexts.',
      },
      {
        question: 'How long does a profiling assessment take?',
        answer: 'Timeline varies based on case complexity, available information, and the scope of analysis required. Simple profiles may take a few days, while comprehensive assessments for complex cases can take several weeks.',
      },
      {
        question: 'Is profiling evidence admissible in court?',
        answer: "Expert testimony from qualified profilers is often admissible in court proceedings. Admissibility depends on the expert's qualifications, methodology used, and relevance to the case. We provide court-ready reports and testimony when needed.",
      },
      {
        question: 'What information is needed for a profile?',
        answer: 'The more information available, the more accurate the profile. This can include incident reports, communications, witness statements, surveillance footage, social media activity, and any other relevant behavioral evidence.',
      },
      {
        question: 'Do you handle cyberstalking cases?',
        answer: 'Yes, we specialize in cyberstalking and online harassment investigations. We can trace digital communications, identify anonymous harassers, and document patterns of behavior for legal action.',
      },
      {
        question: 'Can you help with workplace threat assessments?',
        answer: 'Absolutely. We provide comprehensive workplace violence threat assessments, evaluating concerning employee behavior and recommending appropriate security measures and interventions.',
      },
      {
        question: 'How confidential is the profiling process?',
        answer: 'We maintain strict confidentiality throughout all investigations and profiling work. Information is shared only with authorized parties, and we comply with all applicable privacy laws and professional standards.',
      },
    ],
  },
  {
    id: 'risk-management',
    name: 'Risk Management',
    faqs: [
      {
        question: 'How would a private investigator assist with risk management?',
        answer: 'If a person or group of people threatens you or your business, private investigators can assess the threat to find out how credible it is and what you can do about it.',
      },
      {
        question: 'What types of threats do you assess?',
        answer: 'We assess actual threats, inherent threats, potential threats, and vulnerability risks. Our comprehensive approach helps identify security gaps before they become problems.',
      },
      {
        question: 'Do you work with businesses or individuals?',
        answer: 'We work with both. Our risk management services are tailored to meet the specific needs of corporations, small businesses, and private individuals facing potential threats.',
      },
    ],
  },
  {
    id: 'consulting',
    name: 'Attorney & Trial Consulting',
    faqs: [
      {
        question: 'Should I hire a private investigator for my civil case?',
        answer: 'Private investigators can be invaluable for civil cases. We have worked on cases with attorneys all across Southern California and have formed business relationships due to our reliability and close rate.',
      },
      {
        question: 'What is trial consulting?',
        answer: 'Trial consulting involves using behavioral science methods to help attorneys present criminal and civil cases more effectively. This includes jury selection, witness preparation, and developing persuasive trial strategies.',
      },
      {
        question: 'What is jury consulting?',
        answer: 'Jury consulting helps attorneys select favorable jurors and understand how potential jurors will respond to case arguments. We use proven tools to predict juror behavior and develop winning trial strategies.',
      },
      {
        question: 'Do you offer mock trial services?',
        answer: 'Yes, we offer mock trial research where we test your case with simulated trials. We watch how mock jurors reach their verdict, so you learn which arguments work best before the actual trial.',
      },
      {
        question: 'Can you help with witness preparation?',
        answer: 'Absolutely. We train your witnesses to speak clearly and confidently at trial and depositions, enhancing the clarity and impact of their testimony.',
      },
    ],
  },
];


export const allFaqs = faqCategories.flatMap((category) =>
  category.faqs.map((faq) => ({ ...faq, category: category.name, categoryId: category.id }))
);
