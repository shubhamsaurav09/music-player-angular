import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuerySearchService {
  constructor(private client: HttpClient) {}

  getAll(query: string) {
    return this.client.get(`https://saavn.dev/api/search?query=${query}`);
  }

  getSong(query: string) {
    return this.client.get(
      `https://saavn.dev/api/search/songs?query=${query}&page=1&limit=10`
    );
  }

  getArtist(query: string) {
    return this.client.get(
      `https://saavn.dev/api/search/artists?query=${query}`
    );
  }

  getAlbum(query: string) {
    return this.client.get(
      `https://saavn.dev/api/search/albums?query=${query}`
    );
  }

  getPlaylist(query: string) {
    return this.client.get(
      `https://saavn.dev/api/search/playlists?query=${query}`
    );
  }
}
