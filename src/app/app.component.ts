import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'music-app';

  switchState = {
    switchAll: true,
    switchSong: false,
    switchArtist: false,
    switchAlbum: false,
    switchPlaylist: false,
  };

  updateSwitchState(data: any) {
    this.switchState = data;
    console.log(this.switchState);
  }
}
