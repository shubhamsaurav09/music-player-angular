import {
  Component,
  ViewChild,
  Input,
  OnChanges,
} from '@angular/core';
import {
  faHeart,
  faPlay,
  faPause,
  faStop,
} from '@fortawesome/free-solid-svg-icons';
import { LikedServiceService } from 'src/app/services/liked-service.service';

@Component({
  selector: 'app-main-player',
  templateUrl: './main-player.component.html',
  styleUrls: ['./main-player.component.scss'],
})
export class MainPlayerComponent implements OnChanges {
  @ViewChild('mainAudioPlayer', { static: true }) mainAudioPlayer: any;
  @ViewChild('mainImagePoster') mainImagePoster: any;
  @ViewChild('mainSongName') mainSongName: any;
  @ViewChild('mainArtistName') mainArtistName: any;
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
      console.log(this.songData);
    }
    this.mainAudioPlayer.nativeElement.src = this.songData.downloadUrl[4].link;
    this.mainImagePoster.nativeElement.src = this.songData.image[1].link;
    this.mainSongName.nativeElement.innerHTML = this.songData.name;
    this.mainArtistName.nativeElement.innerHTML = this.songData.primaryArtists;
    this.liked = false;
    this.playSong();
    console.log(this.songData);
  }

  playSong() {
    this.mainAudioPlayer.nativeElement.play();
  }

  pauseSong() {
    this.mainAudioPlayer.nativeElement.pause();
  }

  stopSong() {
    this.mainAudioPlayer.nativeElement.currentTime = 0;
    this.mainAudioPlayer.nativeElement.pause();
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
