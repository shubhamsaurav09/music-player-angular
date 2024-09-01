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
  @Input() songRoute: boolean = false;
  @Output() songDataEmitEvent = new EventEmitter<any>();

  songArray: any = [];
  searchResults: boolean = false;

  ngOnChanges() {
    if (this.songSearchData === undefined) {
      return;
    } else {
      this.songArray = this.songSearchData.data.results;
      this.searchResults = true;
    }
  }

  playSong(data: any) {
    this.songDataEmitEvent.emit(data);
  }
}
