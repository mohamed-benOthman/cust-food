import { Component, OnInit, Input } from '@angular/core';
import { RescipesServiceService } from '../../../services/rescipes-service.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  host: {
    '(window:resize)': 'onWindowResize($event)',
  },
})
export class RecipeComponent implements OnInit {
  constructor(
    private recipesService: RescipesServiceService,
    private auth: AuthenticationService,
    private route: ActivatedRoute
  ) {
    this.userId = this.route.snapshot.paramMap.get('userId');
    console.log(this.userId);
    this.width = window.innerWidth;
    console.log(this.width);
  }
  width: number = window.innerWidth;
  onWindowResize(event: any) {
    this.width = event.target.innerWidth;
    console.log(this.width);
  }
  ingredientsMap = new Map<string, boolean>();
  noSearch = true;
  notFound = false;
  userId: any;

  searchString = '';
  loading = false;
  recipes: any = [];
  ingredients = [
    'apple',

    'banana',
    'beans',
    'bread',
    'broccoli',

    'candy',
    'carrot',
    'cherry',
    'chicken',
    'chips',
    'cocktail',
    'coffee',
    'cookie',
    'corn',
    'cream',
    'eggplant',
    'fish',

    'garlic',
    'grapefruit',
    'grapes',
    'ham',

    'lemon',
    'lettuce',
    'meat',
    'milk',
    'mushroom',
    'noodles',
    'orange',
    'peach',
    'pear',
    'peas',
    'pepper',
    'pineapple',

    'potatoe',
    'sausage',
    'Shrimp',
    'soda',
    'soup',
    'spatula',
    'strawberry',
    'tomato',
    'watermelon',
    'wine',
  ];
  ngOnInit(): void {
    for (const item of this.ingredients) {
      this.ingredientsMap.set(item, false);
    }
  }
  changeStatus(value: string) {
    const name = value.trim().split(',')[0];
    const status = value.trim().split(',')[1];
    let booleanString: boolean;
    if (status == 'false') {
      booleanString = false;
    } else {
      booleanString = true;
    }

    this.ingredientsMap.set(name, booleanString);

    console.log(this.ingredientsMap);
  }
  getRecipes() {
    this.notFound = false;
    this.noSearch = false;
    this.loading = true;
    let ingredients = '';
    for (const [key, value] of this.ingredientsMap) {
      if (value == true) {
        ingredients += key + ',';
      }
    }

    console.log(ingredients);
    this.recipesService.getRecipes(ingredients).subscribe((res: any) => {
      this.recipes = res;

      if (this.recipes.length == 0) {
        this.notFound = true;
      }
      this.loading = false;
    });
  }
  addWishList() {
    let ingredients = '';
    for (const [key, value] of this.ingredientsMap) {
      if (value == true) {
        ingredients += key + ',';
      }
    }
    this.auth
      .addLastReasearch(ingredients, this.userId)
      .subscribe((res: any) => {
        console.log(res);
      });
  }

  showSearch(value: string) {
    console.log(value);
    this.searchString = value;
  }
}
