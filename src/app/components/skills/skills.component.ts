import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  time: string;
  projects: Project[];
}

interface Project {
  name: string;
  url: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'ASP .NET C#',
      time: '4/1/2022',
      projects: [
        {
          name: 'DooFast - API Restaurante con arquitectura en capas',
          url: 'https://github.com/CarlorD527/DooFast',
        },
      ],
    },
    {
      name: '.NET 6 C#',
      time: '12/1/2021',
      projects: [
        {
          name: 'PawClues - API para aplicación que permite buscar mascotas perdidas',
          url: 'https://github.com/CarlorD527/PawClues-API.git',
        },
      ],
    },
    {
      name: '.NET 7 C# Docker',
      time: '2/1/2023',
      projects: [
        {
          name: 'Doofast 2.0 Dockerizado',
          url: 'https://github.com/CarlorD527/DooFast2.0.git',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.skills.forEach((skill) => {
      skill.time = this.calculatetime(skill.time);
    });
  }

  calculatetime(time: string): string {
    const date = new Date(time);
    const now = new Date();
    const diffDays = Math.ceil(
      Math.abs(now.getTime() - date.getTime()) / (1000 * 3600 * 24)
    );
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    let msg = '';
    if (years > 0) {
      msg += `${years} year${years !== 1 ? 's' : ''}`;
    }
    if (years > 0 && months > 0) {
      msg += ' and ';
    }
    if (months > 0) {
      msg += `${months} month${months !== 1 ? 's' : ''}`;
    }
    return msg;
  }
}
