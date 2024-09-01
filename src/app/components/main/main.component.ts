import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @Output() songDataEmitEvent = new EventEmitter<any>();

  songEventData: any;
  currentSong: any;
  routeToSongs: boolean = false;

  @Input() switchState = {
    switchAll: true,
    switchSong: false,
    switchArtist: false,
    switchAlbum: false,
    switchPlaylist: false,
  };

  updateSongEventData(data: any) {
    this.songEventData = data;
    this.routeToSongs = true;
    console.log(this.songEventData);
    console.log(this.routeToSongs);
  }

  songDataUpdate(data: any) {
    this.songDataEmitEvent.emit(data);
    this.currentSongData(data);
  }

  currentSongData(data: any) {
    this.currentSong = data;
  }
}
