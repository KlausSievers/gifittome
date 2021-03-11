import { Component, OnInit } from '@angular/core';
import {TitleService} from '../title.service';

@Component({
  selector: 'app-data-privacy',
  templateUrl: './data-privacy.component.html',
  styleUrls: ['./data-privacy.component.scss']
})
export class DataPrivacyComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Data Privacy');
  }

}
