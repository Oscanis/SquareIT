//Material inputs are in separate file for easier maintenance

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatRippleModule} from '@angular/material/core';
import { MatMenuModule} from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
    imports: [MatButtonModule,
              MatToolbarModule,
              MatIconModule,
              MatSlideToggleModule,
              MatRippleModule,
              MatMenuModule,
              MatFormFieldModule,
              MatInputModule
            ],
    
    exports: [MatButtonModule,
              MatToolbarModule,
              MatIconModule,
              MatSlideToggleModule,
              MatRippleModule,
              MatMenuModule,
              MatFormFieldModule,
              MatInputModule
            ],
})
export class MaterialModule {};