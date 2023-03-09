import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LikedServiceService {
  private likedSongData: any[] = [];

  constructor() {}

  addLikedSong(songData: any) {
    this.likedSongData.push(songData);
    localStorage.setItem('likedSongData', JSON.stringify(this.likedSongData));
  }
}
