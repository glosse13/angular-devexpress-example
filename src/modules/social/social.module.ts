import { NgModule } from '@angular/core';
import { SocialComponent } from './components/index/social.component';
import { SocialRoutingModule } from './social-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SocialService } from './services/social.service';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { FormsModule } from '@angular/forms';
import { InsertComponent } from './components/insert/insert.component';

@NgModule({
  imports: [
    FormsModule,
    SharedComponentsModule,
    SocialRoutingModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  declarations: [SocialComponent,InsertComponent],
  providers: [SocialService],
})
export class SocialModule {}
