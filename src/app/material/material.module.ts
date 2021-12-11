import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule
    

  ]
})
export class MaterialModule { }
