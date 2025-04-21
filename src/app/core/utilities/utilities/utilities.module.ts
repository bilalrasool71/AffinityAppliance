import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';

import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    DividerModule,

  ],
  exports: [
    CommonModule,
    MenubarModule, 
    AvatarModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    PasswordModule,
    CheckboxModule,
    ButtonGroupModule,
    DividerModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UtilitiesModule { }
