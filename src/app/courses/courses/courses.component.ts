import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  dataCourses$: Observable<Course[]>;

  displayedColumns = ['name', 'category'];

  constructor(private courseService: CoursesService,public dialog: MatDialog) {
    //.pipe() literalmente um cano q a informação passa (quando chega) e vc pode manipular, vem do rxjs https://rxjs.dev/api
    this.dataCourses$ = this.courseService.dataCourse().pipe(
      catchError(error => {
        this.onError("Erro ao carregar os cursos");
        console.log(error);
        return of([])
      })
      //tap(courses => console.log(courses))
    );

    console.log(this.dataCourses$);
  }

  onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
  ngOnInit(): void {

  }

}
