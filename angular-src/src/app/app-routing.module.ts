import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTodosComponent } from './todos/all-todos/all-todos.component';
import { CompleteTodosComponent } from './todos/complete-todos/complete-todos.component';
import { IncompleteTodosComponent } from './todos/incomplete-todos/incomplete-todos.component';
const routes: Routes = [
    {
        path: 'all',
        component: AllTodosComponent
    },
    {
        path: 'complete',
        component: CompleteTodosComponent
    },
    {
        path: 'incomplete',
        component: IncompleteTodosComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
