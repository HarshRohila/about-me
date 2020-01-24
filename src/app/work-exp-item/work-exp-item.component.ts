import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-exp-item',
  templateUrl: './work-exp-item.component.html',
  styleUrls: ['./work-exp-item.component.scss']
})
export class WorkExpItemComponent implements OnInit {
  @Input() jobTitle = 'Job Title';
  @Input() orgName = 'Organisation Name';
  @Input() desc = 'Description';

  constructor() { }

  ngOnInit() {
  }

}
