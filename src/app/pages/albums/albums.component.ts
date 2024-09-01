import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  @Output() songDataEmitEvent = new EventEmitter<any>();
  likedSongData: any;

  ngOnInit() {
    const data = localStorage.getItem('likedSongData');
    if (data) {
      this.likedSongData = JSON.parse(data);
    }
    console.log(this.likedSongData);
  }

  playSong(data: any) {
    this.songDataEmitEvent.emit(data);
  }
}
