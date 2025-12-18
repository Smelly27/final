const { recommendDestination } = require('../index');

describe('recommendDestination', () => {
  test('returns Italy for Pasta', () => {
    expect(recommendDestination('Pasta')).toBe('Italy');
  });

  test('returns Japan for Sushi', () => {
    expect(recommendDestination('Sushi')).toBe('Japan');
  });

  test('returns Mexico for Tacos', () => {
    expect(recommendDestination('Tacos')).toBe('Mexico');
  });

  test('returns default message for unknown food', () => {
    expect(recommendDestination('UnknownFood')).toBe('Select a dish');
  });
});
