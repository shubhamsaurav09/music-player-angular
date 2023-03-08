import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  homeData: any;
  trendingSongs: any = [];
  trendingAlbums: any = [];

  constructor(private data: SearchService) {}

  ngOnInit() {
    this.data.getHomeData().subscribe((res) => {
      this.homeData = res;
      this.trendingSongs = this.homeData.data.trending.songs;
      this.trendingAlbums = this.homeData.data.trending.albums;
    });
  }
}
