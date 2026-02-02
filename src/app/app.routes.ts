import { Routes } from '@angular/router';
import { DataBindings } from './component/data-bindings/data-bindings';
import { SignalComponent } from './component/signalComponent/signal';
import { Variables } from './component/variables/variables';
import { NotFound } from './component/not-found/not-found';
import { ControlFlowStatement } from './component/control-flow-statement/control-flow-statement';
import { DynamicCssClass } from './component/dynamic-css-class/dynamic-css-class';
import { UserMaster } from './component/user-master/user-master';
import { ReactiveUserForm } from './component/reactive-user-form/reactive-user-form';
import { Photos } from './component/photos/photos';
import { ProjectCompetition } from './component/project-competition/project-competition';
import { SignaFormEx } from './component/signa-form-ex/signa-form-ex';
import { Login } from './component/login/login';
import { Layout } from './component/layout/layout';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        component: Layout,
        canActivate: [authGuard],
        children: [
            {
                path: 'databindings',
                component: DataBindings
            },
            {
                path: 'variables',
                component: Variables
            },
            {
                path: 'signal',
                component: SignalComponent
            },
            {
                path: 'control-flow',
                component: ControlFlowStatement
            },
            {
                path: 'dynamic-css-class',
                component: DynamicCssClass
            },
            {
                path: 'users',
                component: UserMaster
            },
            {
                path: 'reactive-usersForm',
                component: ReactiveUserForm
            },
            {
                path: 'photos',
                component: Photos
            },
            {
                path: 'project-competition',
                component: ProjectCompetition
            },
            {
                path: 'signal-form',
                component: SignaFormEx
            },
        ]
    },
    {
        path: '**',
        component: NotFound
    }
];
