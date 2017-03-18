import { SePage } from './app.po';

describe('se App', function() {
  let page: SePage;

  beforeEach(() => {
    page = new SePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
