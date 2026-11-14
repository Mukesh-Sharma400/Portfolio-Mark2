// All projects, keyed by URL slug (/projects/<slug>).
// The projects page lists them in this order; the home page shows `featuredProjectSlugs`.

import youtubeCloneThumbnail from "#/youtube-clone-thumbnail.webp";
import netflixCloneThumbnail from "#/netflix-clone-thumbnail.webp";
import memoriesWebappThumbnail from "#/memories-webapp-thumbnail.webp";
import ecommerceWebappThumbnail from "#/ecommerce-webapp-thumbnail.webp";
import dashboardWebappThumbnail from "#/dashboard-webapp-thumbnail.webp";
import mjInteriorThumbnail from "#/mj-interior-thumbnail.webp";
import primeVideoCloneThumbnail from "#/prime-video-clone-thumbnail.webp";
import socialNetworkThumbnail from "#/social-network-thumbnail.webp";
import stackOverflowCloneThumbnail from "#/stack-overflow-clone-thumbnail.webp";
import opinionTradingLeagueThumbnail from "#/opinion-trading-league-thumbnail.webp";
import npsMutualFundModuleThumbnail from "#/nps-mutual-fund-module-thumbnail.webp";

export const projects = {
  "nps-mutual-fund-module": {
    name: "NPS & Mutual Fund Module",
    intro: "Valuefy Technologies Pvt Ltd",
    description:
      "These modules enable clients to manage investments efficiently, providing secure onboarding and transaction processing for NPS investors, while ensuring stable and compliant Mutual Fund operations through workflow improvements and bug fixes.",
    image: npsMutualFundModuleThumbnail,
    tech: ["node", "loopback", "oracle-sql"],
    live: "/",
    source: "/",
    timeline: "03/2025 - Present",
    related: ["opinion-trading-league", "social-network"],
  },
  "opinion-trading-league": {
    name: "Opinion Trading & League",
    intro: "Playerzpot Media Pvt Ltd",
    description:
      "These modules enable clients to integrate an opinion-based experience into their systems, enhancing engagement and driving revenue through predictions on real-world events like sports and stocks.",
    image: opinionTradingLeagueThumbnail,
    tech: ["node", "express", "postgres-sql", "redis"],
    live: "/",
    source: "/",
    timeline: "05/2024 - 02/2025",
    related: ["social-network", "memories-webapp"],
  },
  "social-network": {
    name: "SocialNetwork Web App",
    intro: "Social Media Web Application",
    description:
      "Discover a powerful MERN stack social network app, fueled by MongoDB, ExpressJS, ReactJS, and NodeJS. Experience seamless media management with Cloudinary integration and efficient email communication through SendGrid Email API. Leveraging React Hooks, CORS, Context/RESTful API, and a plethora of other cutting-edge technologies, this app redefines the social networking landscape.",
    image: socialNetworkThumbnail,
    tech: ["mongo", "express", "react", "node"],
    live: "/",
    source: "/",
    timeline: "07/2022 - 09/2022",
    related: ["memories-webapp", "stack-overflow-clone"],
  },
  "memories-webapp": {
    name: "Memories Web App",
    intro: "Social Blog Web Application",
    description:
      "Experience the power of MERN stack in our Memories application! Harnessing MongoDB for data storage, ExpressJS for server-side development, ReactJS for dynamic user interfaces, and NodeJS for backend support. Integrated with Google OAuth for seamless login, Redux and Redux-Thunk for state management, and enhanced with React Hooks and CORS for flexibility. Delve into our rich feature set and unleash the potential of Context/RESTful API integration. Unleash your memories today!",
    image: memoriesWebappThumbnail,
    tech: ["mongo", "express", "react", "node"],
    live: "/",
    source: "/",
    timeline: "11/2022 - 12/2022",
    related: ["stack-overflow-clone", "youtube-clone"],
  },
  "stack-overflow-clone": {
    name: "Stack Overflow Clone",
    intro: "Copy of Stack Overflow Application",
    description:
      "Discover a powerful Stack Overflow clone built on the MERN stack. Harness the potential of MongoDB, ExpressJS, ReactJS, and NodeJS, combined with advanced features like Axios, Redux, Redux-Thunk, React Hooks, CORS, and Context/RESTful API integration. Enjoy a seamless experience in a feature-rich environment for all your coding queries and discussions.",
    image: stackOverflowCloneThumbnail,
    tech: ["mongo", "express", "react", "node"],
    live: "/",
    source: "/",
    timeline: "12/2022 - 01/2023",
    related: ["youtube-clone", "dashboard-webapp"],
  },
  "youtube-clone": {
    name: "YouTube Clone",
    intro: "Copy of YouTube Application",
    description:
      "The fully responsive YouTube Clone application built with React.js, the YouTube API, Axios, and Bootstrap aims to replicate the core functionality and user experience of YouTube while providing a seamless and intuitive interface for users to discover, watch, and engage with videos.",
    image: youtubeCloneThumbnail,
    tech: ["react", "bootstrap", "youtube-api", "axios"],
    live: "/",
    source: "/",
    timeline: "07/2023 - 08/2023",
    related: ["dashboard-webapp", "ecommerce-webapp"],
  },
  "dashboard-webapp": {
    name: "Dashboard Web App",
    intro: "Data Visualization Web Application",
    description:
      "Experience the ultimate MERN Stack Admin Dashboard - efficient, user-friendly, and powerful. Manage projects, visualize data with Nivo Charts, and enjoy seamless state management with Redux Toolkit. Our backend runs on Node JS, Express JS, Mongoose, and MongoDB, providing a robust foundation for your success. Take control of your data and productivity today!",
    image: dashboardWebappThumbnail,
    tech: ["mongo", "express", "react", "node"],
    live: "/",
    source: "/",
    timeline: "07/2023 - 08/2023",
    related: ["ecommerce-webapp", "prime-video-clone"],
  },
  "ecommerce-webapp": {
    name: "E-Commerce Web App",
    intro: "Shopping Web Application",
    description:
      "Experience seamless online shopping with our React-based e-commerce app. Powered by ReactJS, Firebase, and Firestore, it utilizes Context API, AJAX, and React Hooks for smooth interactions. With Express, CORS, NodeJS, and RESTful API integration, it ensures secure and efficient data management. Enjoy a user-friendly interface and hassle-free transactions.",
    image: ecommerceWebappThumbnail,
    tech: ["react", "firebase", "axios", "stripe"],
    live: "/",
    source: "/",
    timeline: "04/2022 - 06/2022",
    related: ["prime-video-clone", "netflix-clone"],
  },
  "prime-video-clone": {
    name: "Prime Video Clone",
    intro: "UI of Prime Video Landing Page",
    description:
      "Discover a captivating streaming experience with our Prime Video clone website. Crafted with HTML, CSS, and Javascript, it offers a vast library of movies and TV shows for your enjoyment. Immerse yourself in high-quality content, user-friendly navigation, and personalized recommendations, all within a sleek and intuitive interface. Start binge-watching today!",
    image: primeVideoCloneThumbnail,
    tech: ["html", "css", "javascript"],
    live: "/",
    source: "/",
    timeline: "11/2021 - 12/2021",
    related: ["netflix-clone", "mj-interior"],
  },
  "netflix-clone": {
    name: "Netflix Clone",
    intro: "UI of Netflix Landing Page",
    description:
      "Introducing our Netflix clone website! Built using HTML, CSS, and Javascript, this platform offers a seamless streaming experience. Enjoy a vast library of movies and TV shows, personalized recommendations, and user-friendly interface. Dive into the world of entertainment and binge-watch your favorite content at your convenience.",
    image: netflixCloneThumbnail,
    tech: ["html", "css", "javascript"],
    live: "/",
    source: "/",
    timeline: "10/2021 - 11/2021",
    related: ["mj-interior", "nps-mutual-fund-module"],
  },
  "mj-interior": {
    name: "MJ Interior",
    intro: "MJ Interior Company Website",
    description:
      "MJ Interior is a company of creative interior designers who have the ability to see the world through an aesthetic filter and transitioning the domain into the versions of their perspective, filled with captivating sights.",
    image: mjInteriorThumbnail,
    tech: ["nextjs", "styled-components", "react-hooks", "aos"],
    live: "/",
    source: "/",
    timeline: "02/2024 - 03/2024",
    related: ["nps-mutual-fund-module", "opinion-trading-league"],
  },
};

export const featuredProjectSlugs = [
  "nps-mutual-fund-module",
  "opinion-trading-league",
  "social-network",
  "memories-webapp",
];

// Shape expected by <ProjectCard />
export const toProjectCard = (slug) => ({
  name: projects[slug].name,
  image: projects[slug].image,
  href: `/projects/${slug}`,
  description: projects[slug].intro,
});

export const projectCards = Object.keys(projects).map(toProjectCard);
export const featuredProjectCards = featuredProjectSlugs.map(toProjectCard);
