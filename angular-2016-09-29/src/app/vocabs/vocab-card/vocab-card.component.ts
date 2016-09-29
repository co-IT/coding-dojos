import { Component, Input } from '@angular/core';
import { Vocab } from '../../shared/';

@Component({
  selector: 'vt-vocab-card',
  templateUrl: './vocab-card.component.html',
  styleUrls: ['./vocab-card.component.sass']
})
export class VocabCardComponent {
  @Input() vocab: Vocab;
}
