// Education history and certificates (Education page).
// `degreeShort` / `collegeShort` are shown on narrow screens.

import scctLogo from "#/scct-logo.webp";
import paceLogo from "#/pace-logo.webp";
import tilakLogo from "#/tilak-logo.webp";
import certificateBrainStorm from "#/certificate-of-brain-storm.webp";
import certificateAptitudeTest from "#/certificate-of-aptitude-test.webp";

export const educations = [
  {
    degree: "Bachelor's in Information Technology",
    degreeShort: "Bachelor's in I.T.",
    image: scctLogo,
    alt: "Sanpada College of Commerce & Technology",
    period: "09/2020 - 05/2023",
    college: "Sanpada College of Commerce & Technology",
    collegeShort: "S.C.C.T.",
    location: "Sanpada",
    content:
      "I always had a passion for web development and acquired skills in various web technologies. I have created many websites, which impressed all my colleagues and professors. I became a sought-after web developer, proving that hard work and dedication can lead to success.",
  },
  {
    degree: "Higher School Certification",
    degreeShort: "H.S.C.",
    image: paceLogo,
    alt: "Pace Education Society",
    period: "06/2016 - 05/2018",
    college: "Pace Education Society",
    location: "Nerul",
    content:
      "I was always fascinated by the mysteries of the universe. Despite not being the smartest student in my class, I spent every free moment delving into books and videos on cosmology and astrophysics.",
  },
  {
    degree: "Secondary School Certification",
    degreeShort: "S.S.C.",
    image: tilakLogo,
    alt: "Tilak International School",
    period: "06/2015 - 03/2016",
    college: "Tilak International School",
    location: "Ghansoli",
    content:
      "I always had a keen interest in computers and technology. I used to participate in a school computer science competition despite my lack of confidence. I studied hard, boosting my confidence and setting me on a path towards a successful career in technology.",
  },
];

export const educationCertificates = [
  {
    title: "Certificate of Brain Storm",
    image: certificateBrainStorm,
    alt: "Certificate of Brain Storm",
    description:
      "During my second year of my Bachelor's, I participated in the Brain Storm event, a competitive academic challenge designed to test and enhance problem-solving and critical thinking skills. I successfully secured a Certificate of Appreciation by scoring 80%, reflecting my strong analytical abilities and dedication to continuous learning in the field of IT.",
  },
  {
    title: "Certificate of Aptitude Test",
    image: certificateAptitudeTest,
    alt: "Certificate of Aptitude Test",
    description:
      "During my first year of my Bachelor's, I took part in an Aptitude Test designed to evaluate logical reasoning, quantitative skills, and problem-solving abilities. I achieved an impressive score of 93%, earning a Certificate of Appreciation. This accomplishment underscores my strong analytical skills, quick thinking, and proficiency in handling challenging scenarios.",
  },
];
