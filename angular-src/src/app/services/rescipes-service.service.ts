import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root',
})
export class RescipesServiceService {
  private url = '/api/recipe';
  private userUrl = '/api/user';
  constructor(private http: HttpClient) {}
  getRecipes(ingredientString: string) {
    const ingredients = {
      ingredients: ingredientString,
    };
    return this.http.post(this.url, ingredients);
  }
  addWishList(recipeId: any, userId: any) {
    return this.http.post(this.userUrl + '/updateWishList/' + userId, {
      recipe: recipeId,
    });
  }
  deleteWishList(recipeId: any, userId: any) {
    return this.http.post(this.userUrl + '/deleteWishList/' + userId, {
      recipe: recipeId,
    });
  }

  getRecipe(label1: string) {
    return this.http.post(this.url + '/getByLabel', { label: label1 });
  }
}
