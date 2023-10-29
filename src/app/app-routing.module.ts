import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { NewsComponent } from './news/news.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'about-us',
    component: AboutComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'team',
    component: TeamComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'contact-us',
    component: ContactComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
