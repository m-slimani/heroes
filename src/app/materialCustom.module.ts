import {
  MatButtonModule, MatCheckboxModule, MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule, MatMenuModule, MatIconModule, MatToolbarModule,
  MatSidenavModule, MatDividerModule,
  MatCardModule, MatGridListModule, MatListModule,
  // Inputs

  // Panels
  MatExpansionModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatDatepickerModule,
    MatNativeDateModule, MatFormFieldModule,
    MatInputModule, MatRippleModule, MatMenuModule, MatToolbarModule,
    MatIconModule, MatSidenavModule,
    MatDividerModule, MatCardModule, MatListModule,
   // Gridd
   MatGridListModule,
  // Panels
  MatExpansionModule],
  exports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule,
    MatNativeDateModule, MatFormFieldModule,
    MatInputModule,
    MatRippleModule, MatMenuModule, MatIconModule, MatToolbarModule,
    MatSidenavModule, MatDividerModule, MatCardModule, MatListModule,
    // Gridd
    MatGridListModule,
    // Panels
    MatExpansionModule],
})
export class MaterialCustomModule { }
