/** @format */

import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
	selector: 'app-cook',
	templateUrl: 'cook.page.html',
	styleUrls: ['cook.page.scss']
})
export class CookPage {
	// tslint:disable: max-line-length
	public activeRecipe = {
		id: 1588356075739,
		name: 'Chicken and Lentil Stew With Tomatoes and Onions Recipe | Serious Eats',
		link: 'https://www.seriouseats.com/recipes/2020/05/chicken-lentil-stew-tomatoes-onions.html',
		description:
			'[Photograph: Daniel Gritzer]\n\nVery loosely inspired by a Middle Eastern dish called haleem that comes in many forms but sometimes features meat stewed with spiced lentils and topped with fried onions, this recipe features stewed lentils with a fragrant mix of spices, including coriander seed, cumin, and turmeric. Garlic and ginger provide an aromatic base of flavor.\n\nWe start by poaching a whole chicken: the skin is (optionally) minced very finely and added to the lentils as they stew, melding into the mix while adding richness to the dish; the poaching broth is used to cook the lentils themselves, and the meat is shredded and folded into the lentils before serving.\n\nWhile our preferred method for poaching chicken normally calls for an even lower 155°F water temperature for the juiciest and most tender meat, we speed things up here a bit more by cooking it at a sub-simmer (closer to 180°F). The higher heat poaching is fine in this case since the chicken is folded into the stewy lentils which keeps the meat from drying out.\n\nYou can also make this recipe vegetarian by cooking the lentils with water and omitting the chicken.\n\nAs the lentils finish cooking, we fry sliced onions in plenty of olive oil over high heat—the goal is to get a fried-onion flavor combined with a melting texture—and then cook them down with plum tomatoes for a bright topping that is finished with a handful of fresh herbs—dill or cilantro both work well.\n\nWhy It Works\nPoaching a chicken delivers not only meat, but a flavorful broth for cooking the lentils in.\nToasting the spices in oil deepens and releases their flavor more effectively.\nThe optional step of finely mincing the poached chicken skin and cooking it into the lentils makes a more delicious, satisfying final stew.',
		notes: '',
		steps: [
			{
				description:
					'In a large pot or Dutch oven, combine chicken with enough water to cover. Add 1 tablespoon (10g) salt and bring to just under a simmer (roughly 180°F/80°C on an instant-read thermometer). Cook, maintaining a sub-simmer as best you can, until chicken registers 160°F (70°C) deep in the thigh, about 45 minutes.'
			},
			{ description: 'Carefully lift chicken from poaching liquid, allowing it to drain back into pat, then transfer to a work surface and allow to cool. Reserve poaching liquid. Clean the pot or Dutch oven.' },
			{
				description:
					'In the same pot or Dutch oven, combine 1/2 cup (120ml) oil with garlic and ginger and set over medium heat. Cook, stirring often, until garlic and ginger begin to gently sizzle and are just beginning to turn lightly golden, about 2 minutes. Reduce heat to medium-low and add coriander, cumin, turmeric, paprika, black pepper, and pepper flakes and continue to cook, stirring frequently, until spices are lightly toasted and fragrant, 2 to 3 minutes longer.'
			},
			{
				description:
					'Stir in lentils, then add enough of the reserved poaching broth to just cover lentils. Add bay leaf. Increase heat to medium-high and bring to a simmer, then adjust heat to maintain simmer. Cook, stirring occasionally and adding more poaching liquid to keep lentils just covered throughout, until lentils are very tender and just beginning to break down, about 1 hour; use additional water as needed if you run out of poaching liquid before the lentils have finished cooking.'
			},
			{
				description:
					'While lentils are cooking, remove skin from the poached chicken; if desired, finely mince the chicken skin and add it to the lentils (it will meld into the lentils during cooking and enrich the stew, but you can omit if desired). Pull meat from chicken bones and shred; discard bones.'
			},
			{
				description:
					'When lentils are tender and beginning to break down, add shredded chicken and continue to cook, stirring often to prevent sticking and adding poaching liquid or water little by little as needed to keep lentils from becoming overly thick and sludgy, until some of the lentils have begun to break down and thicken the stew, about 15 minutes longer. Discard bay leaf. Season with salt and keep warm.'
			},
			{
				description:
					'Meanwhile, in a large 12-inch stainless steel or cast iron skillet, heat remaining 1/2 cup (120ml) oil over high heat until very lightly smoking. Add onions, season with salt, and cook, stirring often, until deeply browned in spots and beginning to soften, about 15 minutes; lower heat as needed to prevent burning. Add tomatoes and cook, stirring frequently, until tomatoes begin to break down, about 7 minutes; reduce heat even more as needed to prevent burning. Remove from heat, stir in dill or cilantro, and season with salt to taste.'
			},
			{ description: 'Ladle lentils into individual serving bowls and top with onion-tomato mixture. Drizzle lightly with olive oil, and serve.' }
		],
		ingredients: [
			{ name: 'One 3 1/2-pound (1.6kg) chicken' },
			{ name: '1 tablespoon (10g) kosher salt, plus more for seasoning' },
			{ name: '1 cup (240ml) extra-virgin olive oil, divided, plus more for drizzling' },
			{ name: '4 medium cloves garlic, minced' },
			{ name: 'One 1-inch knob fresh ginger, peeled and minced' },
			{ name: '1 tablespoon ground coriander' },
			{ name: '2 teaspoons ground cumin' },
			{ name: '1 teaspoon ground turmeric' },
			{ name: '1 teaspoon paprika' },
			{ name: '1 teaspoon freshly ground black pepper' },
			{ name: 'Large pinch red pepper flakes' },
			{ name: '1 1/2 pounds (680g) green, French green (Le Puy), or yellow lentils' },
			{ name: '1 bay leaf' },
			{ name: '2 large (10-ounce; 280g) yellow onions, sliced 1/2-inch-thick' },
			{ name: '1 pound (450g) plum tomatoes, cut into 1-inch pieces' },
			{ name: '2 tablespoons minced fresh dill or cilantro' }
		]
	};

	selectedTab = 'summary';
	title = 'Cook';

	slideOptions = {
		initialSlide: 0,
		speed: 500
	};
	constructor(private ref: ChangeDetectorRef) {}

	segmentChanged(ev: any) {
		this.selectedTab = ev.srcElement.value;
		if (this.selectedTab !== 'summary') {
			this.title = `Cook - ${this.activeRecipe.name}`;
		} else {
			this.title = 'Cook';
		}
		this.ref.detectChanges();
	}

	slideChanged(ev: any) {
		ev.target.getActiveIndex().then((index) => {
			this.slideOptions.initialSlide = index;
		});
	}
}
