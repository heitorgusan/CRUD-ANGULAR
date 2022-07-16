import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  dataCourses$: Observable<Course[]>;

  displayedColumns = ['name', 'category'];

  constructor(private courseService: CoursesService) {
    //.pipe() literalmente um cano q a informação passa (quando chega) e vc pode manipular, vem do rxjs https://rxjs.dev/api
    this.dataCourses$ = this.courseService.dataCourse().pipe(
      //tap(courses => console.log(courses))
    );

  }

  ngOnInit(): void {

  }

}
