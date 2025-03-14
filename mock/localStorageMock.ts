import { TLocalStorage } from '@types';

export class localStorageMock {
  store: TLocalStorage = {};
  setItem = (key: string, val: string) => (this.store[key] = val);
  getItem = (key: string) => this.store[key] || null;
  removeItem = (key: string) => {
    delete this.store[key];
  };
  clear = () => (this.store = {});
  length: number = 0;
  key = (index: number) => this.store[index];
}
