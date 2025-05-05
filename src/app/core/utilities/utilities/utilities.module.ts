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
import { SelectModule } from 'primeng/select';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { ColorPickerModule } from 'primeng/colorpicker';
import { TabsModule } from 'primeng/tabs';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'primeng/fileupload';
import { CalendarModule } from 'primeng/calendar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';



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
    FormsModule,
    SelectModule,
    DropdownModule,
    EditorModule,
    ColorPickerModule,
    TabsModule,
    RadioButtonModule,
    InputIconModule,
    HttpClientModule,
    FileUploadModule,
    CalendarModule,
    SplitButtonModule,
    TableModule,
    InputNumberModule,
  ]
})
export class UtilitiesModule { }
