// @flow
import getContactHref from './get-contact-href';

test('getContactHref', () => {
  expect(getContactHref('twitter', '#')).toBe('https://www.twitter.com/rossysheil');
  expect(getContactHref('github', '#')).toBe('https://github.com/rossysheil');
  expect(getContactHref('email', '#')).toBe('mailto:rossjsheil@gmail.com');
  expect(getContactHref('vkontakte', '#')).toBe('https://vk.com/#');
  expect(getContactHref('telegram', '#')).toBe('telegram:#');
  expect(getContactHref('rss', '#')).toBe('https://scalingstartups.io');
});
