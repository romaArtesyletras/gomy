import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storageKey = 'myAppData';

  constructor() { }

  // Save data to storage
  saveData(name:string, data: any): void {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(name, jsonData);
  }

  // Get data from storage
  getData(name:string): any {
    const jsonData = localStorage.getItem(name);
    if (jsonData) {
      return JSON.parse(jsonData);
    }
    return null;
  }

  // Clear stored data
  clearData(name: string): void {
    localStorage.removeItem(name);
  }
}
