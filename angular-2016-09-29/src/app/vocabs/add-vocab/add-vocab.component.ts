import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Vocab } from '../../shared/';

@Component({
  selector: 'vt-add-vocab',
  templateUrl: './add-vocab.component.html',
  styleUrls: ['./add-vocab.component.css']
})
export class AddVocabComponent {
  @ViewChild('form') form: FormGroup;
  vocab: Vocab;
  @Output() vocabSubmitted: EventEmitter<Vocab> = new EventEmitter();

  constructor() {
    this.vocab = new Vocab('', '', '');
  }

  add() {
    this.vocabSubmitted.emit(this.vocab);
    this.vocab = new Vocab('', '', '');
    this.form.reset();
  }
}
