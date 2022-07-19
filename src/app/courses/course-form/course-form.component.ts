import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder: FormBuilder,private coursesService: CoursesService,private _snackBar: MatSnackBar,private location: Location) {
    this.form = this.formBuilder.group({
      name:[null],
      category:[null]
    });
  }

  onSubmit(){
    this.coursesService.save(this.form.value).subscribe(result =>{
      this.onSucess();
    },erro=>{
      console.log(erro);
      this.onError();
    });
  }
  onCancel(){
    this.location.back();
  }
  private onError(){
    this._snackBar.open('Erro ao salvar o curso');
  }
  private onSucess(){
    this._snackBar.open('Curso criado com sucesso');
    this.onCancel();

  }
  ngOnInit(): void {
  }

}

