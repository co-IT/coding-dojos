import { Component } from '@angular/core';
import { VocabBook, Vocab } from '../../shared/';

@Component({
  selector: 'vt-vocabs-container',
  templateUrl: './vocabs-container.component.html',
  styleUrls: ['./vocabs-container.component.sass']
})
export class VocabsContainerComponent{
  vocabBook: VocabBook;

  constructor() {
    this.vocabBook = new VocabBook();
  }

  addVocab(vocab: Vocab) {
    this.vocabBook.add(vocab);
  }
}
