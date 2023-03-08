import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'music-app';
  songData: any;

  switchState = {
    switchAll: true,
    switchSong: false,
    switchArtist: false,
    switchAlbum: false,
    switchPlaylist: false,
  };

  updateSwitchState(data: any) {
    this.switchState = data;
    // console.log(this.switchState);
  }

  songDataUpdate(data: any) {
    this.songData = data;
    // console.log(this.songUrl);
  }
}
