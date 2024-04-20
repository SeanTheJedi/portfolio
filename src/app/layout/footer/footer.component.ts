import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  jump(section:any) {
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'})
  }

  

}
