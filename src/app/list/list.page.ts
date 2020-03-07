/** @format */

import { Component } from '@angular/core';
import { MockRecipes } from '../common/mocks/recipes.mock';

@Component({
	selector: 'app-list',
	templateUrl: 'list.page.html',
	styleUrls: ['list.page.scss']
})
export class ListPage {
	recipes: any;
	constructor() {
		this.recipes = MockRecipes;
	}
}
