import { Component, Input } from '@angular/core';
import { Vocab } from '../../shared/';

@Component({
  selector: 'vt-vocabs-list',
  templateUrl: './vocabs-list.component.html',
  styleUrls: ['./vocabs-list.component.css']
})
export class VocabsListComponent {
  @Input() vocabs: Array<Vocab>;
}
