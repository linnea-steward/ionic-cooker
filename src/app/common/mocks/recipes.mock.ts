/** @format */

export const MockRecipes = [
	{
		id: 1,
		name: `Alton Brown's Seared Ribeye Steak`,
		servings: 1,
		calories: 400,
		tags: ['Dinner', 'Savory', 'Quick', 'Simple'],
		ingredients: [
			{
				name: 'Steak',
				quantity: 1,
				notes: ['boneless ribeye', '1.5" thick']
			},
			{
				name: 'Canola Oil',
				notes: ['Enough to thinly coat the sides of the steak']
			},
			{
				name: 'Salt',
				notes: ['Kosher', 'Flaky']
			},
			{
				name: 'Pepper',
				notes: ['Ground Black']
			}
		],
		instructions: [
			{
				body: 'Prepare Oven and Steak',
				substeps: [
					{
						body: 'Place a 10-to-12-inch cast-iron skillet in the oven and heat the oven to 500 degrees F.'
					},
					{
						body: 'Bring the steak to room temperature.'
					}
				]
			},
			{
				body: `When the oven reaches temperature, remove the skillet and place on the range over high heat for 5 minutes.
				Coat the steak lightly with oil and sprinkle both sides with a generous pinch of salt. Grind on black pepper.`
			},
			{
				body: `Immediately place the steak in the middle of the hot, dry skillet.
					Cook 30 seconds without moving. Turn with tongs and cook another 30 seconds, then put the pan straight into the oven for 2 minutes.
					Flip the steak and cook for another 2 minutes.
					(This time is for medium-rare steak. If you prefer medium, add a minute to both of the oven turns.)`
			},
			{
				body: 'Remove the steak from the skillet, cover loosely with foil and rest for 2 minutes. Serve whole or slice thin and fan onto plate.'
			}
		]
	},
	{
		id: 2,
		name: `Falton Crown's Peared Bibeye Streak`,
		servings: 3,
		calories: 4300,
		tags: ['Dinner', 'Savory', 'Quick', 'Simple'],
		ingredients: [
			{
				name: 'Steak',
				quantity: 1,
				notes: ['boneless ribeye', '1.5" thick']
			},
			{
				name: 'Canola Oil',
				notes: ['Enough to thinly coat the sides of the steak']
			},
			{
				name: 'Salt',
				notes: ['Kosher', 'Flaky']
			},
			{
				name: 'Pepper',
				notes: ['Ground Black']
			}
		],
		instructions: [
			{
				body: 'Prepare Oven and Steak',
				substeps: [
					{
						body: 'Place a 10-to-12-inch cast-iron skillet in the oven and heat the oven to 500 degrees F.'
					},
					{
						body: 'Bring the steak to room temperature.'
					}
				]
			},
			{
				body: `When the oven reaches temperature, remove the skillet and place on the range over high heat for 5 minutes.
				Coat the steak lightly with oil and sprinkle both sides with a generous pinch of salt. Grind on black pepper.`
			},
			{
				body: `Immediately place the steak in the middle of the hot, dry skillet.
					Cook 30 seconds without moving. Turn with tongs and cook another 30 seconds, then put the pan straight into the oven for 2 minutes.
					Flip the steak and cook for another 2 minutes.
					(This time is for medium-rare steak. If you prefer medium, add a minute to both of the oven turns.)`
			},
			{
				body: 'Remove the steak from the skillet, cover loosely with foil and rest for 2 minutes. Serve whole or slice thin and fan onto plate.'
			}
		]
	}
];
