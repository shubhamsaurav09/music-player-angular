import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PlaylistsComponent } from './pages/playlists/playlists.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { PlayerComponent } from './components/player/player.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';
import { SongsComponent } from './pages/songs/songs.component';
import { SecondsToMinutePipe } from './seconds-to-minute.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainPlayerComponent } from './components/main-player/main-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaylistsComponent,
    ArtistsComponent,
    AlbumsComponent,
    SidebarComponent,
    MenubarComponent,
    NavbarComponent,
    MainComponent,
    PlayerComponent,
    ListComponent,
    SongsComponent,
    SecondsToMinutePipe,
    MainPlayerComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
