import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'socials',
        loadChildren: () =>
        import('../social/social.module').then((m) => m.SocialModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../app/app.module').then((m) => m.AppModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
