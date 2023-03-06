import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() switchState = {
    switchAll: true,
    switchSong: false,
    switchArtist: false,
    switchAlbum: false,
    switchPlaylist: false,
  };

  homeData: any;

  constructor(private data: SearchService) {}

  ngOnInit() {
    this.data.getHomeData().subscribe((res) => {
      this.homeData = res;
      console.log(this.homeData);
      console.log(this.homeData.data.trending.songs[0].name);
    });
  }
}
