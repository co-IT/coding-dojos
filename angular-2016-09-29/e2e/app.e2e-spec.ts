import { VocabTrainerPage } from './app.po';

describe('vocab-trainer App', function() {
  let page: VocabTrainerPage;

  beforeEach(() => {
    page = new VocabTrainerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
