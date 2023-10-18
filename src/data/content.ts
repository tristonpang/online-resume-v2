import NusLogo from "../resources/images/nus_logo.png";
import CaptLogo from "../resources/images/capt_logo.png";
import NocLogo from "../resources/images/noc.png";
import NebTreeLogo from "../resources/images/nebtree_logo.png";
import SteadyLogo from "../resources/images/steady_logo.png";
import TempestLogo from "../resources/images/tempest.jpg";
import SpanLogo from "../resources/images/span_logo.png";
import BlueSgLogo from "../resources/images/bluesg_logo.png";
import Captslock from "../resources/images/captslock.jpg";
import Orbital from "../resources/images/intheloop.png";
import Csc from "../resources/images/csc.jpg";

export const education = [
  {
    image: NusLogo,
    title: "National University of Singapore",
    subtitle: "Bachelor's in Computing (Hons), Computer Science",
    duration: "2017 - 2021",
  },
  {
    image: NocLogo,
    title: "NUS Overseas Colleges - Silicon Valley",
    subtitle: "Batch 36",
    duration: "2019 - 2020",
    description:
      "Year-long Internship/Entrepreneurship Course in start-ups based in Silicon Valley. While working for a Silicon Valley startup, I was also enrolled in Stanford University, taking entrepreneurship courses under a non-graduating option.",
  },
  {
    image: CaptLogo,
    title: "College of Alice & Peter Tan (CAPT)",
    subtitle: "University Town College Programme",
    duration: "2017 - 2019",
    description:
      "Through its multidisciplinary curriculum, the UTCP helps students develop effective communications and strong writing skills, critical thinking skills, and intellectual breadth and rigour to tackle the complex, inter-related challenges confronting the world today. A host of informal learning activities, such as talks by distinguished visitors, as well as social and sporting activities, complements the formal curriculum.",
  },
];

export const work = [
  {
    image: BlueSgLogo,
    title: "BlueSG",
    subtitle: "Backend Engineer",
    duration: "Apr 2023 - Present",
    description:
      "BlueSG is a car-sharing rental service that operates in Singapore that distinguishes itself from its competitors by having a fully electric vehicle fleet, and by being the only point A to B service that exists in Singapore. I joined the team as the 2nd backend engineer as they were expanding their local engineering team to carry out a full backend platform rebuild in order to improve performance and to reduce reliability on existing external software contractors. Throughout my time in BlueSG, I worked under the lead backend engineer, and had close support and mentorship, learning not just how to work fast and to make things work, but to structure my systems in modular and extendible ways to aid development and reduce technical debt in the future. Working as a backend engineer here, I was placed in charge of developing multiple microservices, as well as the creation and deployment of the rental microservice from scratch. Wanting to learn more about TDD and the importance of testing, I also wrote and structured comprehensive unit, integration, end-to-end, and acceptance tests to achieve a minimum of 80% code coverage before any changes would be deployed to staging and production environments. At BlueSG, I truly learnt to think long term, to think about maintainability and modularity, and to factor those considerations in as I made important architectural design decisions as we worked to implement the new backend system.",
  },
  {
    image: TempestLogo,
    title: "Tempest",
    subtitle: "Software Engineer (Backend)",
    duration: "Jan 2021 - Mar 2023",
    description:
      "Tempest specialises in products focused on internet and data privacy - such as anonymous search, browser, VPN and second-phone apps. I was the first backend engineer hired by the team in charge of Tempest's second-phone app - Phoner. There I worked directly under the CTO, who shortly after proceeded to hand over the development and maintenance of the backend to me after deciding to focus on a different product. From there, I spearheaded development of backend features - such as converting our systems to support eSIMs, integrating payment providers, and providing an unlimited payment model system. I also oversaw major software architectural decisions and refactoring, as we moved from monolithic to microservices architecture, as well as a production environment database upgrade and migration. My time at Tempest brought me through some great challenges. While it may have been a trial by fire, I have grown much from being placed in charge of an entire backend system, as well as taking charge of planning and structuring backend architecture as well.",
  },
  {
    image: SpanLogo,
    title: "Span.io",
    subtitle: "Software Engineer Intern (Full-stack)",
    duration: "Aug 2019 - Jul 2020",
    description:
      "Span.io is a San Francisco based start-up that advances clean energy adoption with innovative hardware that replaces the electrical panel. Their main product is a smart panel that acts as the energy hub for a household, allowing users to remotely control and monitor their energy production/consumption, and is easy to install and integrate with existing electrical infrastructure, solar panels, and backup batteries. While working at Span for a year, I learned to work in a fast-paced start-up environment in a foreign country. Although I was only an intern, I filled many roles in the company that I never expected to fill. I was placed in charge of the company's panel installation mobile app. Developed with React Native, I created the entire frontend from scratch within 3 weeks in order to meet the deadline for the company's product launch. Following this I continued to maintain and develop the company's mobile applications, kickstarted and maintained CI/CD pipelines, and also wrote test scripts for both software and hardware.",
  },
  {
    image: NebTreeLogo,
    title: "NebulasTree",
    subtitle: "Software Developer Intern",
    duration: "Dec 2018 - Jan 2019",
    description:
      "NebulasTree is a start-up that specialises in software engineering and cybersecurity. In my time as an intern there, I was tasked to develop a One-Time Password (OTP) mobile authenticator system for iOS platforms. In the span of a month, I created from scratch the client-side aspect of the system, despite being unfamiliar with Swift and Xcode. I think on my feet, and I took up this job to challenge myself and learn something new in a short period of time.",
  },
  {
    image: NusLogo,
    title: "National University of Singapore",
    subtitle: "Teaching Assistant",
    duration: "Jan 2018 - Dec 2020",
    description:
      "I have conducted lessons for two modules in NUS: CS2030 Programming Methodology II and CS2103/T Software Engineering. Tutoring for CS2030 involved preparing lesson materials and conducting lab sessions, while in CS2103/T I was placed in charge of two student teams, and was responsible for the grading and guidance of the software engineering projects that each team was developing. Tutoring is meaningful to me, as it allows me to revise and refine my existing skills, as well as to pass down knowledge and help fellow aspiring developers.",
  },
  {
    image: SteadyLogo,
    title: "Steady",
    subtitle: "Lead Developer",
    duration: "Sep 2018 - May 2019",
    description:
      "Steady is a lifestyle marketplace mobile application catered to the hearing impaired. The idea was first formulated during a hackathon, and then developed into a social enterprise.",
  },
];

export const projects = [
  {
    image: Captslock,
    title: "CAPTs_Lock",
    subtitle: "Founder",
    duration: "Dec 2017 - Present",
    description:
      "CAPTs_Lock is a interest group in the College of Alice & Peter Tan that seeks to educate and empower with technology and programming. Through CAPTs_Lock, I have spearheaded and developed multiple initiatives. We developed a portable electronic registration system that keeps track of attendance via QR code scanning, now adopted by the College for all events requiring registration. We also worked on software to aid with residence allocation for incoming students.",
  },
  {
    image: Orbital,
    title: "NUS Orbital",
    subtitle: "Participant",
    duration: "May 2018 - Aug 2018",
    description:
      "Orbital is an independent software development project offered by NUS. Under this project, I developed a mobile application called InTheLoop – a student event planning and management system. This application is currently being adapted for use in CAPT.",
  },
  {
    image: Csc,
    title: "CAPT College Students' Committee",
    subtitle: "Director of Publicity",
    duration: "May 2018 - May 2019",
    description:
      "The College Students’ Committee represents the college’s student body and addresses their needs. As the Director of Publicity, I oversaw dynamics of student life and managed publicity campaigns, materials and the corporate image of the College. I led a team of 22 student leaders and oversaw their personal development as well.",
  },
];

export const programming = [
  {
    skill: "JavaScript/TypeScript",
    level: 3,
  },
  {
    skill: "Python",
    level: 3,
  },
  {
    skill: "Java",
    level: 3,
  },
  {
    skill: "C",
    level: 2,
  },
  {
    skill: "Swift",
    level: 1,
  },
];

export const web = [
  {
    skill: "React.js",
    level: 3,
  },
  {
    skill: "Node.js",
    level: 3,
  },
  {
    skill: "HTML",
    level: 3,
  },
  {
    skill: "CSS",
    level: 3,
  },
];

export const mobile = [
  {
    skill: "React Native",
    level: 3,
  },
  {
    skill: "Android",
    level: 1,
  },
  {
    skill: "iOS",
    level: 1,
  },
];

export const api = [
  {
    skill: "REST",
    level: 3,
  },
  {
    skill: "GraphQL",
    level: 3,
  },
];

export const database = [
  {
    skill: "SQL",
    level: 3,
  },
  {
    skill: "MongoDB",
    level: 1,
  },
];

export const operatingSystems = [
  {
    skill: "MacOS",
    level: 3,
  },
  {
    skill: "Unix",
    level: 3,
  },
  {
    skill: "Windows",
    level: 3,
  },
];

export const spokenLanguages = [
  {
    skill: "English",
    level: 3,
  },
  {
    skill: "Mandarin",
    level: 2,
  },
];
