import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  socialLink = [
    {platform: 'GitHub', url:'https://github.com/oarodriguez29', icon:'fab fa-github' },    
    {platform: 'Instagram', url:'https://www.instagram.com/oarodriguez.s/', icon:'fab fa-instagram' }
  ]

}
