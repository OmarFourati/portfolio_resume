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
    { name: 'REST API', icon: 'assets/api.png' },
    { name: 'Agile Development', icon: 'assets/agile.png' },
    { name: 'Python', icon: 'assets/python.png' },
    { name: 'Git', icon: 'assets/social.png' },
  ];
}
