import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnChanges {
  @Input() songSearchData: any;
  @Output() songDataEmitEvent = new EventEmitter<any>();
  @Output() routeMainPlayerEmitEvent = new EventEmitter<boolean>();

  songArray: any = [];
  searchResults: boolean = false;

  ngOnChanges() {
    if (this.songSearchData === undefined) {
      return;
    } else {
      this.songArray = this.songSearchData.data.results;
      this.searchResults = true;
    }
    // console.log(this.songSearchData);
    // console.log(this.songArray);
  }

  playSong(data: any) {
    this.songDataEmitEvent.emit(data);
    this.routeMainPlayerEmitEvent.emit(true);
    // console.log(this.songUrlUpdate);
  }
}
