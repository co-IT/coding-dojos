import { Vocab } from './vocab';

export class VocabBook {
  vocabs: Array<Vocab>;

  constructor() {
    this.vocabs = [];
  }

  add(vocab: Vocab) {
    this.vocabs.push(vocab);
  }
}
