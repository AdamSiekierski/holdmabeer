export function hold(time: string): Promise<void>;

export function hold(time: number): Promise<void>;

export function hold(time: any): any {
  if (typeof time === 'number') {
    return new Promise(resolve => {
      setTimeout(() => resolve(), time);
    });
  } else if (typeof time === 'string') {
    if (time.endsWith('ms')) {
      const number = parseInt(time.split('ms')[0]);

      return new Promise(resolve => {
        setTimeout(() => resolve(), number);
      });
    } else if (time.endsWith('s')) {
      const number = parseInt(time.split('s')[0]);

      return new Promise(resolve => {
        setTimeout(() => resolve(), number * 1000);
      });
    } else {
      throw new Error(`Can't parse given time string: ${time}`);
    }
  } else {
    throw new Error(`Time must have a type of number or string, but recieved ${typeof time}`);
  }
}
