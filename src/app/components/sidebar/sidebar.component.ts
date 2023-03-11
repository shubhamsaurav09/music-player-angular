import { Component, HostListener, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnChanges {
  @Input() songData: string = '';

  songDataUpdate: any;

  ngOnChanges() {
    if (this.songData === '') {
      return;
    } else {
      this.songDataUpdate = this.songData;
      // console.log(this.songUrlData);
    }
  }
}
