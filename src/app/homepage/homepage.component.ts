import { Component, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Initialize the carousel
    $(document).ready(function () {
      $('#carouselExampleIndicators').carousel();
    });
  }
}
