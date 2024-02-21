import { WeatherToTextPipe } from './weather-to-text.pipe';

describe('WeatherToTextPipe', () => {
  it('create an instance', () => {
    const pipe = new WeatherToTextPipe();
    expect(pipe).toBeTruthy();
  });
});
