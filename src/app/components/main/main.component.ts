import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  @Output() songDataEmitEvent = new EventEmitter<any>();

  songEventData: any;

  updateSongEventData(data: any) {
    this.songEventData = data;
    // console.log(this.songEventData);
  }

  songDataUpdate(data: any) {
    this.songDataEmitEvent.emit(data);
    // console.log(this.songUrl);
  }

  @Input() switchState = {
    switchAll: true,
    switchSong: false,
    switchArtist: false,
    switchAlbum: false,
    switchPlaylist: false,
  };
}
