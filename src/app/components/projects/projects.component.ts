import { Component, OnInit } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Sigebin',
      description: '',
      image: '',
      link: ''
    },
    {
      title: 'Intranet',
      description: '',
      image: '',
      link: ''
    },
    {
      title: 'web institucional',
      description: '',
      image: '',
      link: ''
    },
  ];

  ngOnInit(): void {
    
  }

  viewProject(link: string): void {
    window.open(link, '_blank');
  }

}
