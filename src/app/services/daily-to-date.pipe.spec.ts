import { DailyToDatePipe } from './daily-to-date.pipe';

describe('DailyToDatePipe', () => {
  it('create an instance', () => {
    const pipe = new DailyToDatePipe();
    expect(pipe).toBeTruthy();
  });
});
