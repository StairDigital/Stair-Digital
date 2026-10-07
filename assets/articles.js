/* ============================================================
   Intelligence Briefings — the articles section on Research.

   Two kinds of piece live here. The signed op-eds carry a `by` and a
   `label`, and are reproduced from the author's manuscript verbatim. The
   rest are drawn from STAIR's own monthly AI Intelligence Briefings
   (April and July 2026): every figure and attribution in them appears in
   those briefings, nothing is invented, and where a number is quoted the
   house that published it is named, because a statistic without a source
   is the thing this firm tells clients not to accept.

   Rendering is plain DOM building. The reader is one overlay reused for
   whichever article is open, and the PDF is window.print() against the
   print rules in articles.css, which is the same approach the Blueprint
   page uses: no library, nothing loaded from a CDN, and it stays inside
   the site's Content Security Policy.
   ============================================================ */
(function () {
  "use strict";

  var ARTICLES = [
    /* The two op-eds below are Shailesh Haribhakti's own, reproduced from the
       manuscripts word for word. Every paragraph is his and in his order. The
       only editorial additions are the deck, the section headings and the two
       pull quotes — and each pull quote is a sentence lifted whole off the end
       of the paragraph it used to close, so nothing is duplicated and nothing
       is lost. They carry a byline and an "Op-Ed" label rather than the
       briefing label, because they are signed argument, not our reading notes. */
    {
      id: 'taroi',
      cat: 'Opinion',
      date: '2026-09-28',
      dateLabel: 'September 2026',
      read: 7,
      accent: '#8E3B52',
      by: 'Shailesh Haribhakti',
      label: 'Op-Ed',
      glyph: '<path d="M4 17a8 8 0 1 1 16 0"/><path d="M12 17 16.2 10.6"/><path d="M4.6 13.4 6.4 14M12 9.2V8M19.4 13.4 17.6 14"/><circle cx="12" cy="17" r="1.4"/>',
      title: 'The Intelligence Revolution Needs a Measure of Trust',
      deck: 'A proposal: count the value an AI system releases only in proportion to the evidence a board can actually inspect, and set it against the full cost of making the result safe.',
      body: [
        {p: 'The next race in artificial intelligence will not be won by the system that speaks most fluently or consumes the most electricity. It will be won by intelligence that can earn trust while improving lives. That is why every serious AI deployment should answer a practical question: what value has it released, what evidence supports the claim, and what has it cost to make the result safe?'},
        {h: 'A measure for the question'},
        {p: 'I have proposed a measure for that question: TAROI, or Trust-Adjusted Return on Intelligence. Its equation is simple: (value released × evidence coverage) ÷ (compute + governance + remediation). The measure asks boards and governments to count value only in proportion to the evidence that can be inspected, and to set that against the full cost of the intelligence, its safeguards and its repair. A system that produces impressive outputs but cannot show how it reached consequential decisions has weak evidence coverage. A system that causes harm, or cannot be corrected, has not created durable value.'},
        {p: 'TAROI should not become a single score that excuses a rights violation. Its units and time horizon must be stated, evidence coverage must be auditable, and safety limits must stand as gates. No favorable return can compensate for an unacceptable risk to life, liberty, dignity or the planet. The number is useful because it forces a common conversation about value and trust, not because every human good can be reduced to dollars.'},
        {p: 'This is a civilizational question as much as a technical one. The Vedas and Upanishads are not engineering manuals for machine learning. They offer a deeper reminder: knowledge carries responsibility. Ideas such as dharma, truthfulness and the interdependence expressed in “Tat Tvam Asi” invite us to ask whose welfare intelligence serves and what obligations accompany power. A plural society must answer those questions through constitutional rights, public reasoning and lived accountability, not by pretending one tradition can dictate a global code.'},
        {h: 'Five worlds, one ethic'},
        {p: 'The question becomes urgent as AI enters five very different worlds. They need a shared ethic, but not identical controls.'},
        {p: 'First are population-scale systems: climate models, disease elimination, personalised education, preventive care and public services. Their purpose must be set in public, with explicit rights, consent where possible, and a human route to challenge decisions. Accuracy must be tested across regions and groups, with independent validation against real outcomes and continuous checks for drift. Cyber protection should limit data to what the purpose requires, separate identity from sensitive records, secure exchanges across institutions, and preserve an immediate route to pause a failing service. For a system that shapes millions of lives, the public must be able to see what it is meant to do, what it cannot do and who will answer for failure.'},
        {p: 'Second is AI for specialised research: the ambition, voiced by people such as Peter Diamandis and A.W. Gross, to use advanced intelligence to accelerate solutions to hard problems. The mission should be specific and socially beneficial, with expert review and controls for dual-use work that could enable biological, chemical, cyber or other forms of harm. Accuracy requires reproducible methods, traceable sources, preserved experimental records and clear separation between a model’s hypothesis and verified evidence. Research environments should be isolated from production networks, access to powerful models and sensitive data should be tightly governed, and red teams should test for misuse before release. A discovery is not a success if its benefits cannot be shared safely or its methods cannot be checked.'},
        {p: 'Third is AI in physical systems: cars, robots, industrial equipment, aircraft, drones, ships and other machines that can act on the world. These systems need a bounded operating domain, defined authority and a safe state they can reach when uncertain. Before deployment, they should pass independent simulation and hardware testing across ordinary conditions, edge cases and failures in sensors, networks and power. Their cyber protections should include signed software and model updates, isolated control networks, verified components and secure maintenance channels. Local emergency stops, manual takeover and tested fail-safe behaviour are essential.'},
        {q: 'When a machine can injure someone, a confident answer from the model is never a substitute for demonstrated safety.'},
        {p: 'Fourth is enterprise AI. A company should name the person accountable for every consequential use and specify which decisions an agent may recommend, prepare or execute. Evaluation must use representative cases, include the errors the system fails to flag, and check the operational outcome rather than just the quality of a demonstration. Cyber controls should give each agent only the permissions it needs, authenticate every action, separate duties, log decisions in tamper-evident form and test vendor connections. Boards should see the value released, the evidence behind it, unresolved exceptions and the cost of correction. TAROI can move AI from an innovation story into a disciplined investment conversation.'},
        {p: 'Fifth is AI used by individuals to learn, search, understand and act. These tools should disclose when a person is interacting with AI, protect private information by default and give users control over what the system can access or do. They should show sources for factual claims, signal uncertainty, correct mistakes and decline to impersonate professional or spiritual authority. Cyber safeguards must defend against prompt injection, impersonation and unsafe tool use, while making permissions visible and reversible. People should be able to appeal consequential decisions and reach a human when the stakes demand it. At this scale, trust is earned in ordinary moments: an answer that admits what it does not know, a source that can be checked, a permission that can be withdrawn.'},
        {h: 'A global compact'},
        {p: 'These five domains suggest a global compact: common rules for evidence and accountability, with controls proportionate to risk. Existing foundations are useful. NIST’s AI Risk Management Framework gives organisations a voluntary process for managing AI risk, while the European Union’s AI Act uses a risk-based structure and adds obligations for general-purpose models. UNESCO’s Recommendation on the Ethics of AI offers a global ethical baseline.'},
        {q: 'The gap is not a shortage of principles. It is the uneven conversion of principles into observable proof across borders and sectors.'},
        {p: 'Regulation should therefore be light in form and bright in evidence. Every high-impact system should carry a public-facing purpose statement, a named accountable owner, a tested risk file, documented data and model lineage, independent evaluations, a security plan and a record of material incidents. Regulators should require stronger tests where failure could cause mass harm, and allow simpler assurance for low-risk uses. Shared testing protocols, mutual recognition of credible audits and time-bound regulatory sandboxes can help responsible developers move quickly without forcing every country to reinvent the same rules.'},
        {h: 'Recursive self-improvement'},
        {p: 'Recursive self-improvement makes this compact more urgent. An AI system may help design a more capable successor; it must not quietly rewrite its own purpose, permissions or safety limits. Each material change should be proposed, tested in an isolated environment, challenged by an independent evaluator, approved by a responsible human, released gradually and checked again in production. The objectives, risk boundaries, logs, approval rules and shutdown path should remain outside the system’s power to change. When evidence fails, the system must be capable of being stopped and restored to a known-safe state.'},
        {h: 'Governance as accelerant'},
        {p: 'That is how governance can accelerate a race to excellence. A trusted system earns broader adoption; broader adoption produces better evidence; better evidence supports faster, safer improvement. The prize is not intelligence for its own sake. It is intelligence that helps eliminate disease, strengthen learning, restore ecosystems, make enterprises more productive and give individuals greater agency without concentrating power beyond accountability.'},
        {p: 'The old contest asked who could build the most capable machine. The more consequential contest asks who can make intelligence dependable at the scale of human need. TAROI gives us a way to keep asking whether value is real, whether proof is sufficient and whether the cost of trust has been paid. If we measure all three, superintelligence can become a source of shared abundance. If we measure capability alone, we may discover too late that power has outrun wisdom.'}
      ]
    },

    {
      id: 'taroi-futures',
      cat: 'Opinion',
      date: '2026-09-29',
      dateLabel: 'September 2026',
      read: 7,
      accent: '#3F5FA8',
      by: 'Shailesh Haribhakti',
      label: 'Op-Ed',
      /* One trunk forking into two futures: the piece's argument that value
         includes the options a system creates. Three branches and a baseline
         were tried first and turned to mush at the 29px the mark renders at. */
      glyph: '<path d="M3.5 20.5h17"/><path d="M12 20.5v-6.7"/><path d="M12 13.8 6.3 8.1M12 13.8l5.7-5.7"/><circle cx="5.1" cy="6.9" r="1.7"/><circle cx="18.9" cy="6.9" r="1.7"/>',
      title: 'AI’s Future Cannot Be Measured by Today’s Returns',
      deck: 'A second look at the same measure, widened. Value includes the options an AI system creates, evidence coverage cannot rest on a human catching every action, and no projected return cancels a risk to life or liberty.',
      body: [
        {p: 'Artificial intelligence is an investment in futures we cannot fully see. Its greatest value may arrive years after deployment, through capabilities it makes possible, discoveries it accelerates and public needs it helps meet. Yet the speed and autonomy of these systems are also creating consequences their builders cannot reliably predict. A measure of return is necessary. It cannot be the whole test of trust.'},
        {p: 'I proposed TAROI: Trust-Adjusted Return on Intelligence, expressed as (value released × evidence coverage) ÷ (compute + governance + remediation). The idea is to connect the value an AI system creates to the evidence that supports it and the full cost of operating it responsibly. That remains a useful discipline for boards and governments. But AI asks us to widen the numerator and resist turning the formula into a verdict.'},
        {h: 'Widening the numerator'},
        {p: 'Value should include what has been realised and what the system credibly enables. An AI research platform may not yet have produced a medicine; it may still create option value by shortening experiments or opening a promising line of inquiry. A learning system may build a capability whose economic return appears years later. These prospects should be described as ranges, with assumptions and confidence levels, rather than booked as certain gains. We should track both near-term results and the future options created, then revise the estimate as evidence changes.'},
        {h: 'Evidence coverage at machine speed'},
        {p: 'The second term, evidence coverage, also needs more than a count of decisions inspected. Agentic systems can chain tools, delegate tasks and act at machine speed. Reviewing a sample after the event or placing a person in every loop will not be enough. People must remain accountable, but safety cannot depend on a human catching each novel action in time.'},
        {q: 'The architecture must constrain what the system can do, limit the damage it can cause and make recovery possible when it behaves in an unexpected way.'},
        {h: 'Four views, not one score'},
        {p: 'TAROI, then, is one economic lens in a multidimensional assessment. Beside it, leaders should see at least four independent views: future value and uncertainty; the system’s autonomy and reach; reliability, cyber resilience and recoverability; and effects on rights, distribution and the natural world. These views should not be collapsed into a single weighted score. A large projected return cannot cancel an unacceptable risk to life or liberty. Each dimension needs its own evidence, thresholds and accountable owner.'},
        {p: 'This is a civilizational question as much as a technical one. The Vedas and Upanishads are not manuals for machine learning. They remind us that knowledge carries responsibility and that the self is bound to a larger whole. Dharma asks what action is right in context; truthfulness demands that we distinguish what we know from what we merely predict. Such ideas can deepen a global conversation, while the rules themselves must protect pluralism, constitutional rights and the freedom of people who do not share one tradition.'},
        {h: 'Five worlds, different forms'},
        {p: 'The same principles must take different forms in the five worlds where AI is already moving.'},
        {p: 'At population scale, AI may help anticipate disease, personalise education, improve preventive care and coordinate climate action. The objective and rights must be set publicly, with community participation and a clear route to contest harmful outcomes. Accuracy should be assessed across regions and groups and measured through real-world outcomes, not only benchmark tests. Because nobody can review every decision, independent teams should test the system’s boundaries, monitor population-level effects and trigger pause or rollback when those effects cross agreed limits. Data should be minimised, identity protected and exchanges secured. A public system must be answerable even when its decisions emerge from a complex chain of models and agents.'},
        {p: 'In specialised research, including the ambitious problem-solving vision associated with Peter Diamandis and A.W. Gross, AI can search enormous spaces of hypotheses and accelerate discovery. The mission should be bounded, with independent expertise and restrictions where a method could be repurposed for biological, chemical, cyber or other harm. Accuracy requires reproducible experiments, traceable evidence and a visible distinction between a generated hypothesis and a result that has survived verification. Research agents should work in isolated environments, with controlled access to instruments, data and external networks. Each stage that increases a system’s ability to produce or execute hazardous work should require stronger evaluation and authorization.'},
        {p: 'In cars, robots, aircraft, drones, ships and industrial equipment, an error leaves the screen and enters the physical world. Safety must be designed into the machine through tested operating boundaries, independent safety controllers and predictable safe states. Simulations should include sensor failure, hostile inputs, network loss and conditions outside the ordinary operating range; physical tests must then challenge the model’s assumptions. Secure boot, signed updates, segmented control networks and verified components protect the system from tampering. Geofences, speed and force limits, emergency stops and recovery procedures should hold even when the AI’s own reasoning is unfamiliar.'},
        {q: 'Human override matters, but it cannot be the only barrier between an unpredictable decision and an injury.'},
        {p: 'Inside enterprises, each agent should receive a defined task, limited permissions and a budget for actions, time and transactions. A named executive remains accountable for the use. Independent evaluation should test not just answer quality but the full workflow, including tool calls, delegation, errors and attempts to escape the assigned scope. Two-person approval can govern high-consequence actions; lower-risk work can proceed within preauthorised limits. Tamper-evident logs, separation of duties, vendor controls and tested rollback paths make the chain reconstructable and correctable. Boards should see TAROI beside future-value ranges, exceptions, autonomy exposure and recovery readiness.'},
        {p: 'For individuals using AI to learn, search, understand and act, the product should make uncertainty visible and offer sources that users can check. It should protect personal information by default and request specific permission before taking consequential action. Tool access should be narrow and revocable; prompt injection, impersonation and manipulative design should be tested continuously. A human contact or appeal route remains necessary for important decisions, but a safe default is equally important: if the user has not authorised an action, the assistant should not take it. Trust grows when the interface makes its limits plain and gives people control that actually works.'},
        {h: 'Making assurance portable'},
        {p: 'A global regulatory compact can support excellence without prescribing one technology or freezing innovation. Existing foundations, including NIST’s voluntary AI Risk Management Framework, the European Union’s risk-based AI Act and UNESCO’s Recommendation on the Ethics of AI, provide useful starting points. The next step is to make assurance portable: common definitions for high-impact uses, shared testing protocols, reliable incident reporting and mutual recognition of credible independent evaluations. Low-risk uses should face light requirements. Systems with broad reach, powerful tool access or irreversible effects should meet higher standards before and after deployment.'},
        {p: 'Regulators should focus on what a system can do in its deployment context, not only on the name or size of its model. Developers and deployers should publish a purpose statement, identify an accountable owner, document data and model lineage, test foreseeable and adversarial conditions, and report serious incidents. For systems whose behaviour cannot be fully predicted, assurance must be continuous and adaptive. New capabilities, new connections or a change in environment should trigger fresh assessment. A regulatory sandbox can speed learning, provided participation does not waive rights or accountability.'},
        {h: 'Recursive self-improvement'},
        {p: 'Recursive self-improvement makes those rules urgent. A system may help design its successor or propose a better way to pursue an approved task. It must not control the mechanisms that define its own authority. Mission, permissions, safety limits, resource ceilings and shutdown mechanisms should be protected outside the model. Changes should be tested in isolation, challenged by independent evaluators and released gradually, with automated monitors enforcing limits at runtime. If behaviour departs from the authorised envelope, the system should lose access to the relevant tools, isolate safely and preserve evidence for review. Human approval remains part of the chain; external technical constraints make that approval meaningful.'},
        {p: 'We cannot write a complete map of the future because AI will help create the terrain. We can, however, build institutions that learn without surrendering their standards. Set a public purpose. Measure realised value and future options honestly. Keep economic return distinct from rights, safety and resilience. Constrain autonomy before release, detect changes as they emerge and make recovery a tested capability. TAROI begins the conversation by asking what intelligence returns for the resources and trust invested in it. A fuller scorecard asks whether that return can endure uncertainty and remain worthy of the people who live with its consequences.'}
      ]
    },

    {
      id: "cs-oem",
      cat: "Case study",
      dateLabel: "2001 to present",
      read: 5,
      accent: "#B85C3E",
      glyph: "<path d=\"M3 21h18V9l-6 4V9l-6 4V6L3 9z\"/><path d=\"M8 21v-4h4v4\"/>",
      title: "Transforming a Leading OEM Player in India",
      deck: "A family-run cooling and refrigeration business, listed and under pressure, rebuilt into a governance-driven leader. Revenue from INR 1,000 crores in 2001 to INR 7,907 crores in FY 2022-23.",
      body: [
        {h: "Company Background"},
        {p: "This narrative centers on a leading Original Equipment Manufacturer (OEM) in India, a titan in the cooling and refrigeration sector. Established in 1943, it began as a modest trading entity and grew into a powerhouse producing air conditioners, commercial refrigeration units, and air purifiers. Today, it’s a publicly listed giant on the Bombay Stock Exchange (BSE) and National Stock Exchange (NSE), commanding a vast network of offices and channel partners across India. By the early 2020s, its revenues soared past INR 7,000 crores, driven by India’s urbanization and rising demand for climate control solutions."},
        {p: "The team of Stair Digital has been engaged with this industry leader since 2001, with our founder Shailesh Haribhakti joining the board in 2001 and ascending to Chairman in 2019."},
        {p: "Initially a family-run enterprise, it transitioned into a professionally managed corporation, competing with global brands and local innovators. Its listing brought investor expectations, but its family-led roots raised governance concerns, setting the stage for a transformative journey under the team’s guidance."},
        {h: "Challenges Faced"},
        {p: "The company grappled with significant obstacles:"},
        {ul: [
          "<b>Succession Uncertainty:</b> As a family business, it faced internal disputes over leadership transitions, risking strategic paralysis.",
          "<b>Pandemic Disruptions:</b> COVID-19 crippled its supply chain, halting imports of critical components and slashing production and sales.",
          "<b>Competitive Pressure:</b> Low-cost imports and aggressive marketing from rivals eroded its market share, necessitating innovation.",
          "<b>Financial Strain:</b> Pre-pandemic expansion inflated debt, and the downturn squeezed liquidity, demanding swift capital solutions."
        ]},
        {p: "These challenges underscored the need for robust governance and operational resilience."},
        {h: "Leadership and Interventions"},
        {p: "Stair Digital’s founder Shailesh Haribhakti, spearheaded a comprehensive transformation:"},
        {ul: [
          "<b>Succession Framework:</b> Introducing a retirement age policy for senior roles, ensuring seamless transitions and injecting fresh leadership talent.",
          "<b>Governance Overhaul:</b> Revamping board processes, implementing transparent evaluations and independent oversight to align with long-term objectives.",
          "<b>Crisis Management:</b> During the pandemic, Stair Digital secured short-term financing and optimized working capital, stabilizing cash flows.",
          "<b>Capital Infusion:</b> In 2023, the team orchestrated a INR 1,000 crore equity raise via institutional investors, fortifying the balance sheet for growth."
        ]},
        {p: "These interventions professionalized the company, aligning it with global benchmarks."},
        {h: "Growth Journey During Engagement (2001–Present)"},
        {p: "Since the team’s engagement in 2001, the company’s trajectory has been remarkable:"},
        {ul: [
          "<b>Early 2000s:</b> Revenue hovered around INR 1,000 crores, with a focus on domestic manufacturing.",
          "<b>2010s:</b> Expansion into new product lines like air purifiers and a growing export presence doubled revenues to INR 2,500 crores by 2015.",
          "<b>Post-2019 (Shailesh Haribhakti as Chairman):</b> Revenue surged from INR 5,200 crores in FY 2019-20 to INR 7,907 crores in FY 2022-23, reflecting a 52% jump. Market share in room air conditioners grew to 13.5% by 2023."
        ]},
        {p: "This growth reflects our strategic influence over two decades."},
        {h: "Outcomes and Achievements"},
        {p: "The transformation yielded impressive results:"},
        {ul: [
          "<b>Governance Milestone:</b> Our succession and board reforms attracted top talent and institutional trust.",
          "<b>Financial Turnaround:</b> The 2023 equity raise and product innovation drove revenue from INR 5,200 crores (FY 2019-20) to INR 7,907 crores (FY 2022-23).",
          "<b>Operational Resilience:</b> Diversified sourcing and capacity expansion countered supply chain risks.",
          "<b>Industry Leadership:</b> The company reinforced its status as a market leader, earning accolades."
        ]},
        {h: "Summary"},
        {p: "Key achievements under Stair Digital’s engagement:"},
        {ul: [
          "INR 1,000 crore equity raise in 2023.",
          "Revenue growth from INR 1,000 crores in 2001 to INR 7,907 crores in FY 2022-23.",
          "Evolution into a governance-driven, professionally managed leader."
        ]}
      ]
    },

    {
      id: "cs-digital",
      cat: "Case study",
      dateLabel: "Early 2000s to present",
      read: 5,
      accent: "#12A79D",
      glyph: "<path d=\"M12 3l7.5 3.2v5.1c0 5.1-3.2 8.3-7.5 10.4-4.3-2.1-7.5-5.3-7.5-10.4V6.2z\"/><circle cx=\"12\" cy=\"10.8\" r=\"2.2\"/><path d=\"M9.3 16.3a3.4 3.4 0 0 1 5.4 0\"/>",
      title: "Building a Pioneering Digital Solutions Provider in India",
      deck: "From a conglomerate subsidiary to a standalone public company: a 2021 rebrand, a INR 490 crore IPO, and a market cap beyond INR 8,000 crores.",
      body: [
        {h: "Company Background"},
        {p: "This case study explores a pioneering digital solutions provider in India, a trailblazer in public infrastructure and e-governance. Founded in the mid-1990s as part of a financial conglomerate, it emerged as an independent entity offering identity verification, pension management, and digital services."},
        {p: "By the early 2020s, it generated over INR 700 crores in revenue, capitalizing on India’s digital revolution. Stair Digital has been engaged since the early 2000s, with our founder Shailesh Haribhakti serving as Chairperson since that time."},
        {p: "Listed on the BSE, it serves governments, banks, and fintechs, navigating a competitive landscape of tech giants and startups. A strategic demerger and rebranding in 2021 marked its ascent as a standalone innovator."},
        {h: "Challenges Faced"},
        {p: "The company faced critical hurdles:"},
        {ul: [
          "<b>Identity Overhaul:</b> Post-demerger, it needed a distinct brand to stand apart from its parent.",
          "<b>IPO Execution:</b> Preparing for a public listing required financial rigor and global investor outreach.",
          "<b>Global Expansion:</b> Regulatory and market entry barriers challenged its international ambitions.",
          "<b>Profitability Lag:</b> Despite revenue growth, margins trailed competitors, demanding operational efficiency."
        ]},
        {p: "These issues tested its ability to lead India’s digital charge."},
        {h: "Leadership and Interventions"},
        {p: "With Shailesh Haribhakti at the helm, drove a bold transformation:"},
        {ul: [
          "<b>Rebranding Mastery:</b> Stair Digital led the 2021 rebranding, positioning it as a cutting-edge digital innovator.",
          "<b>Leadership Build:</b> We recruited a top-tier CEO and management team to fuel growth.",
          "<b>IPO Triumph:</b> Stair Digital executed a INR 490 crore IPO in November 2023, amplifying its global presence.",
          "<b>Governance Elevation:</b> We introduced independent directors and ESG metrics, boosting investor confidence."
        ]},
        {p: "These steps redefined its market stature."},
        {h: "Growth Journey During Engagement (Early 2000s–Present)"},
        {p: "Since our involvement:"},
        {ul: [
          "<b>Early 2000s:</b> Revenue was modest at INR 50 crores, focused on niche e-governance services.",
          "<b>2010s:</b> Expansion into new verticals like tax filing grew revenue to INR 300 crores by 2015.",
          "<b>Post-Rebranding (2021):</b> Revenue climbed to INR 742 crores by FY 2022-23, with profit after tax rising from INR 100 crores (FY 2021-22) to INR 150 crores (FY 2022-23). The IPO in 2023 propelled its market cap beyond INR 8,000 crores."
        ]},
        {p: "This reflects our two-decade impact."},
        {h: "Outcomes and Achievements"},
        {p: "The results were transformative:"},
        {ul: [
          "<b>Digital Leadership:</b> The rebrand solidified its role in India’s digital infrastructure.",
          "<b>IPO Success:</b> The oversubscribed IPO saw shares soar from INR 792 to nearly INR 2,000 within a year.",
          "<b>Global Footprint:</b> Partnerships in Africa and Southeast Asia launched its international journey.",
          "<b>Financial Leap:</b> Profit margins improved with streamlined operations."
        ]},
        {h: "Summary"},
        {p: "Key achievements under Stair Digital:"},
        {ul: [
          "Successful rebranding in 2021.",
          "INR 490 crore IPO in 2023.",
          "Market cap growth to over INR 8,000 crores."
        ]}
      ]
    },

    {
      id: "cs-nbfc",
      cat: "Case study",
      dateLabel: "2015 to present",
      read: 5,
      accent: "#4A5A6B",
      glyph: "<path d=\"M3 21h18\"/><path d=\"M5 21V10M9.5 21V10M14.5 21V10M19 21V10\"/><path d=\"M12 3 3 8h18z\"/>",
      title: "Transforming a Diversified Financial Services Firm in India",
      deck: "An NBFC carrying wholesale risk through the 2018 crisis, pivoted to 94% retail lending with AUM at INR 80,000 crores and 95% digital collections.",
      body: [
        {h: "Company Background"},
        {p: "This story tracks a diversified financial services firm in India, a major non-banking financial company (NBFC) founded in the 1990s under a prominent conglomerate. Spanning retail loans, infrastructure financing, and real estate funding, it managed assets worth INR 80,000 crores by the early 2020s. Stair Digital has been engaged since the mid-2010s (specifically 2015), with our founder Shailesh Haribhakti serving on the board."},
        {p: "Listed on the BSE and NSE, it initially thrived on wholesale lending but shifted toward retail to mitigate risks, a pivot accelerated by Stair Digital’s involvement."},
        {h: "Challenges Faced"},
        {p: "The firm faced pressing issues:"},
        {ul: [
          "<b>Portfolio Risk:</b> Heavy wholesale exposure led to bad loans during the 2018 NBFC crisis.",
          "<b>Digital Disruption:</b> Fintechs eroded its retail share, necessitating a tech overhaul.",
          "<b>Liquidity Crunch:</b> Post-crisis funding dried up, requiring capital diversification.",
          "<b>Conglomerate Alignment:</b> It had to balance group restructuring with independent growth."
        ]},
        {p: "These demanded a strategic reset."},
        {h: "Leadership and Interventions"},
        {p: "Stair Digital worked on a sweeping overhaul:"},
        {ul: [
          "<b>Retail Pivot:</b> Shift in lending to 94% retail by FY 2023, reducing risk.",
          "<b>Financial Resilience:</b> Stair Digital diversified funding with Green Bonds and bolstered capital reserves.",
          "<b>Digital Leap:</b> The company achieved 95% digital collections during the pandemic, integrating fintech partnerships.",
          "<b>Governance Innovation:</b> The board introduced a 360-degree feedback loop for the board, enhancing decision-making and compliance."
        ]},
        {p: "These changes modernized the firm."},
        {h: "Growth Journey During Engagement (2015–Present)"},
        {p: "Since Stair Digital’s engagement:"},
        {ul: [
          "<b>2015:</b> Assets under management (AUM) were INR 50,000 crores, with retail at 20%.",
          "<b>2019:</b> AUM grew to INR 65,000 crores, with retail rising to 50%.",
          "<b>2023:</b> AUM hit INR 80,000 crores, retail loans surging from INR 30,000 crores (FY 2019-20) to INR 75,000 crores (FY 2022-23). Profit after tax rose from INR 1,000 crores to INR 1,500 crores."
        ]},
        {p: "This showcases Stair Digital’s transformative role."},
        {h: "Outcomes and Achievements"},
        {p: "The turnaround was profound:"},
        {ul: [
          "<b>Portfolio Strength:</b> Retail dominance improved asset quality.",
          "<b>Profit Growth:</b> Earnings climbed with operational efficiency.",
          "<b>Digital Leadership:</b> 95% digital collections set an industry standard.",
          "<b>Governance Excellence:</b> The 360-degree feedback loop earned recognition."
        ]},
        {h: "Summary"},
        {p: "Key achievements:"},
        {ul: [
          "94% retail lending transformation.",
          "AUM growth to INR 80,000 crores.",
          "Profit increase to INR 1,500 crores in FY 2022-23."
        ]}
      ]
    },

    {
      id: "recruitment",
      cat: "Perspective",
      dateLabel: "March 2025",
      read: 6,
      accent: "#A6862F",
      glyph: "<circle cx=\"9.4\" cy=\"8\" r=\"3.6\"/><path d=\"M3 20v-1.6A3.4 3.4 0 0 1 6.4 15h6a3.4 3.4 0 0 1 3.4 3.4V20\"/><circle cx=\"17.9\" cy=\"9.3\" r=\"2.9\"/><path d=\"m20.3 11.7 2.2 2.2\"/>",
      title: "The AI Revolution in Recruitment: Promise, Peril, and the Path to Responsibility",
      deck: "Algorithms now sift resumes, predict candidate success and assess personality traits. The question is whether AI in recruitment can deliver on its potential without tripping over its own circuits.",
      body: [
        {p: "The artificial intelligence revolution is sweeping through industries with the subtlety of a gale-force wind, and recruitment is no exception. Algorithms now sift resumes, predict candidate success, and even assess personality traits—all at speeds that would leave a human recruiter blinking in disbelief."},
        {p: "The promise is tantalizing: a process stripped of inefficiency, honed to precision, and scaled to meet the demands of a global talent war. Yet, beneath the glossy veneer lies a paradox. The very tools designed to level the playing field can, if mishandled, entrench biases, erode trust, and raise ethical red flags."},
        {q: "In this high-stakes dance between innovation and responsibility, the question looms: can AI in recruitment deliver on its potential without tripping over its own circuits?"},
        {h: "1. The Allure of Efficiency—and Its Hidden Costs"},
        {p: "Picture a bustling corporate headquarters, drowning in a sea of job applications. Enter an AI system, trained to spot the wheat from the chaff. In mere hours, it slashes the pile by half, delivering a shortlist that dazzles with efficiency. A recent survey found that firms adopting such tools cut their hiring time by 40%, with some reporting a 20% uptick in employee retention—a statistic that would make any HR director salivate. The numbers paint a rosy picture: faster hires, better fits, happier teams."},
        {p: "But the canvas isn’t flawless. Imagine that same AI, fed a diet of historical data, quietly learning to favor candidates from elite schools or with certain job titles. Dig deeper, and a darker pattern emerges: a tilt toward one gender or demographic, not by design but by default."},
        {p: "Studies suggest this isn’t hypothetical—over 60% of AI hiring tools show signs of bias, mirroring the skewed datasets they inherit. In one real-world case, a financial institution’s AI tool, lauded for its speed, was later found to disproportionately exclude candidates with atypical cognitive profiles. The fallout? Legal headaches and a bruised reputation. Efficiency, it seems, comes with a caveat: unchecked, it can amplify the past’s imperfections rather than pave a fairer future."},
        {h: "2. Trust in the Machine: A Fragile Commodity"},
        {p: "The public isn’t blind to these risks. A 2025 study revealed a stark decline in faith: only 30% of job seekers now trust AI to judge them fairly, down from 45% two years prior. This isn’t mere Luddite grumbling. High-profile blunders—like the time an AI system erroneously rejected thousands of qualified applicants due to a glitch—have stoked skepticism."},
        {p: "In another instance, a breach exposed the personal data of millions of candidates, spotlighting a grim reality: AI’s appetite for information can clash with privacy imperatives. When algorithms handle everything from CVs to social media trails, a single misstep can unravel trust—and with it, a company’s ability to attract top talent."},
        {p: "Yet, the stakes extend beyond optics. In a world where human capital drives innovation, a recruitment process seen as opaque or unfair risks alienating the very people it seeks to woo. The data backs this up: firms perceived as ethical in their tech use see 25% higher applicant interest, according to a 2024 analysis. Trust, it turns out, is as much a currency as competence."},
        {h: "3. Responsible AI: Beyond Buzzwords"},
        {p: "So, how do we thread this needle—reaping AI’s rewards without sowing chaos? The answer hinges on a concept gaining traction: responsible AI. This isn’t about stifling progress with bureaucracy; it’s about weaving ethics into the warp and weft of technology. Think transparent algorithms, where decisions can be traced and questioned. Picture diverse training data, reflecting not just privilege but the full spectrum of humanity. And imagine systems built to be audited, their logic laid bare for scrutiny."},
        {p: "Real-world efforts hint at what’s possible. In one case, a tech-savvy outfit opened up its AI hiring model to external review, revealing—and fixing—flaws that boosted diverse hires by a quarter. Elsewhere, an innovative startup crafted a tool to spot bias in real time, flagging inequities before they calcified into decisions. The payoff? Not just fairness, but sharper predictions—a reminder that ethics and efficacy can align."},
        {p: "Privacy, too, demands attention. With AI gorging on sensitive data, robust safeguards—encryption, anonymization, tight access rules—are non-negotiable. A recent incident, where a platform’s lax security exposed millions of profiles, serves as a cautionary tale. Companies that skimp here don’t just risk fines; they court disaster."},
        {h: "4. The Human Factor: Augmentation, Not Automation"},
        {p: "Yet, for all its prowess, AI isn’t a solo act. The most effective setups pair it with human judgment—a hybrid harmony that tempers cold code with warm intuition. Data supports this: firms blending AI screening with human final calls report 30% higher candidate satisfaction."},
        {p: "In one striking example, a retailer used AI to narrow its applicant pool, then leaned on recruiters to assess cultural fit. The result? A workforce that clicked, not just ticked boxes. Technology, it seems, shines brightest when it amplifies humanity, not supplants it."},
        {h: "5. Navigating the Tightrope: Innovation vs. Oversight"},
        {p: "The road to responsible AI isn’t without potholes. Regulators are racing to catch up—think sweeping frameworks like the EU’s AI Act or America’s nascent AI Bill of Rights. But laws alone won’t suffice; they’re too blunt for a field this fluid. The real action unfolds elsewhere: in labs where developers wrestle with bias, in boardrooms where leaders weigh risks, in teams where ethicists and technologists spar over trade-offs."},
        {p: "Companies must step up. That means investing in AI literacy—ensuring everyone, from executives to frontline staff, grasps the tech’s promise and perils. It means fostering a culture where questioning an algorithm isn’t taboo but expected. And it means candor with candidates: explaining how AI shapes their fate and offering a lifeline if it falters. One firm, for instance, began sharing “AI decision reports” with applicants, detailing why they were passed over. Uptake soared—not from acing every hire, but from showing its work."},
        {h: "6. The Stakes—and the Prize"},
        {p: "Get this wrong, and the future looks bleak: a recruitment landscape ruled by inscrutable black boxes, churning out bias and mistrust. Get it right, and the vista shifts. Imagine AI not just spotting talent but doing so with equity and clarity—matching people to roles in ways that feel less like a lottery and more like a meritocracy. The data hints at the upside: ethical AI adopters see 15% higher productivity from new hires, per a 2024 study. That’s not just good business—it’s a moral win."},
        {p: "The AI train has left the station, and its speed is dizzying. The choices we make now—between laissez-faire and vigilance, between shortcuts and principles—will reverberate for decades. Will we let algorithms loose to wreak havoc, or steer them toward a purpose that uplifts? The answer isn’t coded in silicon; it’s forged in our resolve to marry technology with conscience. Time’s ticking. What’s the next move?"}
      ]
    },

    {
      id: 'checkpoint',
      cat: 'Governance',
      date: '2026-07-28',
      dateLabel: 'July 2026',
      read: 6,
      accent: '#0E9C93',
      glyph: '<path d="M12 3l7.5 3.2v5.1c0 5.1-3.2 8.3-7.5 10.4-4.3-2.1-7.5-5.3-7.5-10.4V6.2z"/><path d="m8.6 12.1 2.4 2.4 4.4-4.6"/>',
      title: 'The checkpoint nobody can name',
      deck: 'Every large organisation has an AI governance framework. Very few can tell you the moment a model is cleared to run in production, and who signed.',
      body: [
        {p: 'Ask a board how it governs artificial intelligence and you will usually be handed a document. Ask the same board to name the checkpoint at which a model is cleared for production, and who put their name to that decision, and the room goes quiet. Across the work published by BCG, McKinsey and Deloitte through 2026, that is the same gap reported again and again: the framework exists on paper, and the control does not exist in the process.'},
        {p: 'This has become the binding constraint on enterprise AI value. Not model capability, which improves every quarter without anyone in the enterprise having to do anything. Governance, which improves only when someone builds it.'},
        {h: 'Why the old controls stopped working'},
        {p: 'For most of the last decade, enterprise AI advised. A model scored a lead, flagged a transaction, ranked a CV. A human then decided. That arrangement is forgiving, because the human is the control: if the model is wrong, the person catches it before anything happens.'},
        {p: 'Agentic systems break that arrangement. They execute, and then a human sees the result. Anthropic\'s 2026 State of AI Agents Report found that 81% of surveyed organisations planned to take on more complex use cases within the year, with 39% building agents for multi-step processes and 29% for cross-functional work. In each of those, the action lands before the review.'},
        {q: 'Advisory-era controls assume a human stands between the model and the consequence. Agentic systems remove that person and leave the control diagram unchanged.'},
        {p: 'Deloitte put the same point more bluntly: agentic AI is scaling faster than the guardrails meant to contain it. That is not a warning about the technology. It is a warning about sequencing.'},
        {h: 'What a real checkpoint looks like'},
        {p: 'A governance framework becomes a control when it can answer four questions on any given day, in writing, without a meeting:'},
        {ul: [
          'Which named executive owns this model in production, and against which P&amp;L line?',
          'What did it score on an evaluation set built from our own work, not a public leaderboard?',
          'What is it permitted to do unaided, and where does it have to stop and escalate?',
          'If an auditor asks in eleven months what answered a question in March, can we reconstruct it?'
        ]},
        {p: 'None of those require new technology. They require someone to decide, and the decision to be recorded somewhere an auditor can find it. Most organisations we open up have the capability to answer all four and have never been asked to.'},
        {h: 'Where regulators have got to'},
        {p: 'The Reserve Bank of India\'s draft model-risk guidance is the clearest signal yet that this is moving from good practice to expectation, at least in financial services. The EU AI Act is phasing in, with prohibited uses first. Neither asks whether an organisation has a policy. Both ask what happens at the point of deployment.'},
        {p: 'The practical implication for an Indian enterprise is that the checkpoint has to exist before the regulator asks for it, because it cannot be retrofitted onto decisions already made. A model already running in production without a recorded clearance is a finding waiting to be written up.'},
        {h: 'What to do this quarter'},
        {p: 'Pick the function where AI is furthest along, most often finance, audit or legal. Write down the four answers above for every model already live there. The exercise usually takes a fortnight and it produces two things: a control that did not exist before, and an honest list of what is running without an owner.'},
        {p: 'That list is uncomfortable. It is also the most useful document a board will read this year.'}
      ]
    },

    {
      id: 'structure',
      cat: 'Operating model',
      date: '2026-04-30',
      dateLabel: 'April 2026',
      read: 6,
      accent: '#3D6B8A',
      glyph: '<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M6 16v-4h12v4"/>',
      title: 'Structure precedes scale',
      deck: 'The gating factor on AI returns is organisational design, not model selection. The evidence on that is now uncomfortably consistent.',
      body: [
        {p: 'There is a version of the AI conversation that never leaves the technology. Which model, which vendor, which cloud. It is a comfortable conversation because every question in it has a procurable answer.'},
        {p: 'The evidence from 2026 points somewhere less comfortable. BCG finds agent-first leaders cutting costs by 15% to 20%, while most organisations remain below 30% adoption. The difference between those two groups is not model access. Every one of them can buy the same models on the same terms this afternoon. The difference is how the organisation around the model is arranged.'},
        {h: 'Seventy per cent of the work is not technical'},
        {p: 'The figure that should reset most transformation plans is this: success in these programmes is roughly 70% people and change management. Not 70% of the risk. Seventy per cent of the work.'},
        {p: 'That ratio explains why so many pilots succeed and so few scale. A pilot can be delivered by a technical team working around the organisation. Scaling requires the organisation itself to change shape, and nobody on the technical team has the authority to do that.'},
        {q: 'A pilot is something you can do to an organisation. Scaling is something the organisation has to do to itself.'},
        {h: 'Workflows, not tasks'},
        {p: 'The second structural finding is about the unit of redesign. Most enterprises automate tasks: the invoice match, the reconciliation line, the first-draft clause. Each one returns a small, real saving that is then absorbed by the process around it, which has not changed.'},
        {p: 'The returns arrive when the unit of redesign is the end-to-end workflow, which almost always crosses a departmental boundary, which is precisely why it does not happen by itself. Two directors optimising their own halves of a process will never produce the redesign that the whole process needs.'},
        {p: 'That is an argument for a single accountable executive owner spanning the workflow, with the authority to change how both halves work. Without one, the work stalls at the boundary every time.'},
        {h: 'The centralised function that makes it possible'},
        {p: 'Agentic operations, in particular, demand a centralised transformation function. Not a centre of excellence that publishes standards and hopes, but a function that owns the redesign, the evaluation harness, the deployment gates and the reporting line into the board.'},
        {p: 'Deloitte\'s reading of the same period lands on three things: governance, operating models and proven return. The order matters. The organisations getting returns did the operating-model work first and found the returns followed. The ones chasing returns directly are still running pilots.'},
        {h: 'The question to put to the board'},
        {p: 'Not "which model should we standardise on". That question has a shelf life of about six months and no bearing on outcomes.'},
        {p: 'The question is: which end-to-end process are we redesigning this year, who owns it across every function it touches, and what is the number against their name. If nobody in the room can answer that, the AI budget is funding experiments rather than change.'}
      ]
    },

    {
      id: 'moat',
      cat: 'Strategy',
      date: '2026-07-31',
      dateLabel: 'July 2026',
      read: 5,
      accent: '#D96A30',
      glyph: '<rect x="4" y="10.5" width="16" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/><circle cx="12" cy="15.4" r="1.4"/>',
      title: 'Rented intelligence has no moat',
      deck: 'Savings from off-the-shelf tools get competed away, because your competitor buys the same licence. What survives is the logic you own.',
      body: [
        {p: 'The most consequential shift in enterprise AI this year is also the least discussed in public. Analysis from MIT Technology Review and BCG shows that standard foundation-model scaling is delivering diminishing returns. The curve that justified simply buying the largest available model has flattened.'},
        {p: 'That matters commercially for a reason that has nothing to do with model quality. If a capability arrives as a licence, every competitor can license it too. The efficiency gain is real for a quarter or two, and then the market competes it away and it shows up in customer pricing rather than in your margin.'},
        {h: 'What cannot be competed away'},
        {p: 'What survives is the part nobody else can buy: your own business logic, embedded into an execution layer you own. The approval thresholds your board actually set. The way your contracts are written. The reason a decision was taken in 2019. None of that is in anyone\'s foundation model, and none of it can be acquired by a competitor with a purchase order.'},
        {q: 'A capability you can buy is a capability your competitor has already bought. Margin comes from the part of the system that is specific to you.'},
        {p: 'This is why the budget conversation is moving from broad foundation-model licences toward proprietary execution architectures, and toward products that generate revenue rather than only removing cost.'},
        {h: 'The practical shape of it'},
        {p: 'In practice this means the frontier model stops being the product and becomes a component. It sets the standard on your own questions and it is what you distil from. What goes into production is smaller, tuned on your corpus, running inside your estate, and versioned like any other control.'},
        {p: 'A small model trained tightly on one enterprise\'s domain frequently outperforms a far larger general model on that enterprise\'s own work, because all of its capacity is spent there rather than on everything else. It also costs a fraction to run, does not meter per token, and can be frozen so that an answer given in March is reproducible in December.'},
        {h: 'Where this leaves the CIO'},
        {p: 'The uncomfortable question for anyone who has already signed a large platform commitment is what proportion of it funds capability that a competitor could match by signing the same contract. For most enterprises the honest answer is: most of it.'},
        {p: 'That does not make the spend wrong. Frontier models still set the benchmark and are what you distil from, and for genuinely open-ended work they remain the right tool. It makes the spend insufficient on its own. The differentiated part has to be built, and building it is a decision that gets made once, deliberately, rather than arrived at by default.'}
      ]
    },

    {
      id: 'budgets',
      cat: 'Capital',
      date: '2026-04-30',
      dateLabel: 'April 2026',
      read: 5,
      accent: '#B8863B',
      glyph: '<path d="M4 20h16"/><path d="M7 20v-5M12 20v-9M17 20v-13"/><path d="M14.4 8.2 17 5.6l2.6 2.6"/>',
      title: 'The budget doubled. The question changed.',
      deck: 'AI spending is accelerating and CEOs have taken direct ownership of it. The hard part is no longer deployment. It is proving the return.',
      body: [
        {p: 'The numbers for 2026 are not ambiguous. Gartner projects AI model and platform spend reaching $64 billion, up 63% year on year, with generative AI up 117%. BCG reports enterprise AI budgets nearly doubling, to around 1.7% of revenue, and — the detail that matters most — under direct CEO ownership.'},
        {p: 'By the middle of the year, close to 75% of global CEOs were steering AI investment personally rather than delegating it to technology functions.'},
        {h: 'What CEO ownership actually changes'},
        {p: 'When a chief executive owns the budget, the reporting standard changes with it. A technology function can report adoption: seats provisioned, queries served, pilots launched. A chief executive reporting to a board cannot. They are asked what it returned.'},
        {p: 'This is why the framing has shifted from deployment to value. Deployment was the hard part when models were difficult to access and integrate. Both problems are largely solved. What is not solved is demonstrating, in the language of a P&amp;L, that the spend produced something.'},
        {q: 'Pilot counts and usage metrics are activity, not return. A board that accepts them as evidence is funding motion.'},
        {h: 'Treat it as a portfolio'},
        {p: 'The most useful reframing we see working is to stop treating the AI budget as a technology line and start treating it as a portfolio across four things: technology, data, talent and governance.'},
        {p: 'Most organisations are heavily overweight the first and underweight the other three. That imbalance is the mechanical reason the returns do not appear: the model arrives, and the data it needs is not ready, the people around it have not changed how they work, and there is no control allowing it to be trusted with anything that matters.'},
        {h: 'Tie the next tranche to an outcome'},
        {p: 'The discipline that separates the organisations getting returns is unglamorous. Continued investment is tied to financial outcomes rather than to pilot counts. Each tranche of funding is released against a number that someone has put their name to.'},
        {p: 'That is ordinary capital discipline. It is applied as a matter of course to a new plant or an acquisition, and it is very often suspended for AI on the grounds that the technology is new. The technology being new is exactly why the discipline is needed.'},
        {p: 'One test, before the next budget cycle: for every AI initiative currently funded, can you name the executive accountable and the financial line it moves? Where you cannot, you are not looking at an investment. You are looking at an experiment that has been running long enough to look like one.'}
      ]
    },

    {
      id: 'india',
      cat: 'Regulation',
      date: '2026-07-31',
      dateLabel: 'July 2026',
      read: 6,
      accent: '#7A5C8E',
      glyph: '<path d="M12 3v3M6.5 5.5 8.6 7.6M17.5 5.5 15.4 7.6"/><path d="M4 10h16"/><path d="M7 10v7M12 10v7M17 10v7"/><path d="M4.5 20h15"/>',
      title: 'India is writing deployment-first rules',
      deck: 'While the EU regulates by category of risk, India is regulating by sector and by point of use. For Indian enterprises that is the more immediate constraint.',
      body: [
        {p: 'Two regulatory philosophies are taking shape in parallel, and Indian enterprises are exposed to both.'},
        {p: 'The European Union has codified governance and transparency obligations in the AI Act, phasing in with prohibited uses first. It is horizontal: it classifies systems by risk category and applies obligations accordingly, regardless of industry.'},
        {p: 'India is doing something different. Rather than one horizontal statute, sector regulators are setting expectations at the point where AI is actually deployed. The Reserve Bank of India\'s draft model-risk guidance is the clearest example, and financial services will not be the last sector to receive one.'},
        {h: 'Why deployment-first is harder to prepare for'},
        {p: 'A horizontal regime lets an enterprise build one compliance programme and map every system into it. A deployment-first regime does not. The obligations arrive per sector, at different times, phrased in the language of that sector\'s existing supervision.'},
        {q: 'A single AI policy will not satisfy a sector regulator asking how a specific model behaves inside a specific control.'},
        {p: 'For a diversified group operating across financial services, healthcare and manufacturing, that means the same underlying model may sit under three different sets of expectations depending on which subsidiary is running it.'},
        {h: 'The state is also a builder'},
        {p: 'The regulatory picture cannot be separated from the industrial one. Capital has been committed to the IndiaAI Mission, MeitY is planning an AI-led overhaul of government IT, and sovereign model releases mark a shift from consuming AI to producing it. NITI Aayog has flagged the moment as an inflection point for India\'s technology services sector.'},
        {p: 'Stanford HAI tracks the same movement globally: a shift toward national AI sovereignty, with data-residency mandates from both the EU and MeitY reshaping where inference is allowed to happen. That is not only a legal question. It is an architectural one, and it is why hybrid and sovereign deployment has moved onto the CIO agenda.'},
        {h: 'What this means for an Indian board'},
        {p: 'Three things follow, and none of them wait for the final text of any rule.'},
        {ul: [
          'Know which sector regulator has jurisdiction over each AI system you run, and read what they have drafted rather than what has been enacted.',
          'Establish where your inference physically happens. If a regulated workload leaves the jurisdiction, that is a finding regardless of how the model performs.',
          'Validate vendor capability claims against independent benchmarks before committing capital, because a supervisor will not accept a vendor datasheet as evidence.'
        ]},
        {p: 'India is emerging as a deployment-first regulatory pole. For enterprises headquartered here, that is not a distant compliance exercise. It is the environment the next three years of AI investment will be supervised in.'}
      ]
    },

    {
      id: 'routing',
      cat: 'Architecture',
      date: '2026-07-31',
      dateLabel: 'July 2026',
      read: 5,
      accent: '#5F8A5A',
      glyph: '<circle cx="5" cy="12" r="2.4"/><circle cx="19" cy="6.5" r="2.4"/><circle cx="19" cy="17.5" r="2.4"/><path d="M7.3 11.1 16.7 7.4M7.3 12.9l9.4 3.7"/>',
      title: 'One model no longer fits',
      deck: 'Compute inflation and data-residency rules have made the single centralised model strategy untenable. Routing is now a budget decision.',
      body: [
        {p: 'For several years the sensible enterprise architecture was singular: choose the strongest available model, route everything through it, and let capability improvements arrive for free. Enterprise frameworks published this year by NVIDIA and Microsoft describe the end of that arrangement.'},
        {p: 'Two forces broke it. Compute costs rose faster than the budgets funding them, and regional data mandates — from the European Union and from India\'s Ministry of Electronics and Information Technology — made it unlawful in specific cases for a workload to be processed wherever it happened to be cheapest.'},
        {h: 'Workloads are splitting'},
        {p: 'What replaces it is a split. Frontier models in the cloud handle genuinely open-ended work. Cheaper private inference, running locally or inside a controlled boundary, handles the high-volume repetitive work that makes up most of an enterprise\'s actual query load.'},
        {p: 'This is now a budgeting question as much as a technical one. The difference between routing every query to a frontier model and routing only the queries that need one is, at enterprise volume, the difference between two very different annual numbers.'},
        {q: 'Sending every question to the largest available model is the AI equivalent of flying a courier business class. It works, and it is not a strategy.'},
        {h: 'Dynamic routing as a control'},
        {p: 'Dynamic model routing — deciding per request which model should answer — does two jobs at once. It controls infrastructure spend, and it keeps regulated material inside the jurisdiction it is required to stay in. Those two requirements happen to be satisfied by the same mechanism, which is unusual and worth exploiting.'},
        {p: 'The prerequisite is knowing what your query mix actually looks like. Most enterprises have never measured it, and are surprised by the answer: the overwhelming majority of production queries are narrow, repetitive and well within the reach of a far smaller model.'},
        {h: 'What to ask the technology function'},
        {ul: [
          'What proportion of our production queries genuinely require a frontier model, measured rather than assumed?',
          'Which workloads are legally required to remain in-jurisdiction, and can we prove today where they run?',
          'What would our annual inference cost be under routing, against what we are paying now?'
        ]},
        {p: 'The answers usually make the case on their own. Single-architecture, centralised model strategies are becoming financially and legally unsustainable for any firm operating across more than one jurisdiction — and hybrid is not a compromise position. It is the architecture that survives both the cost curve and the regulator.'}
      ]
    }
  ];

  /* ---------------- render ---------------- */
  var grid = document.getElementById('artGrid');
  if (!grid) return;

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  /* One row per briefing, separated by a rule rather than boxed. The mark
     on the left is a flat block of the article's own colour carrying a
     glyph that stands for its argument: no photography, because generic
     stock had nothing to do with any of these pieces. */
  function row(a, n) {
    var c = el('article', 'art-row');
    c.setAttribute('data-cat', a.cat);
    c.style.setProperty('--c', a.accent);
    c.innerHTML =
      '<button class="art-open" aria-label="Read: ' + a.title + '">' +
        '<span class="art-n">' + (n < 9 ? '0' : '') + (n + 1) + '</span>' +
        '<span class="art-mark" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24">' + a.glyph + '</svg>' +
        '</span>' +
        '<span class="art-body">' +
          '<span class="art-meta"><em>' + a.cat + '</em><i></i>' + a.dateLabel + '<i></i>' + a.read + ' min read</span>' +
          '<span class="art-title">' + a.title + '</span>' +
          '<span class="art-deck">' + a.deck + '</span>' +
        '</span>' +
        '<span class="art-go" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>' +
        '</span>' +
      '</button>';
    c.querySelector('.art-open').addEventListener('click', function () { open(a); });
    return c;
  }

  ARTICLES.forEach(function (a, i) { grid.appendChild(row(a, i)); });

  /* ---------------- reader ---------------- */
  var reader = document.getElementById('artReader');
  var readerBody = document.getElementById('artReaderBody');
  var lastFocus = null;

  function blocks(list) {
    return list.map(function (b) {
      if (b.h) return '<h3>' + b.h + '</h3>';
      if (b.q) return '<blockquote>' + b.q + '</blockquote>';
      if (b.ul) return '<ul>' + b.ul.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul>';
      return '<p>' + b.p + '</p>';
    }).join('');
  }

  function open(a) {
    if (!reader || !readerBody) return;
    lastFocus = document.activeElement;
    readerBody.style.setProperty('--c', a.accent);

    /* A signed piece leads with its author; our own reading notes lead with
       the house. Everything without a `by` keeps the old briefing line. */
    var label = a.label || 'AI Intelligence Briefing';
    var credit = (a.by ? 'By ' + a.by + ' &middot; ' : '') + 'STAIR Digital &middot; ' + label;

    readerBody.innerHTML =
      '<header class="ar-head">' +
        '<span class="ar-mark" aria-hidden="true"><svg viewBox="0 0 24 24">' + a.glyph + '</svg></span>' +
        '<p class="ar-meta"><em>' + a.cat + '</em><i></i>' + a.dateLabel + '<i></i>' + a.read + ' min read</p>' +
        '<h2>' + a.title + '</h2>' +
        '<p class="ar-deck">' + a.deck + '</p>' +
        '<div class="ar-byline">' + credit + '</div>' +
      '</header>' +
      '<div class="ar-copy">' + blocks(a.body) + '</div>';

    /* the print sheet is built from the same data, on the STAIR letterhead */
    var sheet = document.getElementById('artPrintBody');
    if (sheet) {
      sheet.innerHTML =
        '<p class="ap-kicker">' + label + ' &middot; ' + a.dateLabel +
          (a.by ? ' &middot; By ' + a.by : '') + '</p>' +
        '<h1>' + a.title + '</h1>' +
        '<p class="ap-deck">' + a.deck + '</p>' +
        '<div class="ap-copy">' + blocks(a.body) + '</div>';
    }

    reader.classList.add('open');
    reader.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (window.__lenis && window.__lenis.stop) window.__lenis.stop();
    readerBody.scrollTop = 0;
    var x = reader.querySelector('.ar-x');
    if (x) x.focus();
  }

  function close() {
    if (!reader) return;
    reader.classList.remove('open');
    reader.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (window.__lenis && window.__lenis.start) window.__lenis.start();
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  if (reader) {
    reader.querySelectorAll('[data-arclose]').forEach(function (b) {
      b.addEventListener('click', close);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && reader.classList.contains('open')) close();
    });
    var dl = document.getElementById('artDownload');
    if (dl) dl.addEventListener('click', function () { window.print(); });
  }
})();
