import { WeatherToImagePipe } from './weather-to-image.pipe';

describe('WeatherToImagePipe', () => {
  it('create an instance', () => {
    const pipe = new WeatherToImagePipe();
    expect(pipe).toBeTruthy();
  });
});
