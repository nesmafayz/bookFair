import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private dataSource = new BehaviorSubject<any>(null);
  currentData = this.dataSource.asObservable();

    changeData(data: any) {     
    this.dataSource.next(data);
  }
}
