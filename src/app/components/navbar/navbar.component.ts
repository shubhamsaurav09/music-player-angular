import { Component, Input } from '@angular/core';
import { QuerySearchService } from 'src/app/services/query-search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() switchState = {
    switchAll: true,
    switchSong: false,
    switchArtist: false,
    switchAlbum: false,
    switchPlaylist: false,
  };

  searchAll: string = '';
  searchSong: string = '';
  searchArtist: string = '';
  searchAlbum: string = '';
  searchPlaylist: string = '';

  searchAllData: any;
  searchSongData: any;
  searchArtistData: any;
  searchAlbumData: any;
  searchPlaylistData: any;

  constructor(private search: QuerySearchService) {}

  requestAll(searchAll: string) {
    this.search.getAll(searchAll).subscribe((res) => {
      this.searchAllData = res;
      console.log(this.searchAllData);
    });
  }

  requestSong(searchSong: string) {
    this.search.getSong(searchSong).subscribe((res) => {
      this.searchSongData = res;
      console.log(this.searchSongData);
    });
  }

  requestArtist(searchArtist: string) {
    this.search.getArtist(searchArtist).subscribe((res) => {
      this.searchArtistData = res;
      console.log(this.searchArtistData);
    });
  }

  requestAlbum(searchAlbum: string) {
    this.search.getAlbum(searchAlbum).subscribe((res) => {
      this.searchAlbumData = res;
      console.log(this.searchAlbumData);
    });
  }

  requestPlaylist(searchPlaylist: string) {
    this.search.getPlaylist(searchPlaylist).subscribe((res) => {
      this.searchPlaylistData = res;
      console.log(this.searchPlaylistData);
    });
  }
}