import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { SampleContentComponent } from './sample-content/sample-content.component';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
	{
		path: 'articles',
		component: ArticleComponent
	},
	{
		path: 'sample',
		component: SampleContentComponent
	},
	{
		path: 'registration',
		component: RegistrationComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
