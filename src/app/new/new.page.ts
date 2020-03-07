/** @format */

import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
	selector: 'app-new',
	templateUrl: 'new.page.html',
	styleUrls: ['new.page.scss']
})
export class NewPage {
	recipe: any;

	defaultState = {
		name: '',
		calories: null,
		servings: null,
		tags: [],
		ingredients: [],
		instructions: []
	};

	constructor(private cd: ChangeDetectorRef) {
		this.recipe = this.defaultState;
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
		}
	}

	public closeChip(event, id) {
		this.recipe.tags = this.recipe.tags.filter((item) => item.id !== id);
	}

	public addIngredient(event) {
		this.recipe.ingredients = [...this.recipe.ingredients, { text: null }];
		setTimeout(() => {
			((document.getElementById(`ingredient-${this.recipe.ingredients.length - 1}`) as unknown) as IonInput).setFocus();
		}, 150);
	}

	public removeIngredient(event, i) {
		this.recipe.ingredients = [...this.recipe.ingredients.filter((item, index) => index !== i)];
	}

	public keydownIngredient(event, i) {
		if (event.key === 'Enter' || (event.keyCode === 13 && event.target.value.length > 0)) {
			this.addIngredient(event);
		} else {
			this.recipe.ingredients[i].text = event.target.value;
		}
	}

	public addInstruction(event) {
		this.recipe.instructions = [...this.recipe.instructions, { text: null }];
		setTimeout(() => {
			((document.getElementById(`instruction-${this.recipe.instructions.length - 1}`) as unknown) as IonInput).setFocus();
		}, 150);
	}

	public removeInstruction(event, i) {
		this.recipe.instructions = [...this.recipe.instructions.filter((item, index) => index !== i)];
	}

	public keydownInstruction(event, i) {
		if (event.key === 'Enter' || (event.keyCode === 13 && event.target.value.length > 0)) {
			this.addInstruction(event);
		} else {
			this.recipe.instructions[i].text = event.target.value;
		}
	}

	public save(event) {
		// TODO: validation and saving to service
		console.log(this.recipe);
	}

	public reset(event) {
		this.recipe = { ...this.defaultState };
	}
}
