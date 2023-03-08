import { SlicePipe, UpperCasePipe } from '@angular/common';
import { Component, ViewChild, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnChanges {
  @ViewChild('audioPlayer', { static: false }) audioPlayer: any;
  @ViewChild('imagePoster') imagePoster: any;
  @ViewChild('songName') songName: any;
  @ViewChild('artistName') artistName: any;
  @Input() songDataUpdate: any;

  songData: any;

  ngOnChanges() {
    if (this.songDataUpdate === undefined) {
      return;
    } else {
      this.songData = this.songDataUpdate;
    }
    this.audioPlayer.nativeElement.src = this.songData.downloadUrl[4].link;
    this.imagePoster.nativeElement.src = this.songData.image[1].link;
    this.songName.nativeElement.innerHTML = this.songData.name;
    this.artistName.nativeElement.innerHTML = this.songData.primaryArtists;
    this.playSong();
    console.log(this.songData);
  }

  playSong() {
    this.audioPlayer.nativeElement.play();
  }

  pauseSong() {
    this.audioPlayer.nativeElement.pause();
  }

  stopSong() {
    this.audioPlayer.nativeElement.currentTime = 0;
    this.audioPlayer.nativeElement.pause();
  }
}
