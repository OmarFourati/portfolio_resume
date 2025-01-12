import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio_resume';
  skills = [
    { name: 'HTML', icon: 'assets/html.png' },
    { name: 'Tailwind CSS / CSS', icon: 'assets/css-3.png' },
    { name: 'JavaScript', icon: 'assets/js.png' },
    { name: 'TypeScript', icon: 'assets/typescript.png' },
    { name: 'Angular', icon: 'assets/programing.png' },
    { name: 'React', icon: 'assets/physics.png' },
    { name: 'Node.js', icon: 'assets/nodejs.png' },
    { name: 'Amazon Web Services', icon: 'assets/aws-brands-solid.svg' },
    { name: 'REST API / SQL /NO SQL', icon: 'assets/api.png' },
    { name: 'Agile Development', icon: 'assets/agile.png' },
    { name: 'Python', icon: 'assets/python.png' },
    { name: 'Git', icon: 'assets/social.png' },
  ];

  projects = [
    {
      title: 'Vivian Framework',
      description:
        'University project. Framework for deploying and testing virtual prototypes of technical devices',
      image: 'assets/vivian-framework.png',
      technologies: ['HTML', 'CSS', 'Unity', 'C#'],
      githubLink:
        'https://gitlab.com/usability-engineering-ar-mr-vr/vivian-framework/vivian-windows-test-project',
      liveLink: 'https://vivian-framework-3ff70.web.app/home',
    },
    {
      title: 'Jayvee',
      description:
        'Work on a university project developed for Data Engineering and Pipelining. Jayvee is a domain-specific language (DSL) for automated processing of data pipelines',
      image: 'assets/jayvee.png',
      technologies: ['Typescript', 'Javascript', 'Python'],
      githubLink: 'https://github.com/jvalue/jayvee',
      liveLink: 'https://jvalue.github.io/jayvee/',
    },
    {
      title: 'Simplified Bunco',
      description:
        'Project developed for university within the "Applied System Software" course. The goal was to understand software engineering and develop a project by going through all the crucial steps. (Requirements, User Stories, Software Architecture, Software Testing and Dev.)',
      image: 'assets/bunco.png',
      technologies: ['React', 'Typescript', 'HTML', 'CSS'],
      githubLink: 'https://github.com/OmarFourati/DIP392-Simplified-Bunco',
      liveLink: 'https://simplified-bunco.netlify.app/',
    },
    {
      title: 'Nodrama.ai',
      description:
        'Master Thesis Project: An AI Compliance tool, designed to identify and validate compliance within the EU AI Act rules and standards. Customer should input their use cases and the tool will generate a report of any inconsistencies or non-compliance.',
      image: 'assets/nodrama.png',
      technologies: [
        'Angular',
        'Typescript',
        'Javascript',
        'HTML',
        'CSS',
        'Python',
        'Firebase Database',
      ],
      githubLink: '',
      liveLink: '',
    },
  ];
  certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'May 2023',
      logo: 'assets/aws-logo.png',
      link: 'https://www.credly.com/badges/your-badge-id',
    },
    {
      name: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      date: 'June 2023',
      logo: 'assets/microsoft-logo.png',
      link: 'https://www.credly.com/badges/your-badge-id',
    },
    {
      name: 'Google Cloud Certified - Associate Cloud Engineer',
      issuer: 'Google Cloud',
      date: 'July 2023',
      logo: 'assets/google-cloud-logo.png',
      link: 'https://www.credential.net/your-credential-id',
    },
    // Add more certifications as needed
  ];
}
