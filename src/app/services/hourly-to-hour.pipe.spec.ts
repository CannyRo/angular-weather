import { HourlyToHourPipe } from './hourly-to-hour.pipe';

describe('HourlyToHourPipe', () => {
  it('create an instance', () => {
    const pipe = new HourlyToHourPipe();
    expect(pipe).toBeTruthy();
  });
});
