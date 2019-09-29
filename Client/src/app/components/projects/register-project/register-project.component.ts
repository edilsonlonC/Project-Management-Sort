import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../../../services/projects.service';
import { Project } from '../../../models/project';
import { ProjectsComponent } from '../projects.component';

@Component({
  selector: 'app-register-project',
  templateUrl: './register-project.component.html',
  styleUrls: ['./register-project.component.css']
})
export class RegisterProjectComponent implements OnInit {

  proje: Project = {
    projectName: '',
    type: 0
  };

  project: FormGroup;

  createFormGroup() {
    return new FormGroup({
      namep: new FormControl('', [Validators.required, Validators.minLength(4)]),
      type: new FormControl('', [Validators.required])
    });
  }

  constructor(private projectsService: ProjectsService, private projectsComponent: ProjectsComponent) {
    this.project = this.createFormGroup();
  }

  ngOnInit() {}

  onResetForm() {
    this.project.reset();
  }

  onForm() {
    this.proje.projectName = this.project.get('namep').value;
    this.proje.type = this.project.get('type').value;
  }

  onSaveForm() {
    if (this.project.valid) {
      this.onForm();
      this.projectsService.saveProject(this.proje).subscribe(
        res => {
          console.log(res);
          alert('Proyecto Registrado');
          this.projectsComponent.getProjects();
        },
        err => console.log(err)
      );
      console.log('Valid');
      this.onResetForm();
    } else {
      console.log('Not Valid');
    }
  }

  get namep() {
    return this.project.get('namep');
  }

  get type() {
    return this.project.get('type');
  }
}
