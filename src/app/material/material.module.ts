import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

let arr = [MatFormFieldModule, MatButtonModule, MatIconModule, MatInputModule];
@NgModule({
  declarations: [],
  imports: [arr],
  exports: [arr],
})
export class MaterialModule {}
