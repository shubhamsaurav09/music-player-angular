import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @Output() songDataEmitEvent = new EventEmitter<any>();

  songEventData: any;
  currentSong: any;
  routeToPlayer: boolean = false;

  @Input() switchState = {
    switchAll: true,
    switchSong: false,
    switchArtist: false,
    switchAlbum: false,
    switchPlaylist: false,
  };

  // @HostListener('window:resize', ['$event'])
  // isSmallScreen: any;

  // getScreenWidth: any;

  // ngOnInit() {
  //   this.getScreenWidth = window.innerWidth;
  //   console.log('On Init');
  //   console.log(this.getScreenWidth);
  //   if (this.getScreenWidth < 769) {
  //     this.isSmallScreen = true;
  //   }
  //   this.isSmallScreen = false;
  // }

  updateSongEventData(data: any) {
    this.songEventData = data;

    // console.log(this.songEventData);
  }

  songDataUpdate(data: any) {
    this.songDataEmitEvent.emit(data);
    this.currentSongData(data);
  }

  currentSongData(data: any) {
    this.currentSong = data;
  }

  playerRouteUpdate(value: boolean) {
    this.routeToPlayer = value;
  }
}
