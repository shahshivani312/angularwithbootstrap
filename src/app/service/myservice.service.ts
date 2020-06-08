import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {


  constructor() { }

  getStudentList(){

    return [
      { "id": 1, "name": "Ram", "Age": 20 },
      { "id": 2, "name": "Shyam", "Age": 23 },
      { "id": 3, "name": "Sita", "Age": 25 },
      { "id": 4, "name": "Gita", "Age": 26 },
      { "id": 5, "name": "Sunita", "Age": 22 },
      { "id": 6, "name": "Rita", "Age": 24 }
    
      ];
  }

}
