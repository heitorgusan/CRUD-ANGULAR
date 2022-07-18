import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder: FormBuilder,private coursesService: CoursesService,private _snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      name:[null],
      category:[null]
    });
  }

  onSubmit(){
    this.coursesService.save(this.form.value).subscribe(result =>{
    },erro=>{
      this.onError();
    });
  }
  onCancel(){

  }
  onError(){
    this._snackBar.open('Erro ao salvar o curso');
  }
  ngOnInit(): void {
  }

}

