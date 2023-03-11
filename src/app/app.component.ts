import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // public screenWidth: any;
  // public screenHeight: any;

  // ngOnInit() {
  //   this.screenWidth = window.innerWidth;
  //   this.screenHeight = window.innerHeight;
  // }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   this.screenWidth = window.innerWidth;
  //   this.screenHeight = window.innerHeight;
  // }

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
