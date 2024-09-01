import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'music-app';
  songData: any;

  switchState = {
    switchAll: false,
    switchSong: true,
    switchArtist: false,
    switchAlbum: false,
    switchPlaylist: false,
  };

  updateSwitchState(data: any) {
    this.switchState = data;
  }

  songDataUpdate(data: any) {
    this.songData = data;
  }
}
