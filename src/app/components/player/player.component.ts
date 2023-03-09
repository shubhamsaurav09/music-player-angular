import { Component, ViewChild, Input, OnChanges } from '@angular/core';
import {
  faHeart,
  faPlay,
  faPause,
  faStop,
} from '@fortawesome/free-solid-svg-icons';
import { LikedServiceService } from 'src/app/services/liked-service.service';

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

  faHeart = faHeart;
  faPlay = faPlay;
  faPause = faPause;
  faStop = faStop;

  songData: any;
  liked: boolean = true;

  constructor(private LikedServiceService: LikedServiceService) {}

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
    this.liked = false;
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

  addToCollection() {
    this.liked = true;
    var likedSongsDetails = {
      name: this.songData.name,
      image: this.songData.image[1].link,
      artists: this.songData.primaryArtists,
      downloadUrl: this.songData.downloadUrl[4].link,
      duration: this.songData.duration,
    };
    this.LikedServiceService.addLikedSong(likedSongsDetails);
  }
}
