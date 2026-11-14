// Single source of truth for personal details, navigation and social links.
// Edit values here and every page/component that uses them updates together.

export const profile = {
  name: "Mukesh Sharma",
  title: "Full Stack Developer",
  email: "mksh400@gmail.com",
  phone: "+917021739604",
  phoneDisplay: "+91 7021739604",
  siteUrl: "https://mukesh-sharma.vercel.app",
  twitterHandle: "@mukesh_sharma36",
  description:
    "Experienced Full stack developer specializing in creating robust and scalable web applications. Passionate about delivering high-quality solutions to meet client needs.",
};

export const routes = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/education", label: "Education" },
  { path: "/experience", label: "Experience" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/contact", label: "Contact" },
];

export const socialLinks = [
  {
    className: "bi bi-github",
    href: "https://github.com/Mukesh-Sharma400",
    tooltip: "GitHub",
    ariaLabel: "GitHub",
  },
  {
    className: "bi bi-linkedin",
    href: "https://www.linkedin.com/in/mukesh-sharma-dev",
    tooltip: "LinkedIn",
    ariaLabel: "LinkedIn",
  },
  {
    className: "bi bi-twitter-x",
    href: "https://twitter.com/mukesh_sharma36",
    tooltip: "Twitter / X",
    ariaLabel: "Twitter / X",
  },
  {
    className: "bi bi-facebook",
    href: "https://www.facebook.com/MukeshSharma400",
    tooltip: "Facebook",
    ariaLabel: "Facebook",
  },
  {
    className: "bi bi-instagram",
    href: "https://www.instagram.com/mukesh_sharma400",
    tooltip: "Instagram",
    ariaLabel: "Instagram",
  },
  {
    className: "bi bi-threads",
    href: "https://www.threads.net/mukesh_sharma400",
    tooltip: "Threads",
    ariaLabel: "Threads",
  },
];
