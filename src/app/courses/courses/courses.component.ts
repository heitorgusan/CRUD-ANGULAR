import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  dataCourses: Course[] = [
    {_id:"1", name:"Jardinagem", category:"Natureza"},
    {_id:"2", name:"Arborização", category:"Natureza"},
    {_id:"3", name:"Pintura", category:"Obras"},
    {_id:"4", name:"Churrasqueiro", category:"Alimentação"}
  ];

  displayedColumns = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {
  }

}
