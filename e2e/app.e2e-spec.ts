import { MybrandPage } from './app.po';

describe('mybrand App', () => {
  let page: MybrandPage;

  beforeEach(() => {
    page = new MybrandPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
