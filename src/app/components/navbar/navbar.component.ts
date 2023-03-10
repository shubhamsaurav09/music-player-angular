import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuerySearchService } from 'src/app/services/query-search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() songEmitEvent = new EventEmitter<any>();

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

  requestAll(searchSong: string) {
    // Here, temporarily I have change searchAll, searchAlbum to searchSong
    // this.search.getAll(searchAll).subscribe((res) => {
    //   this.searchAllData = res;
    // });
    this.search.getSong(searchSong).subscribe((res) => {
      this.searchSongData = res;
      this.songEmitEvent.emit(this.searchSongData);
    });
  }

  requestSong(searchSong: string) {
    this.search.getSong(searchSong).subscribe((res) => {
      this.searchSongData = res;
      this.songEmitEvent.emit(this.searchSongData);
    });
  }

  requestArtist(searchArtist: string) {
    this.search.getArtist(searchArtist).subscribe((res) => {
      this.searchArtistData = res;
    });
  }

  requestAlbum(searchSong: string) {
    this.search.getSong(searchSong).subscribe((res) => {
      this.searchSongData = res;
      this.songEmitEvent.emit(this.searchSongData);
    });
  }

  requestPlaylist(searchPlaylist: string) {
    this.search.getPlaylist(searchPlaylist).subscribe((res) => {
      this.searchPlaylistData = res;
    });
  }
}
