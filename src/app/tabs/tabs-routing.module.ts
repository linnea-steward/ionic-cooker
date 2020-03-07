/** @format */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
	{
		path: 'recipes',
		component: TabsPage,
		children: [
			{
				path: 'list',
				children: [
					{
						path: '',
						loadChildren: () => import('../list/list.module').then((m) => m.ListPageModule)
					}
				]
			},
			{
				path: 'new',
				children: [
					{
						path: '',
						loadChildren: () => import('../new/new.module').then((m) => m.NewPageModule)
					}
				]
			},
			{
				path: 'cook',
				children: [
					{
						path: '',
						loadChildren: () => import('../cook/cook.module').then((m) => m.CookPageModule)
					}
				]
			},
			{
				path: '',
				redirectTo: '/recipes/list',
				pathMatch: 'full'
			}
		]
	},
	{
		path: '',
		redirectTo: '/recipes/list',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsPageRoutingModule {}
