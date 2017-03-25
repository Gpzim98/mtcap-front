import { MtcapPage } from './app.po';

describe('mtcap App', function() {
  let page: MtcapPage;

  beforeEach(() => {
    page = new MtcapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
