import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuerySearchService {
  constructor(private client: HttpClient) {}

  getAll(query: string) {
    return this.client.get(`https://saavn.me/search/all?query=${query}`);
  }

  getSong(query: string) {
    return this.client.get(
      `https://saavn.me/search/songs?query=${query}&page=1&limit=4`
    );
  }

  getArtist(query: string) {
    return this.client.get(`https://saavn.me/search/artists?query=${query}`);
  }

  getAlbum(query: string) {
    return this.client.get(`https://saavn.me/search/albums?query=${query}`);
  }

  getPlaylist(query: string) {
    return this.client.get(`https://saavn.me/search/playlists?query=${query}`);
  }
}
