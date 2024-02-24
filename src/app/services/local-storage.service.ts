import { Injectable } from '@angular/core';
import { City } from '../city';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  // Set a value in local storage
  setItem(key: string, value: string): void {
    console.log("Save data in Local Storage");
    localStorage.setItem(key, value);
  }

  // Get a value from local storage
  getItem(key: string): string | null {
    console.log("Get data from Local Storage");
    return localStorage.getItem(key);
  }

  // Remove a value from local storage
  removeItem(key: string): void {
    console.log("Delete data in Local Storage");
    localStorage.removeItem(key);
  }

  // Clear all items from local storage
  clear(): void {
    console.log("Delete all data in Local Storage");
    localStorage.clear();
  }
  
}
