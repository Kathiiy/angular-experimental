import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleComponent } from "./article/article.component";
import { FooterComponent } from "./footer/footer.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { SampleContentComponent } from "./sample-content/sample-content.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    path: "articles",
    component: ArticleComponent
  },
  {
    path: "sample",
    component: SampleContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
