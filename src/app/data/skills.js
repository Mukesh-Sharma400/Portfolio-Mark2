// Skills by category (About page), plus the short list shown on the home page.

import javascriptIcon from "#/javascript.webp";
import gitIcon from "#/git.webp";
import cssIcon from "#/css.webp";
import sqlIcon from "#/sql.webp";
import htmlIcon from "#/html.webp";
import nodejsIcon from "#/nodejs.webp";
import nextjsIcon from "#/nextjs.webp";
import agileIcon from "#/agile.webp";
import mongodbIcon from "#/mongodb.webp";
import redisIcon from "#/redis.webp";
import reactIcon from "#/react.webp";
import dockerIcon from "#/docker.webp";
import githubIcon from "#/github.webp";
import styledComponentsIcon from "#/styled-components.webp";
import jenkinsIcon from "#/jenkins.webp";
import expressIcon from "#/express.webp";
import angularIcon from "#/angular.webp";
import postmanIcon from "#/postman.webp";
import tailwindIcon from "#/tailwind.webp";
import materialUiIcon from "#/material-ui.webp";
import openshiftIcon from "#/openshift.webp";
import bitbucketIcon from "#/bitbucket.webp";
import bootstrapIcon from "#/bootstrap.webp";
import typescriptIcon from "#/typescript.webp";

export const skills = {
  frontend: [
    { name: "HTML", image: htmlIcon },
    { name: "CSS", image: cssIcon },
    { name: "JavaScript", image: javascriptIcon },
    { name: "TypeScript", image: typescriptIcon },
    { name: "ReactJS", image: reactIcon },
    { name: "NextJS", image: nextjsIcon },
    { name: "Angular", image: angularIcon },
    { name: "Styled", image: styledComponentsIcon },
    { name: "Material", image: materialUiIcon },
    { name: "Bootstrap", image: bootstrapIcon },
    { name: "Tailwind", image: tailwindIcon },
  ],
  backend: [
    { name: "NodeJS", image: nodejsIcon },
    { name: "ExpressJS", image: expressIcon },
    { name: "MongoDB", image: mongodbIcon },
    { name: "SQL", image: sqlIcon },
    { name: "Redis", image: redisIcon },
    // { name: "RESTful APIs", image: api }, // optional if you have an icon
    // { name: "Third-party Integrations", image: integration }, // optional
  ],
  devops: [
    { name: "Docker", image: dockerIcon },
    { name: "OpenShift", image: openshiftIcon },
    { name: "Jenkins", image: jenkinsIcon },
    { name: "Git", image: gitIcon },
    { name: "GitHub", image: githubIcon },
    { name: "Bitbucket", image: bitbucketIcon },
    { name: "Postman", image: postmanIcon },
    { name: "Agile", image: agileIcon },
    // { name: "API Testing", image: testing }, // optional if you have an icon
  ],
};

// Home page "Skills" strip (short labels to fit the layout)
export const featuredSkills = [
  { name: "Mongo", image: mongodbIcon },
  { name: "Express", image: expressIcon },
  { name: "React", image: reactIcon },
  { name: "Node", image: nodejsIcon },
  { name: "Next", image: nextjsIcon },
  { name: "Angular", image: angularIcon },
  { name: "SQL", image: sqlIcon },
];

// `className` values control the pill styling on the About page
export const interests = [
  { text: "Coding", className: "first" },
  { text: "Music", className: "" },
  { text: "Chess", className: "third" },
  { text: "Cricket", className: "fourth" },
  { text: "Football", className: "" },
  { text: "Pool", className: "last" },
];

export const languages = [
  { text: "English", className: "first" },
  { text: "Hindi", className: "" },
  { text: "Marathi", className: "last" },
];
