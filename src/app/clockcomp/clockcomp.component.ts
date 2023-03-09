import { Component } from '@angular/core';

@Component({
  selector: 'app-clockcomp',
  templateUrl: './clockcomp.component.html'
})
export class ClockcompComponent {
  currentTime: Date = new Date();
  

  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

}
