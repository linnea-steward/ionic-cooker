/** @format */

import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
	selector: 'app-new',
	templateUrl: 'new.page.html',
	styleUrls: ['new.page.scss']
})
export class NewPage {
	recipe: any;
	constructor(private cd: ChangeDetectorRef) {
		this.recipe = {
			name: '',
			calories: null,
			servings: null,
			tags: []
		};
	}

	createChip(event) {
		if (event.key === 'Enter' || event.keyCode === 13) {
			const newTag = {
				id: new Date().getTime(),
				text: event.target.value.trim()
			};
			this.recipe.tags = [...this.recipe.tags, newTag];
			event.target.value = '';
			this.cd.detectChanges();
			console.log(this.recipe.tags);
		}
	}

	closeChip(event, id) {
		this.recipe.tags = this.recipe.tags.filter((item) => item.id !== id);
	}
}
