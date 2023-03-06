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
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
