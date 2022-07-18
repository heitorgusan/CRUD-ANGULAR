import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course';
import { delay, Observable, of } from 'rxjs';
import { first } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';
  constructor(private httpClient: HttpClient) { }


  dataCourse(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(), //Finaliza assim que recebe a resposta
      delay(2000)
    );
  }
  save(record: Course) {
    return this.httpClient.post<Course>(this.API,record);
  }
}
