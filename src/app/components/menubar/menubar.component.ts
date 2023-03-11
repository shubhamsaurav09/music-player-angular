import { Component, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent {
  @Output() routeEvent = new EventEmitter<any>();

  homeSwitch = {
    switchAll: true,
    switchSong: false,
    switchArtist: false,
    switchAlbum: false,
    switchPlaylist: false,
  };

  songSwitch = {
    switchAll: false,
    switchSong: true,
    switchArtist: false,
    switchAlbum: false,
    switchPlaylist: false,
  };

  artistSwitch = {
    switchAll: false,
    switchSong: false,
    switchArtist: true,
    switchAlbum: false,
    switchPlaylist: false,
  };

  albumSwitch = {
    switchAll: false,
    switchSong: false,
    switchArtist: false,
    switchAlbum: true,
    switchPlaylist: false,
  };

  playlistSwitch = {
    switchAll: false,
    switchSong: false,
    switchArtist: false,
    switchAlbum: false,
    switchPlaylist: true,
  };

  homeroute() {
    this.routeEvent.emit(this.homeSwitch);
  }

  songroute() {
    this.routeEvent.emit(this.songSwitch);
  }

  artistroute() {
    this.routeEvent.emit(this.artistSwitch);
  }

  albumroute() {
    this.routeEvent.emit(this.albumSwitch);
  }

  playlistroute() {
    this.routeEvent.emit(this.playlistSwitch);
  }
}
