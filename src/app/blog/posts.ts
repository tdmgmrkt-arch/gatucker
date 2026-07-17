export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'quote'; text: string; author?: string }
  | { type: 'callout'; title: string; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  imageAlt: string;
  keywords: string[];
  excerpt: string;
  content: ContentBlock[];
  internalLinks: { href: string; label: string }[];
  externalLink: { href: string; label: string; publisher: string };
};

export const posts: BlogPost[] = [
  {
    slug: 'how-to-hire-private-investigator-california',
    title: 'How to Hire a Private Investigator in California: The Complete 2026 Guide',
    description:
      'Learn how to hire a licensed private investigator in California. Verify PI licenses, understand costs, service areas, and what to expect from your first consultation.',
    date: '2026-07-15',
    readTime: '8 min read',
    category: 'Hiring a PI',
    image: '/labackscape.webp',
    imageAlt: 'Los Angeles skyline representing California private investigation services',
    keywords: [
      'hire private investigator California',
      'California PI license',
      'private investigator cost',
      'licensed investigator',
      'BSIS California',
    ],
    excerpt:
      'Hiring a private investigator is a serious decision. This complete 2026 guide walks you through California licensing, realistic costs, red flags to avoid, and what to expect at your first consultation.',
    content: [
      {
        type: 'p',
        text: "Hiring a private investigator is not the kind of decision most people make twice in a lifetime. Whether you're facing a custody dispute, suspicious business partner, or a spouse whose story stopped adding up, the choice you make in the first phone call often determines whether the evidence you gather is admissible, useful, or even legal.",
      },
      {
        type: 'p',
        text: "This guide breaks down everything California residents need to know before hiring a PI in 2026 — from license verification to realistic costs to the questions you should ask before signing a retainer. If you'd rather skip straight to a confidential consultation, our [About](/about) page and [Contact](/contact) form are the fastest way to reach us directly.",
      },
      { type: 'h2', text: 'Step 1: Verify the License Before Anything Else' },
      {
        type: 'p',
        text: "In California, every legitimate private investigator must be licensed by the Bureau of Security and Investigative Services (BSIS). An unlicensed operator is a criminal — and any evidence they collect is likely worthless in court. Before you share a single detail about your case, verify the investigator's license number through the [California DCA license verification tool](https://search.dca.ca.gov/) (the state's official lookup for BSIS-issued PI licenses).",
      },
      {
        type: 'p',
        text: "A valid California PI license number starts with PI followed by six digits. Ask for it up front. If the person hesitates, refuses, or offers a photo of a card instead of a number you can verify online, walk away.",
      },
      { type: 'h2', text: "Step 2: Match the PI's Experience to Your Case Type" },
      {
        type: 'p',
        text: "Not every licensed PI handles every case. Some focus almost exclusively on insurance fraud surveillance. Others specialize in corporate due diligence, missing persons, or infidelity work. When cases fall outside a PI's core expertise, the investigation drags, evidence gaps appear, and the client pays for the learning curve.",
      },
      {
        type: 'ul',
        items: [
          'Domestic cases — infidelity, custody, and family disputes require investigators who blend surveillance skill with courtroom-ready documentation. See our [infidelity investigations](/infidelity) and [child custody](/child-custody) pages for more.',
          'Corporate and legal — background checks, asset searches, and executive due diligence require different tools entirely. Our [consulting](/consulting) and [background checks](/background-checks) services cover these needs.',
          'High-profile and sensitive — celebrities, executives, and public figures need a PI who understands discretion beyond a signed NDA. That is exactly what the [Hollywood Fixer](/hollywood-fixer) role was built for.',
        ],
      },
      { type: 'h2', text: 'Step 3: Understand What Private Investigation Actually Costs' },
      {
        type: 'p',
        text: 'The single most common question we get is: "How much does it cost?" Honest answer — it depends on scope, complexity, and how quickly you need answers. In California, most reputable PIs charge between $95 and $250 per hour, plus expenses such as mileage, database access, and equipment. Complex cases involving multiple investigators, extended surveillance, or forensic analysis run higher.',
      },
      {
        type: 'p',
        text: 'Be extremely skeptical of any PI who quotes a flat fee before understanding your case, or who advertises rates that seem far below market. Cheap investigations produce cheap evidence.',
      },
      {
        type: 'callout',
        title: 'What to Ask in Your First Call',
        text: 'What is your license number? How many cases like mine have you handled? What does your typical retainer look like? Will you personally handle the case or subcontract it? What deliverables can I expect at the end?',
      },
      { type: 'h2', text: "Step 4: Know What You're Signing" },
      {
        type: 'p',
        text: 'Every legitimate PI in California uses a written contract. Read it. The contract should spell out scope of work, hourly rate, retainer, billing cadence, expense policy, confidentiality obligations, and how the file will be delivered at the end of the engagement.',
      },
      {
        type: 'p',
        text: 'If a PI wants cash only, refuses a written agreement, or promises outcomes they cannot control ("I guarantee I\'ll catch him"), that is a red flag. Investigations produce evidence — they do not manufacture it.',
      },
      { type: 'h2', text: 'Step 5: Preserve the Chain of Evidence' },
      {
        type: 'p',
        text: 'Evidence is only useful if it holds up in court. That means timestamps, custody logs, unaltered original files, and a report written by someone who understands the rules of admissibility. A great PI thinks about the judge, jury, or opposing attorney from the very first day of surveillance.',
      },
      { type: 'h2', text: 'The Bottom Line' },
      {
        type: 'p',
        text: "Choosing a private investigator is choosing a partner in one of the most sensitive moments of your life. Take the extra ten minutes to verify credentials, ask hard questions, and read the contract. The right PI will welcome every one of those questions. To start a confidential conversation about your case, visit our [request service](/request-service) page or call directly.",
      },
    ],
    internalLinks: [
      { href: '/about', label: 'About G.A. Tucker' },
      { href: '/services', label: 'All Services' },
      { href: '/contact', label: 'Contact' },
      { href: '/request-service', label: 'Request Service' },
    ],
    externalLink: {
      href: 'https://search.dca.ca.gov/',
      label: 'California DCA License Verification (BSIS)',
      publisher: 'California Department of Consumer Affairs',
    },
  },

  {
    slug: 'signs-spouse-cheating-when-to-hire-pi',
    title: '10 Warning Signs Your Spouse Is Cheating — And When to Hire a Private Investigator',
    description:
      'The behavioral, digital, and financial warning signs of infidelity — plus a clear-eyed look at when hiring a licensed private investigator makes sense.',
    date: '2026-06-12',
    readTime: '9 min read',
    category: 'Infidelity',
    image: '/infideliity-hero.webp',
    imageAlt: 'Wedding rings on a table representing a marriage under strain',
    keywords: [
      'signs of cheating spouse',
      'infidelity private investigator',
      'catch a cheating spouse',
      'infidelity investigation California',
      'PI for cheating husband',
    ],
    excerpt:
      "Trust your gut, then verify with facts. Here are the 10 warning signs most commonly reported by clients before they discover an affair — and the point at which a licensed investigator becomes the right move.",
    content: [
      {
        type: 'p',
        text: "Most people who suspect a partner of cheating spend months second-guessing themselves before they say the words out loud. That waiting period is exhausting — and it is often when the most damage happens, both emotionally and legally. This article is not designed to make you jump to conclusions. It's designed to help you tell the difference between paranoia and pattern.",
      },
      { type: 'h2', text: 'The Behavioral Red Flags' },
      {
        type: 'ol',
        items: [
          'Sudden, unexplained change in phone habits. Password changes, phone always face-down, screen tilted away, or a second device you had never seen before.',
          'Schedule shifts that never quite add up. "Working late" becomes a pattern rather than an exception, and details of those late nights stay vague when asked.',
          'A new obsession with appearance. New gym routine, new wardrobe, new fragrance — none of which existed a year ago and none of which you inspired.',
          'Emotional distance that arrived without an argument. Warmth cools, small acknowledgments disappear, and the ordinary rituals of the relationship get quietly retired.',
          'Defensive escalation when asked ordinary questions. Simple check-ins ("How was your day?") get treated as interrogations.',
        ],
      },
      { type: 'h2', text: 'The Digital and Financial Red Flags' },
      {
        type: 'ol',
        items: [
          'Unexplained charges — hotel stays in your own city, restaurants you have never eaten at, cash withdrawals that never turn into purchases.',
          'A new email address, encrypted messaging app, or social media account you were not told about.',
          'Location sharing suddenly disabled or "broken."',
          'Deleted browser history that used to just be there.',
          'A car that comes home with more miles on it than the route to work should produce.',
        ],
      },
      { type: 'h2', text: 'What the Research Says About Trusting Your Gut' },
      {
        type: 'p',
        text: 'Suspicion is not proof — but published research on relational intuition suggests that partners often detect deception long before they consciously admit it. [Psychology Today](https://www.psychologytoday.com/us/basics/deception) has a useful body of work on how deception patterns manifest in long-term relationships. Your subconscious is very good at noticing what your conscious mind is trying to ignore.',
      },
      { type: 'h2', text: 'When to Stop Investigating on Your Own' },
      {
        type: 'p',
        text: "There is a moment in almost every suspected-infidelity case when the person doing amateur surveillance realizes two things simultaneously: they are becoming someone they don't like, and they are gathering evidence in ways that will never hold up in court. Reading a partner's texts, tracking a car without a court order, or logging into an account without permission can violate state and federal law — and can turn a strong case into a mess of inadmissible material.",
      },
      {
        type: 'p',
        text: "A licensed [infidelity investigator](/infidelity) works within the rules that govern surveillance, evidence collection, and reporting. That means what we produce is usable — in a divorce filing, a custody case, or simply in the conversation you need to have to move forward.",
      },
      { type: 'h2', text: 'What a Professional Investigation Actually Looks Like' },
      {
        type: 'ul',
        items: [
          'A confidential intake call where we listen to the pattern you have observed and identify what evidence is realistically obtainable.',
          'A written scope of work that defines what we will investigate, how long, and at what cost.',
          'Legally conducted surveillance — photographs, video, and timestamped notes — combined with public-records research where relevant.',
          'A final report you can hand to an attorney, a therapist, or simply to yourself.',
        ],
      },
      { type: 'h2', text: 'Common Questions Before Someone Calls' },
      {
        type: 'p',
        text: 'Will my partner find out I hired a PI? No — discretion is the entire product. Will I be told the truth even if there is no affair? Yes — clearing a partner is a valid outcome and often a relief. What if I only want to confirm one specific suspicion? We often run focused, short surveillance windows to answer a single question. Our [FAQs](/faqs) page covers more.',
      },
      { type: 'h2', text: 'Making the Decision' },
      {
        type: 'p',
        text: "If you have been reading these warning signs and quietly counting how many apply, you already know why you are here. Waiting rarely produces clarity — evidence does. When you're ready to talk, our [services](/services) page shows the full range of ways we can help.",
      },
    ],
    internalLinks: [
      { href: '/infidelity', label: 'Infidelity Investigations' },
      { href: '/services', label: 'All Services' },
      { href: '/faqs', label: 'FAQs' },
    ],
    externalLink: {
      href: 'https://www.psychologytoday.com/us/basics/deception',
      label: 'The Psychology of Deception',
      publisher: 'Psychology Today',
    },
  },

  {
    slug: 'employment-background-checks-california-employers',
    title: 'Employment Background Checks: What California Employers Need to Know in 2026',
    description:
      'California has some of the strictest background check laws in the country. Here is what employers must do — and must never do — when screening candidates.',
    date: '2026-05-14',
    readTime: '10 min read',
    category: 'Background Checks',
    image: '/background_check_hero_bg.webp',
    imageAlt: 'Employment background check documents being reviewed',
    keywords: [
      'California background check laws',
      'employment background check',
      'FCRA compliance',
      'ban the box California',
      'pre-employment screening',
    ],
    excerpt:
      "California background check laws are strict, and the penalties for getting them wrong keep climbing. Here's the 2026 employer's guide to legal, defensible pre-employment screening.",
    content: [
      {
        type: 'p',
        text: "Hiring the wrong person is expensive. Hiring the wrong person and getting sued for how you screened them is worse. California employers face some of the strictest background check regulations in the country, and the rules keep evolving — most recently around AI-driven screening tools and cannabis-related history.",
      },
      {
        type: 'p',
        text: "This guide covers the current legal landscape and what a professional [background check](/background-checks) engagement looks like when it is done properly.",
      },
      { type: 'h2', text: 'The Federal Baseline: The FCRA' },
      {
        type: 'p',
        text: "The Fair Credit Reporting Act (FCRA) sets the federal floor for how employers can request, use, and act on background information. Before you can pull a consumer report on a candidate, you need clear written consent, a standalone disclosure that is not buried inside another form, and — if you decide not to hire based on the report — you must follow the two-step adverse action process. The [EEOC's guidance on background checks](https://www.eeoc.gov/laws/guidance/background-checks-what-employers-need-know) is required reading for anyone in HR.",
      },
      { type: 'h2', text: 'California-Specific Rules That Trip Up Employers' },
      {
        type: 'h3',
        text: 'Ban the Box (Fair Chance Act)' },
      {
        type: 'p',
        text: "California prohibits employers with five or more employees from asking about criminal history until after a conditional job offer has been made. That means no checkbox on the application, no verbal question during the first interview, and no informal inquiry to a mutual contact.",
      },
      { type: 'h3', text: 'Seven-Year Look-Back Rule' },
      {
        type: 'p',
        text: "Consumer reporting agencies generally cannot report criminal convictions older than seven years to California employers, with narrow exceptions. Arrests that did not result in conviction cannot be reported at any distance.",
      },
      { type: 'h3', text: 'Cannabis Protections' },
      {
        type: 'p',
        text: 'Since 2024, California law protects most employees from adverse action based solely on off-duty cannabis use or on tests detecting non-psychoactive metabolites. Pre-employment drug screening policies that have not been updated are a lawsuit waiting to happen.',
      },
      { type: 'h3', text: 'AI and Automated Decision Tools' },
      {
        type: 'p',
        text: 'California regulators have made clear that algorithmic screening tools used in hiring must meet the same non-discrimination standards as human decision-makers. If your ATS is quietly filtering resumes, you own the results.',
      },
      { type: 'h2', text: 'What a Real Background Investigation Includes' },
      {
        type: 'ul',
        items: [
          'Identity and Social Security number verification',
          'Address history spanning the entire seven-year window',
          'County-level criminal record checks in every jurisdiction the candidate has lived',
          'Federal criminal record search',
          'Sex offender registry',
          'Global sanctions and OFAC lists for financial or trusted positions',
          'Education and license verification',
          'Employment history verification with dates, titles, and reason for departure',
          'Reference interviews conducted properly, not just perfunctorily',
          'Motor vehicle records when the role requires driving',
        ],
      },
      { type: 'h2', text: 'Why an Investigator Does This Differently Than a Database' },
      {
        type: 'p',
        text: 'The $20 online background check that some employers rely on is aggregated data — often stale, incomplete, and mixed with the wrong person. A licensed private investigator conducts primary-source verification at the courthouse, calls the actual former employer, and can explain any discrepancies to your legal team. When the stakes are hiring an executive, a caregiver, or someone with fiduciary responsibility, the difference matters.',
      },
      { type: 'h2', text: 'Common Employer Mistakes We See' },
      {
        type: 'ol',
        items: [
          'Combining the FCRA disclosure with the application itself.',
          'Skipping the pre-adverse-action letter and jumping straight to a rejection.',
          'Using a canned "consumer report" on executive hires where a full investigation was warranted.',
          'Asking references leading questions that skew what they say.',
          'Failing to document why a hiring decision was made.',
        ],
      },
      { type: 'h2', text: 'When to Bring in a Professional' },
      {
        type: 'p',
        text: 'For most rank-and-file hires, a compliant automated background report is enough. For executives, sensitive positions, roles with access to money or minors, or any hire where the wrong decision could threaten the business — a professional investigator is the correct choice. That is where our [consulting](/consulting) and background check services fit.',
      },
      { type: 'h2', text: 'The Cost of Getting It Wrong' },
      {
        type: 'p',
        text: 'California FCRA class actions routinely settle in the seven and eight figures. A single non-compliant disclosure form, used across a hundred hires, is enough to fund a lawsuit. The good news: the fix is procedural, and most of the risk is eliminated with a proper program. Start with a compliance review before your next hiring cycle.',
      },
    ],
    internalLinks: [
      { href: '/background-checks', label: 'Background Checks' },
      { href: '/consulting', label: 'Investigative Consulting' },
      { href: '/services', label: 'All Services' },
    ],
    externalLink: {
      href: 'https://www.eeoc.gov/laws/guidance/background-checks-what-employers-need-know',
      label: 'EEOC Background Check Guidance',
      publisher: 'U.S. Equal Employment Opportunity Commission',
    },
  },

  {
    slug: 'child-custody-investigations-evidence-wins-cases',
    title: 'Child Custody Investigations: How the Right Evidence Wins Cases',
    description:
      'Family court runs on evidence, not accusations. Here is how a private investigator builds a defensible custody case that protects children and holds up under scrutiny.',
    date: '2026-04-10',
    readTime: '9 min read',
    category: 'Child Custody',
    image: '/child-custody-hero.webp',
    imageAlt: 'Parent and child holding hands representing custody care',
    keywords: [
      'child custody investigation',
      'custody private investigator',
      'family court evidence',
      'parenting time violation',
      'child endangerment investigation',
    ],
    excerpt:
      "Family court judges make custody decisions based on documented facts — not on who talks the loudest. Here's how a licensed investigator builds a case that actually protects the child.",
    content: [
      {
        type: 'p',
        text: "Custody battles are among the hardest cases we take. The stakes are a child's safety, stability, and relationship with both parents — and the emotional temperature is almost always higher than in any other case type. Parents come to us because they know accusations without evidence are worthless in family court, and they need someone to document what is actually happening on the other parent's watch.",
      },
      { type: 'h2', text: 'What Family Court Actually Weighs' },
      {
        type: 'p',
        text: 'California family courts apply the "best interest of the child" standard, and judges consider a wide range of factors: safety, stability, each parent\'s ability to provide care, and any history of substance abuse, domestic violence, or neglect. The [American Bar Association\'s Section on Family Law](https://www.americanbar.org/groups/family_law/resources/) publishes ongoing guidance on how these factors are evaluated.',
      },
      {
        type: 'p',
        text: "Judges are also acutely aware of parents who fabricate or exaggerate allegations. This is why documented, professionally gathered evidence carries so much more weight than a parent's word — and why unprofessionally gathered evidence can backfire badly.",
      },
      { type: 'h2', text: 'What a Custody Investigation Documents' },
      {
        type: 'ul',
        items: [
          "Compliance with the existing custody order — pickup and drop-off times, who actually has physical care during the other parent's time, and whether the child is being properly supervised.",
          "Substance use, unsafe drivers behind the wheel with the child, or unsafe living conditions.",
          "Unauthorized adults living in or spending overnight time in the home.",
          "Signs of parental neglect — a child left alone, missed medical appointments, or unaddressed hygiene issues.",
          "Alienating behavior — coaching the child, disparaging the other parent, or interfering with communication.",
        ],
      },
      { type: 'h2', text: 'What a Custody Investigation Does Not Do' },
      {
        type: 'p',
        text: 'We do not manufacture evidence. We do not follow children. We do not use methods that would embarrass a judge or invalidate the entire report. And we do not tell parents what they want to hear — if the other parent is providing safe, appropriate care, that is what the report will say, and that answer often ends litigation instead of fueling it.',
      },
      { type: 'h2', text: 'How Evidence Gets Built' },
      {
        type: 'ol',
        items: [
          'Case intake — a confidential conversation to understand the current custody arrangement, the concerns, and the target dates for any upcoming hearing.',
          'Scope agreement — a written plan that identifies the questions to be answered, the surveillance windows, and the deliverables.',
          "Fieldwork — discreet, documented surveillance conducted from public vantage points with time-stamped video and photography.",
          "Corroboration — public-records research, witness identification where legally appropriate, and cross-verification of what the field documents.",
          "Final report — a chronological, factual narrative your family law attorney can attach to a declaration or use in cross-examination.",
        ],
      },
      { type: 'h2', text: 'Working With Your Family Law Attorney' },
      {
        type: 'p',
        text: 'The strongest custody investigations happen when the investigator, the client, and the family law attorney are aligned from day one. Attorneys tell us what evidentiary gaps they need filled. We tell attorneys what is realistically obtainable. Clients get an investigation that actually maps to what wins in court, rather than a stack of surveillance video with no legal purpose.',
      },
      { type: 'h2', text: 'When to Move Fast' },
      {
        type: 'p',
        text: 'If you believe your child is in immediate danger, call law enforcement first. A PI investigation is not a substitute for emergency intervention. Where we make the difference is on the medium-term picture — the pattern of behavior a judge will consider when modifying custody, awarding sole physical custody, or imposing supervised visitation.',
      },
      { type: 'h2', text: 'Related Reading' },
      {
        type: 'p',
        text: 'For clients whose custody concerns overlap with suspected infidelity or domestic misconduct, see also our page on [infidelity investigations](/infidelity). For a broader overview of how we work, visit [our services](/services). To speak with our office confidentially, use the [contact](/contact) form.',
      },
    ],
    internalLinks: [
      { href: '/child-custody', label: 'Child Custody Investigations' },
      { href: '/infidelity', label: 'Infidelity Investigations' },
      { href: '/services', label: 'All Services' },
      { href: '/contact', label: 'Contact' },
    ],
    externalLink: {
      href: 'https://www.americanbar.org/groups/family_law/resources/',
      label: 'ABA Family Law Resources',
      publisher: 'American Bar Association',
    },
  },

  {
    slug: 'missing-persons-first-48-hours',
    title: 'The First 48 Hours: What to Do When a Loved One Goes Missing',
    description:
      'The first two days after a disappearance are the most important. Here is what to do, who to call, and how a private investigator complements law enforcement.',
    date: '2026-03-18',
    readTime: '8 min read',
    category: 'Missing Persons',
    image: '/missing-persons-hero.webp',
    imageAlt: 'Person searching down a long road at dusk',
    keywords: [
      'missing person first 48 hours',
      'missing person private investigator',
      'find missing family member',
      'runaway teen investigation',
      'missing adult California',
    ],
    excerpt:
      "The first 48 hours after someone goes missing set the trajectory for everything that follows. Here is a calm, factual playbook — and where a licensed investigator adds real value.",
    content: [
      {
        type: 'p',
        text: "When someone you love goes missing, the first hours feel like a blur — but they are the most important hours of the entire search. Digital trails are fresh, witnesses' memories are sharp, surveillance footage has not yet been overwritten, and the person is usually still within a predictable radius. What you do in the first 48 hours largely determines what is possible over the next 48 days.",
      },
      { type: 'h2', text: 'Myth: You Have to Wait 24 Hours to File a Report' },
      {
        type: 'p',
        text: "This is one of the most damaging myths in circulation. You do not have to wait — for anyone. If a person is missing and it is out of character, call your local police department immediately and file a missing persons report. Law enforcement will begin an initial welfare check and enter the person into national databases. The [National Missing and Unidentified Persons System (NamUs)](https://www.namus.gov/) provides the framework used across the country.",
      },
      { type: 'h2', text: 'Step-by-Step: The First 48 Hours' },
      {
        type: 'ol',
        items: [
          "Call the police and file a report. Push back if anyone tells you to wait.",
          "Write down everything you know while it's fresh — last seen, what they were wearing, phone number, vehicle, credit cards, medical conditions, and mental state.",
          "Check phone and device location services if you have legitimate access. Do not compromise your own legal standing.",
          "Contact hospitals within a reasonable radius, then jail systems, then homeless shelters.",
          "Reach out to close friends, ex-partners, coworkers, and anyone the person had contact with in the last 72 hours.",
          "Preserve digital access — do not change email or social passwords, do not delete anything, and screenshot recent messages.",
          "Post a factual missing persons flyer in the geographic area of last contact.",
          "Consider hiring a licensed [missing persons investigator](/missing-persons) if the police response is limited or if the case is not being treated with the urgency you believe it warrants.",
        ],
      },
      { type: 'h2', text: 'What Private Investigators Do That Police Often Cannot' },
      {
        type: 'p',
        text: 'Police resources are stretched, and cases involving adults who "chose" to leave rarely receive intensive follow-up. A private investigator brings capacity where the badge cannot — spending unlimited hours on a single case, coordinating across state lines without jurisdictional friction, and using licensed database access that is not available to the general public.',
      },
      {
        type: 'ul',
        items: [
          'Skip tracing across financial, telecom, and public-records data',
          'Interviewing witnesses that police did not have the bandwidth to reach',
          'Coordinating with law enforcement in other states or countries',
          'Retrieving relevant surveillance footage before it is overwritten (usually 7 to 30 days)',
          'Reunification support once the person is located',
        ],
      },
      { type: 'h2', text: 'The Cases We See Most' },
      {
        type: 'ul',
        items: [
          "Adult family members who cut off contact — often after mental health crises, addiction relapse, or coercive relationships.",
          "Runaway teens whose location can often be recovered from digital fingerprints within days.",
          "Missing biological parents or siblings — decades-old cases where modern databases and DNA registries change the equation.",
          "Debtors, defendants, and witnesses who have skipped a required legal appearance.",
        ],
      },
      { type: 'h2', text: 'When the Person Is Found' },
      {
        type: 'p',
        text: "Not every reunion is a happy one. Some adults choose to remain out of contact once they are located, and a professional investigator will respect that boundary and communicate the outcome carefully. The goal is not to force someone back — it is to confirm they are alive, safe, and reachable if they want to be.",
      },
      { type: 'h2', text: 'A Final Note' },
      {
        type: 'p',
        text: "If you are reading this because someone in your life is missing right now, take a breath. Make the calls in the order above. If you need help, our office answers 24 hours a day — visit our [contact](/contact) page.",
      },
    ],
    internalLinks: [
      { href: '/missing-persons', label: 'Missing Persons Investigations' },
      { href: '/contact', label: 'Contact' },
    ],
    externalLink: {
      href: 'https://www.namus.gov/',
      label: 'National Missing and Unidentified Persons System',
      publisher: 'U.S. Department of Justice',
    },
  },

  {
    slug: 'surveillance-and-the-law-california',
    title: 'Surveillance and the Law: How Private Investigators Stay Compliant in California',
    description:
      'What licensed PIs can and cannot legally do while conducting surveillance in California, including recording, GPS tracking, trespass, and evidence admissibility.',
    date: '2026-02-20',
    readTime: '11 min read',
    category: 'Investigations',
    image: '/dark-alley.webp',
    imageAlt: 'Dark alley representing discreet surveillance work',
    keywords: [
      'private investigator surveillance law',
      'California recording law',
      'GPS tracking legal',
      'PI evidence admissibility',
      'two-party consent California',
    ],
    excerpt:
      "The line between admissible surveillance and a lawsuit is drawn by statute. Here is what licensed California investigators can and cannot legally do — and why that matters for your case.",
    content: [
      {
        type: 'p',
        text: 'Surveillance is what most people think a PI does — and it is, in fact, the backbone of many investigations. But the legal landscape around surveillance is narrower and more technical than it looks on television. Get it wrong and the evidence is inadmissible, the client is exposed, and the investigator loses their license. Get it right and the same evidence becomes decisive in family court, civil litigation, or criminal defense.',
      },
      { type: 'h2', text: 'The Basic Rule: Public Space Is Fair Game' },
      {
        type: 'p',
        text: 'A licensed PI can lawfully observe and photograph any person in a public place where that person has no reasonable expectation of privacy. That includes streets, parking lots, public parks, restaurants, and the exterior of most commercial buildings. The [Cornell Legal Information Institute](https://www.law.cornell.edu/wex/expectation_of_privacy) has a plain-language explanation of how courts define the expectation of privacy.',
      },
      { type: 'h2', text: 'Where the Line Moves: California-Specific Rules' },
      { type: 'h3', text: 'Two-Party Consent for Audio Recording' },
      {
        type: 'p',
        text: "California is a two-party consent state. Under Penal Code Section 632, you generally cannot record a confidential communication without the consent of all parties. That means an investigator who captures video of a subject in public may be prohibited from also capturing the audio of a confidential conversation happening at the same table. Getting this wrong is a criminal offense — not merely a civil issue.",
      },
      { type: 'h3', text: 'GPS Tracking' },
      {
        type: 'p',
        text: "California Vehicle Code Section 637.7 prohibits attaching an electronic tracking device to a vehicle without the consent of the registered owner. There are narrow exceptions — most notably for the vehicle's registered owner tracking their own property — but a PI hired to track a spouse's car generally cannot attach a GPS device without the vehicle owner's permission.",
      },
      { type: 'h3', text: 'Trespass and Curtilage' },
      {
        type: 'p',
        text: 'Investigators cannot enter private property to conduct surveillance without permission. The curtilage — the fenced or otherwise-protected area immediately surrounding a home — is entitled to the same privacy protection as the interior. A photograph of the front door from the sidewalk is legal; a photograph of the same door from three feet inside the property line is not.',
      },
      { type: 'h3', text: 'Peeping and Video Voyeurism' },
      {
        type: 'p',
        text: 'Any recording that captures a person in a state of undress, in a place where they have a reasonable expectation of privacy, is a serious criminal offense. This applies to windows, hotel rooms, changing areas, and any interior space visible only through invasive means.',
      },
      { type: 'h2', text: 'Why the Rules Matter for Your Case' },
      {
        type: 'p',
        text: 'Evidence collected illegally is not just useless — it can poison the entire case. Judges routinely exclude improperly obtained evidence and, in some cases, the offending party is exposed to counterclaims for invasion of privacy or unlawful recording. A licensed investigator who knows the rules keeps you on the right side of the courthouse.',
      },
      { type: 'h2', text: 'What Compliant Surveillance Looks Like in Practice' },
      {
        type: 'ul',
        items: [
          'Video captured from public streets, sidewalks, or lawful vantage points',
          "Photographs of subjects in public spaces without their consent (public activity is not private)",
          "Public-records research — court files, business filings, real property records, licensing agencies",
          "Publicly visible social media activity",
          "Consensual interviews of witnesses who agree to speak",
          "Corroboration between physical surveillance and open-source intelligence",
        ],
      },
      { type: 'h2', text: 'What a Reputable PI Will Refuse to Do' },
      {
        type: 'ol',
        items: [
          "Attach a GPS device to a vehicle they do not own or have permission to track",
          "Break into an email, social media, or cloud account",
          "Record confidential audio without all-party consent",
          "Enter private property, including backyards, hallways of apartment buildings, or hotel rooms",
          "Impersonate a law enforcement officer or government agent",
        ],
      },
      { type: 'h2', text: 'Why Working With a Licensed PI Protects You' },
      {
        type: 'p',
        text: "A client is often the person most exposed if surveillance goes wrong. Amateur efforts, DIY tracking devices, or a friend-of-a-friend who \"used to be a cop\" can create liability that dwarfs the value of any evidence obtained. Working with a licensed investigator means the evidence is defensible and the method is not the story. See our [guidelines](/guidelines) and [investigations](/investigations) pages for more on how we structure engagements.",
      },
      { type: 'h2', text: 'Bottom Line' },
      {
        type: 'p',
        text: 'Surveillance done right wins cases. Surveillance done wrong loses cases and creates new ones. The difference is a licensed professional who knows exactly where the legal lines are and works comfortably within them.',
      },
    ],
    internalLinks: [
      { href: '/investigations', label: 'General Investigations' },
      { href: '/guidelines', label: 'Guidelines' },
      { href: '/services', label: 'All Services' },
    ],
    externalLink: {
      href: 'https://www.law.cornell.edu/wex/expectation_of_privacy',
      label: 'Expectation of Privacy — Legal Information Institute',
      publisher: 'Cornell Law School',
    },
  },

  {
    slug: 'executive-protection-risk-management-guide',
    title: 'Executive Protection & Risk Management: A Guide for High-Net-Worth Families',
    description:
      'How high-net-worth individuals and executives use private investigators for personal risk management, threat assessment, and family security planning.',
    date: '2026-01-15',
    readTime: '9 min read',
    category: 'Risk Management',
    image: '/risk-management-hero.webp',
    imageAlt: 'Executive protection and risk management planning session',
    keywords: [
      'executive protection California',
      'high net worth security',
      'threat assessment private investigator',
      'family security planning',
      'personal risk management',
    ],
    excerpt:
      "Wealth, visibility, and business ownership create risks most families are never taught to manage. Here is how licensed investigators support executive protection and family security planning.",
    content: [
      {
        type: 'p',
        text: 'Financial success creates a paradox. The same visibility and access that generated the wealth also expose the family to threats most people never think about: stalkers, obsessive fans, extortion attempts, disgruntled former employees, custody-related interference, and increasingly, sophisticated online harassment campaigns. Executive protection has quietly become a category of private investigation as important as anything on the traditional PI menu.',
      },
      { type: 'h2', text: 'Who Actually Needs This' },
      {
        type: 'ul',
        items: [
          'Founders and CEOs of visible businesses',
          'Family offices managing generational wealth',
          'Entertainment and sports professionals',
          'Physicians, attorneys, and other professionals who make public decisions',
          'Politically active donors and public commentators',
          'Any family after a triggering incident — a threatening letter, a stalker, a workplace violence event',
        ],
      },
      { type: 'h2', text: 'What Risk Management Actually Includes' },
      { type: 'h3', text: 'Threat Assessment' },
      {
        type: 'p',
        text: 'The first product we deliver is not bodyguards — it is clarity. A threat assessment identifies who has a documented reason to target the family, whether that reason has escalated in recent months, and what patterns of behavior the current subjects are showing. Threat assessment is a discipline with published methodologies through organizations like [ASIS International](https://www.asisonline.org/) and the [Association of Threat Assessment Professionals](https://atapworldwide.org/).',
      },
      { type: 'h3', text: 'Digital Exposure Audit' },
      {
        type: 'p',
        text: 'How much of your family is discoverable online? Home address on a property record. Kids\' school listed in a foundation press release. Vehicle plates visible in an interview. Daily gym routine visible on a coach\'s social media. We identify what a determined adversary would find with a weekend of research and then reduce that surface area.',
      },
      { type: 'h3', text: 'Domestic Staff Vetting' },
      {
        type: 'p',
        text: 'The people with keys to your home should meet the same standard as the people with keys to your company. Housekeepers, nannies, drivers, personal trainers, and contractors all warrant proper vetting. See our [background checks](/background-checks) service for the standard we apply.',
      },
      { type: 'h3', text: 'Travel Advance Work' },
      {
        type: 'p',
        text: 'Before a family travels — especially internationally — advance work reduces the number of variables in play: route, accommodations, medical resources, local security contacts, and any known local threat patterns. Most of what protective work costs is preventing incidents, not responding to them.',
      },
      { type: 'h3', text: 'Litigation Support' },
      {
        type: 'p',
        text: "Many risk engagements begin because litigation is coming — divorce, business dispute, or estate contest. Our [consulting](/consulting) work supports counsel on the investigative side of those cases while our [risk management](/risk-management) team addresses the security side.",
      },
      { type: 'h2', text: 'What This Is Not' },
      {
        type: 'p',
        text: 'Risk management is not paranoia and it is not surveillance of your own household. A good engagement makes life quieter, not louder. We are not there to control the family — we are there to identify what should worry them and take it off the list.',
      },
      { type: 'h2', text: 'The First Conversation' },
      {
        type: 'p',
        text: 'Almost every serious engagement begins with a single confidential meeting: no commitment, no assumptions, just a structured conversation about what has been happening, what feels off, and what the family wants to change. From that conversation comes a written recommendation — sometimes as small as three items to address, sometimes an ongoing engagement.',
      },
      { type: 'h2', text: 'Working With Your Existing Team' },
      {
        type: 'p',
        text: 'Most high-net-worth families already have a trusted attorney, a financial advisor, and possibly an existing security consultant. We work alongside — not around — those relationships. The strongest security programs are the ones where the whole team knows the whole picture.',
      },
      { type: 'h2', text: 'A Word on Confidentiality' },
      {
        type: 'p',
        text: 'Everything in an engagement of this type stays inside our office. Client rosters are not shared, cases are not discussed at industry events, and matter names are kept off written communication whenever practical. Discretion is not a feature — it is the entire product.',
      },
    ],
    internalLinks: [
      { href: '/risk-management', label: 'Risk Management' },
      { href: '/consulting', label: 'Consulting' },
      { href: '/background-checks', label: 'Background Checks' },
      { href: '/services', label: 'All Services' },
    ],
    externalLink: {
      href: 'https://www.asisonline.org/',
      label: 'ASIS International — Security Management Standards',
      publisher: 'ASIS International',
    },
  },

  {
    slug: 'hollywood-fixer-discreet-crisis-management',
    title: 'The Hollywood Fixer: Discreet Crisis Management for Public Figures',
    description:
      'What a modern Hollywood fixer actually does — and how licensed investigators help public figures manage sensitive situations before they become headlines.',
    date: '2025-12-11',
    readTime: '8 min read',
    category: 'Hollywood Fixer',
    image: '/hollywood_fixer_background.webp',
    imageAlt: 'Dimly lit Hollywood boulevard representing discreet celebrity work',
    keywords: [
      'Hollywood fixer',
      'celebrity private investigator',
      'crisis management public figures',
      'reputation protection',
      'discreet investigator Los Angeles',
    ],
    excerpt:
      "The fixer of legend is largely fiction. The modern reality is a licensed investigator, a good attorney, and a plan that keeps small crises from becoming public ones.",
    content: [
      {
        type: 'p',
        text: 'The Hollywood fixer of legend — the phone-book-thick contact list, the black bag full of cash, the ability to make problems vanish overnight — is largely a product of studio-era mythology and pulp fiction. The modern reality is quieter, more legal, and considerably more effective. It is a licensed investigator, a coordinated attorney, and a plan that keeps small crises from becoming public ones.',
      },
      { type: 'h2', text: 'What "Fixing" Actually Means Today' },
      {
        type: 'p',
        text: 'A modern fixer engagement almost always begins with a phone call from an entertainment attorney, a manager, or the principal themselves. The situation is not usually the dramatic one you would expect — it is more often a family member entangled with a bad actor, a stalker becoming more persistent, an ex-employee threatening a leak, or a private matter that needs to be handled before it reaches a tabloid.',
      },
      {
        type: 'p',
        text: "The work is fact-finding first. Who exactly is this person? What is their history? What are they actually threatening, and do they have the means to follow through? Only after the facts are on the table can strategy be built. A useful primer on how the modern crisis-management industry operates is [The New York Times' coverage of contemporary reputation and crisis firms](https://www.nytimes.com/section/business).",
      },
      { type: 'h2', text: 'The Kinds of Situations We See' },
      {
        type: 'ul',
        items: [
          'Extortion threats — someone claiming to have compromising material and asking for money to withhold it',
          'Stalking and obsessive fans — often the same handful of individuals across multiple public figures',
          'Family crises — an adult child in trouble, a spouse acting erratically, an aging parent being exploited by a caregiver',
          "Employee and vendor disputes with potential to become public",
          "Litigation risk — a threatened lawsuit that needs the underlying facts investigated quietly before anything is filed",
          "Location and travel exposure — press or paparazzi tracking a family in ways that concern them",
        ],
      },
      { type: 'h2', text: 'What the Work Looks Like' },
      { type: 'h3', text: 'Fact-Finding' },
      {
        type: 'p',
        text: 'Every fixer engagement starts with an intelligence workup. Who is the counterparty? What is their pattern? Have they done this to other public figures? What public records exist? What does their digital footprint show? Facts change strategy — often dramatically.',
      },
      { type: 'h3', text: 'Coordination With Counsel' },
      {
        type: 'p',
        text: "We are almost always working alongside an entertainment attorney or specialist litigator. The attorney owns the legal strategy; we own the investigative and operational side. The client sees one coordinated response.",
      },
      { type: 'h3', text: 'De-escalation Where Possible' },
      {
        type: 'p',
        text: "Many situations resolve without escalation once the counterparty realizes the target is represented, the facts are documented, and the response will be professional rather than emotional. That is the ideal outcome — and it is the most common one.",
      },
      { type: 'h3', text: 'Response Planning Where Necessary' },
      {
        type: 'p',
        text: 'When de-escalation is not the path, a coordinated response follows: cease-and-desist, restraining order, criminal referral, or in serious cases a full civil action. The investigator provides the underlying documentation the legal steps depend on. See our [Hollywood Fixer](/hollywood-fixer) service page for the full scope.',
      },
      { type: 'h2', text: 'What This Is Not' },
      {
        type: 'p',
        text: 'A modern fixer does not bury evidence of a crime, obstruct justice, threaten counterparties, or engage in any of the "midnight solutions" of movie mythology. Any investigator who suggests otherwise is either lying about their capabilities or committing crimes on the client\'s behalf. Both are catastrophic exposure for the principal.',
      },
      { type: 'h2', text: "The Discretion Standard" },
      {
        type: 'p',
        text: 'The single non-negotiable feature of this work is confidentiality. Client identities are not disclosed. Case files are not referenced in written communication. Vendors are compartmentalized. Nothing about a completed engagement is ever discussed anywhere outside the room in which it was originally briefed.',
      },
      { type: 'h2', text: 'How Engagements Begin' },
      {
        type: 'p',
        text: 'A confidential introductory call — usually from an attorney, manager, or trusted intermediary — is the standard first step. From there we assess whether we are the right fit for the situation and, if so, what a proportionate response looks like. Related services include [risk management](/risk-management) and [consulting](/consulting).',
      },
    ],
    internalLinks: [
      { href: '/hollywood-fixer', label: 'Hollywood Fixer' },
      { href: '/risk-management', label: 'Risk Management' },
      { href: '/consulting', label: 'Consulting' },
    ],
    externalLink: {
      href: 'https://www.nytimes.com/section/business',
      label: 'Coverage of the Crisis Management Industry',
      publisher: 'The New York Times',
    },
  },

  {
    slug: 'digital-forensics-modern-pi-online-evidence',
    title: 'Digital Forensics: How Modern Private Investigators Uncover Online Evidence',
    description:
      'From metadata analysis to open-source intelligence, here is how licensed private investigators recover, preserve, and present digital evidence in 2026.',
    date: '2025-11-16',
    readTime: '10 min read',
    category: 'Digital Forensics',
    image: '/invetigating-services-hero.webp',
    imageAlt: 'Private investigator reviewing digital evidence and case files',
    keywords: [
      'digital forensics private investigator',
      'online evidence collection',
      'OSINT investigator',
      'social media investigation',
      'email metadata analysis',
    ],
    excerpt:
      "The evidence trail moved online a long time ago. Here's how licensed investigators recover, preserve, and present digital evidence that survives cross-examination.",
    content: [
      {
        type: 'p',
        text: "Twenty years ago, a private investigator's most important tools were a camera, a notepad, and a car with tinted windows. Those tools still matter — but the majority of the evidence in a modern case now lives on a phone, a laptop, or a cloud server. A PI who cannot work in that environment is missing most of the picture.",
      },
      { type: 'h2', text: 'What Digital Forensics Actually Covers' },
      {
        type: 'p',
        text: 'The term "digital forensics" is broad. In practice, private investigators work across several overlapping disciplines: open-source intelligence (OSINT), device forensics, metadata analysis, geolocation reconstruction, and social media investigation. The [National Institute of Standards and Technology](https://www.nist.gov/itl/ssd/software-quality-group/computer-forensics-tool-testing-program-cftt) publishes the standards that legitimate practitioners work to.',
      },
      { type: 'h2', text: 'Open-Source Intelligence (OSINT)' },
      {
        type: 'p',
        text: "The volume of information people voluntarily publish about themselves is staggering. Property records, court filings, business registrations, licensing databases, campaign contributions, social media, professional profiles, and archived versions of long-deleted pages — most of what a competent OSINT investigator recovers has always been available to anyone with the skill to find it.",
      },
      { type: 'p', text: 'What we look for in a typical workup:' },
      {
        type: 'ul',
        items: [
          "Aliases, previous addresses, and family associations",
          "Business ownership and affiliated entities",
          "Litigation history in state and federal court",
          "Real property owned, sold, or transferred",
          "Professional licenses — active, expired, or revoked",
          "Digital footprint across public social platforms",
          "Historical pages archived by services like the Wayback Machine",
        ],
      },
      { type: 'h2', text: 'Social Media Investigation' },
      {
        type: 'p',
        text: 'Social media is often the single most productive source in modern investigations. People confess to affairs on public Instagram stories, brag about undisclosed income on LinkedIn, contradict deposition testimony on Facebook, and reveal locations through geotagged photos. The evidentiary challenge is capture and preservation — a screenshot alone is often insufficient, and content can vanish before it is properly documented.',
      },
      { type: 'h2', text: 'Metadata: The Story Inside the File' },
      {
        type: 'p',
        text: 'Every photograph, document, and email carries metadata — hidden information about when, where, and by whom it was created. In the right case, metadata proves that a message was sent from a specific device, a photo was taken at a specific location, or a document was modified after it was purportedly finalized. Metadata analysis is often the single most decisive piece of a digital case.',
      },
      { type: 'h2', text: 'Device Forensics' },
      {
        type: 'p',
        text: "Deleted does not mean gone. When a device is properly imaged before it is used further, deleted messages, photos, browsing history, and application data can often be recovered. Device forensics requires the device be legally in the possession of the person requesting the exam — a client's own laptop, a company-owned phone belonging to a departed employee, or a device produced through legal discovery. We do not, and cannot, forensically examine devices we have no lawful access to.",
      },
      { type: 'h2', text: 'Common Case Types That Rely on Digital Evidence' },
      {
        type: 'ol',
        items: [
          'Infidelity — messaging patterns, dating app activity, geotagged photos, and financial records that establish a pattern. See our [infidelity](/infidelity) page.',
          'Business fraud — communications between conspirators, altered documents, and asset concealment. See our [background checks](/background-checks) service.',
          "Custody disputes — a co-parent's public behavior, alcohol or drug use, or new partners the court needs to know about",
          "Employment matters — theft of intellectual property, off-book competition, or harassment claims",
          "Missing persons — the digital breadcrumbs that reveal where someone went",
        ],
      },
      { type: 'h2', text: 'Preserving Evidence That Actually Holds Up' },
      {
        type: 'p',
        text: 'A screenshot is easy to fabricate. A properly documented capture — with a hash, a timestamp, a chain-of-custody log, and often a certified capture tool — is much harder to challenge. When digital evidence matters to a case, it is worth having a professional handle collection from the start, rather than trying to authenticate homemade screenshots later.',
      },
      { type: 'h2', text: 'What We Will Not Do' },
      {
        type: 'ul',
        items: [
          "Access an account we do not have lawful authority to access",
          "Bypass any authentication mechanism",
          "Retain material obtained in violation of privacy law",
          "Analyze a device we cannot verify was lawfully obtained",
        ],
      },
      { type: 'h2', text: 'Combining Digital and Physical Investigation' },
      {
        type: 'p',
        text: 'The strongest cases pair digital and physical evidence. A geotagged photo places a subject at a location; surveillance confirms who else was there. A financial record shows the charge; testimony corroborates the meeting. Digital forensics is a powerful tool, but it is at its best when combined with old-fashioned investigative work. Our [consulting](/consulting) team specializes in exactly this kind of integrated case.',
      },
    ],
    internalLinks: [
      { href: '/investigations', label: 'General Investigations' },
      { href: '/background-checks', label: 'Background Checks' },
      { href: '/consulting', label: 'Consulting' },
      { href: '/infidelity', label: 'Infidelity Investigations' },
    ],
    externalLink: {
      href: 'https://www.nist.gov/itl/ssd/software-quality-group/computer-forensics-tool-testing-program-cftt',
      label: 'NIST Computer Forensics Tool Testing Program',
      publisher: 'National Institute of Standards and Technology',
    },
  },

  {
    slug: 'criminal-profiling-investigative-science',
    title: 'Criminal Profiling Explained: The Science Behind the Investigation',
    description:
      'What criminal profiling actually is — and is not — and how behavioral analysis supports investigations of unknown or unidentified subjects.',
    date: '2025-10-14',
    readTime: '9 min read',
    category: 'Profiling',
    image: '/profilin-hero.webp',
    imageAlt: 'Investigative case board with profiling analysis',
    keywords: [
      'criminal profiling',
      'behavioral analysis investigator',
      'FBI profiling',
      'investigative psychology',
      'unknown subject investigation',
    ],
    excerpt:
      "Profiling is more Sherlock than psychic. Here is a grounded look at what behavioral analysis actually contributes to an investigation — and where its limits are.",
    content: [
      {
        type: 'p',
        text: "Popular culture has done criminal profiling few favors. On screen it looks like a mind-reader in a leather jacket, staring at a chalkboard until the killer's name simply arrives. In real practice it is a disciplined analytical method — closer to how a good detective narrows a suspect pool than to how a psychic finds a name.",
      },
      { type: 'h2', text: 'What Profiling Actually Is' },
      {
        type: 'p',
        text: 'Criminal profiling — more properly called behavioral analysis or investigative psychology — is the process of inferring likely characteristics of an unknown offender from the details of the offense itself. It draws on decades of research into how different personality types plan, execute, and react to specific kinds of behavior. The [FBI\'s Behavioral Analysis Unit](https://www.fbi.gov/services/cirg/ncavc) is the origin point of most of the modern methodology.',
      },
      { type: 'h2', text: 'What Profiling Is Not' },
      {
        type: 'p',
        text: 'It is not a name. It is not a guarantee. It is not a substitute for evidence. And it is almost never useful when the offender is already identified — profiling narrows the pool, it does not point a finger. Any practitioner who claims otherwise is overselling.',
      },
      { type: 'h2', text: 'Where Profiling Fits Into Private Investigation' },
      {
        type: 'p',
        text: 'Private investigators use behavioral analysis in a narrower set of circumstances than law enforcement, but the applications are real:',
      },
      {
        type: 'ul',
        items: [
          "Stalking cases — assessing the escalation trajectory and probable identity category of an unknown stalker",
          "Threatening communications — analyzing letters, emails, and voicemail for authorship indicators and threat assessment",
          "Workplace incidents — identifying likely suspects among a defined internal pool",
          "Corporate theft or leaks — narrowing a suspect list by matching known behavior to observed personality patterns",
          "Cold family cases — reassessing decades-old disappearances or unexplained deaths with modern methodology",
        ],
      },
      { type: 'h2', text: 'How a Behavioral Analysis Actually Gets Done' },
      { type: 'h3', text: 'Data Intake' },
      {
        type: 'p',
        text: 'Everything begins with the case file. Reports, photographs, communications, timelines, victim statements, and any physical or digital evidence. The quality of the analysis is bounded by the quality of the intake.',
      },
      { type: 'h3', text: 'Victimology' },
      {
        type: 'p',
        text: "Understanding the victim — routine, relationships, digital footprint, and vulnerabilities — is the fastest way to understand who selected them. This is why victimology, not offender profiling, is often the first product delivered.",
      },
      { type: 'h3', text: 'Crime Scene Reconstruction' },
      {
        type: 'p',
        text: 'What happened, in what order, and what does the sequence say about planning? Was the offense organized or disorganized? Did the subject bring tools with them or improvise? Did they linger or leave immediately?',
      },
      { type: 'h3', text: 'Behavioral Inference' },
      {
        type: 'p',
        text: 'From the above, the analyst infers a set of characteristics likely to be true of the offender: age range, gender, familiarity with the victim, cognitive style, criminal history category, and likely motivation.',
      },
      { type: 'h3', text: 'Investigative Recommendations' },
      {
        type: 'p',
        text: "The final product is not a name — it is a set of recommendations that direct where investigative resources should go next. That is the useful deliverable, and it is where a good analyst distinguishes themselves from a bad one.",
      },
      { type: 'h2', text: 'Limits and Honest Caveats' },
      {
        type: 'p',
        text: 'Profiling works better on some offense types than others. It is more reliable in cases with a pattern of behavior than in single-incident cases. It is more useful when the offender pool is bounded than when it is truly open. And it is meaningfully improved when the profiler has direct access to the case rather than working from a summary.',
      },
      { type: 'h2', text: 'When to Consider a Behavioral Analysis' },
      {
        type: 'ul',
        items: [
          "The investigation has stalled because the suspect pool is too wide",
          "The situation involves threatening communications that need to be assessed rather than reacted to",
          "A pattern is emerging that no one has yet named",
          "A civil case would benefit from a psychological understanding of an opposing party's likely conduct",
        ],
      },
      { type: 'h2', text: 'Learn More' },
      {
        type: 'p',
        text: 'For an overview of how we structure behavioral analysis engagements, see our [profiling](/profiling) service page, or explore our [consulting](/consulting) options for related work.',
      },
    ],
    internalLinks: [
      { href: '/profiling', label: 'Criminal Profiling' },
      { href: '/consulting', label: 'Consulting' },
      { href: '/services', label: 'All Services' },
    ],
    externalLink: {
      href: 'https://www.fbi.gov/services/cirg/ncavc',
      label: 'FBI Behavioral Analysis Unit (NCAVC)',
      publisher: 'Federal Bureau of Investigation',
    },
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function getSortedPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}
