import { Routes } from '@angular/router';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { MainComponent } from './component/main/main.component';
import { QuestionsComponent } from './component/questions/questions.component';

export const routes: Routes = [
    { path: '', component:MainComponent },
    { path: 'questions', component:QuestionsComponent }
];
