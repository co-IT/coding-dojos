import { Component, Output, EventEmitter } from '@angular/core';
import { Vocab } from '../../shared/';

@Component({
  selector: 'vt-add-vocab',
  templateUrl: './add-vocab.component.html',
  styleUrls: ['./add-vocab.component.css']
})
export class AddVocabComponent {
  @Output() vocabSubmitted: EventEmitter<Vocab> = new EventEmitter();

  add(foreignword, translation, memnotechnicVerse) {
    this.vocabSubmitted.emit(new Vocab(
      foreignword.value,
      translation.value,
      memnotechnicVerse.value));

      foreignword.value =
      translation.value =
      memnotechnicVerse.value = '';
  }
}
