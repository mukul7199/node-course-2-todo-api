import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css']
})
export class NavtabsComponent implements OnInit {
  navLinks = [
    { path: '/all', label: 'All' },
    { path: '/complete', label: 'Completed' },
    { path: '/incomplete', label: 'Incomplete' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
