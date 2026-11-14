// Work experience and certificates (Experience page).
// `roleShort` is shown on narrow screens when a role name is too long.

import valuefyLogo from "#/valuefy-logo.webp";
import playerzpotLogo from "#/playerzpot-logo.webp";
import nullclassLogo from "#/nullclass-logo.webp";
import hasbasoftLogo from "#/hasbasoft-logo.webp";
import appAvengersLogo from "#/app-avengers-logo.webp";
import certificateNetflix from "#/certificate-of-netflix.webp";
import certificateTraining from "#/certificate-of-training.webp";
import certificateDiceGame from "#/certificate-of-dice-game.webp";
import certificateEcommerce from "#/certificate-of-ecommerce.webp";
import certificateInternship from "#/certificate-of-internship.webp";
import certificateMusicWithJs from "#/certificate-of-music-with-js.webp";

export const experiences = [
  {
    company: "Valuefy Technologies Pvt Ltd",
    image: valuefyLogo,
    alt: "Valuefy Technologies Pvt Ltd",
    period: "03/2025 - Present",
    role: "Software Development Engineer",
    location: "Thane",
    content: [
      "Delivered backend solutions for the <b>National Pension System (NPS) onboarding module</b>, and provided <b>enhancements & maintenance</b> for the <b>Mutual Fund processing module</b>.",
      "Built and optimized <b>RESTful APIs</b> for user <b>onboarding, data validation, and external client interactions</b>.",
      "Integrated with <b>third-party APIs</b> to securely <b>fetch and process financial/transactional data</b>.",
      "Managed <b>application deployment and scaling on OpenShift</b>, ensuring <b>high availability and reliability</b>.",
      "Performed <b>Oracle database administration</b> and <b>query optimization</b> for <b>large-scale financial datasets</b>.",
      "Diagnosed and resolved <b>network-related issues</b> impacting <b>application connectivity and performance</b>.",
      "Provided <b>end-to-end maintenance & production support</b>, ensuring <b>smooth operation of critical financial workflows</b>.",
    ],
  },
  {
    company: "Playerzpot Media Pvt Ltd",
    image: playerzpotLogo,
    alt: "Playerzpot Media Pvt Ltd",
    period: "05/2024 - 02/2025",
    role: "Software Development Engineer",
    location: "Vashi",
    content: [
      "Delivered backend solutions for two major projects: <b>Opinion</b>, featuring <b>Trading</b> and <b>League</b> modules, and <b>Stock Saga</b>.",
      "Designed and deployed several <b>RESTful APIs</b>, ensuring high performance and seamless integration with frontend systems.",
      "Enhanced server response times by <b>10-20%</b> through caching, query optimization and load balancing.",
      "Conducted <b>weekly code reviews</b>, fostering clean code practices and mentoring team members.",
      "Engineered a <b>scalable and resilient backend API</b> structure to ensure high availability, achieving <b>seamless performance under heavy user concurrency</b>.",
      "Handled <b>production deployment and monitoring</b>, ensuring high availability and reliability in a live environment.",
    ],
  },
  {
    company: "AppAvengers Labs Pvt Ltd",
    image: appAvengersLogo,
    alt: "AppAvengers Labs Pvt Ltd",
    period: "07/2023 - 04/2024",
    role: "Junior Web Developer",
    location: "Remote",
    content: [
      "Contributed to web app development using <b>Next.js</b>, <b>Angular</b>, and <b>Web3 technologies</b>.",
      "Successfully delivered <b>3-4 different domain projects</b>, designing user interfaces and implementing core features.",
      "Enhanced application <b>performance and usability</b> through efficient coding practices.",
      "Participated in <b>code reviews</b> to ensure quality and foster continuous learning.",
      "Creating <b>responsive web applications</b>, delivering a seamless user experience across all devices.",
    ],
  },
  {
    company: "NullClass",
    image: nullclassLogo,
    alt: "NullClass",
    period: "12/2022 - 01/2023",
    role: "Project Intern",
    location: "Remote",
    content: [
      "Developed a responsive <b>MERN stack app</b> (Stack Overflow Clone) with advanced features like a <b>chat bot</b> and <b>community section</b>.",
      "Enhanced skills in <b>React.js</b>, <b>Node.js</b>, <b>Express.js</b>, and <b>MongoDB</b>.",
      "Gained experience in building <b>scalable</b> and <b>user-centric web applications</b>.",
      "Deployed both the <b>frontend</b> and <b>backend</b> on servers, ensuring <b>seamless integration</b> and optimal performance.",
      "Successfully launched the application, making it <b>live and accessible</b> on the internet for users.",
    ],
  },
  {
    company: "Hasbasoft Technology Pvt Ltd",
    image: hasbasoftLogo,
    alt: "Hasbasoft Technology Pvt Ltd",
    period: "08/2021 - 10/2022",
    role: "MERN Stack Software Trainee",
    roleShort: "MERN Software Trainee",
    location: "Online",
    content: [
      "Developed several <b>MERN stack applications</b>, including a dynamic e-commerce platform.",
      "Enhanced skills in <b>React.js</b>, <b>Node.js</b>, <b>Express.js</b>, and <b>MongoDB</b>, gaining hands-on experience in building scalable applications.",
      "Worked in a <b>professional development environment</b>, implementing best practices and modern web development techniques.",
      "Designed and developed <b>user-friendly interfaces</b>, ensuring optimal performance and responsiveness.",
      "Collaborated with mentors to refine coding skills and understand advanced <b>software development processes</b>.",
      "Participated in <b>code reviews</b> and gained exposure to <b>real-world project management workflows</b>.",
    ],
  },
];

export const experienceCertificates = [
  {
    title: "Certificate of Internship",
    image: certificateInternship,
    alt: "Certificate of Internship",
    description:
      "I successfully completed a MERN stack web development internship, earning a certification that demonstrates my proficiency in building dynamic web applications using MongoDB, Express.js, React.js, and Node.js.",
  },
  {
    title: "Certificate of Training",
    image: certificateTraining,
    alt: "Certificate of Training",
    description:
      "I have successfully completed a comprehensive MERN stack web development training program, acquiring in-depth knowledge and skills in MongoDB, Express.js, React, and Node.js.",
  },
  {
    title: "E-Commerce Portal",
    image: certificateEcommerce,
    alt: "E-Commerce Portal",
    description:
      "I have received a certification in MERN stack web development, specializing in creating and maintaining e-commerce portal web applications with expertise in MongoDB, Express.js, React.js, and Node.js.",
  },
  {
    title: "Dice Game",
    image: certificateDiceGame,
    alt: "Dice Game",
    description:
      "Certification obtained for advanced JavaScript-based dice game web application. Demonstrating proficiency in developing interactive and engaging gaming experiences using JavaScript and related technologies.",
  },
  {
    title: "Music in JavaScript",
    image: certificateMusicWithJs,
    alt: "Music in JavaScript",
    description:
      "Certification of music player web application in advanced JavaScript. Verified proficiency in developing interactive and seamless music players, utilizing advanced JavaScript techniques for enhanced user experience.",
  },
  {
    title: "Netflix Like Frontend",
    image: certificateNetflix,
    alt: "Netflix Like Frontend",
    description:
      "Certification received for creating a Netflix clone web application using HTML and CSS, demonstrating proficiency in frontend development and UI design.",
  },
];
