import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RescipesServiceService } from 'src/app/services/rescipes-service.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input() label: string;
  @Input() imageSrc: string;
  @Input() url: string;
  @Input() ingredients: string;
  @Input() calories: string;
  remove = false;
  userId: any;
  constructor(
    private route: ActivatedRoute,
    private recipesService: RescipesServiceService,
    private userService: AuthenticationService
  ) {
    this.userId = this.route.snapshot.paramMap.get('userId');
  }
  addWishList() {
    this.recipesService.getRecipe(this.label).subscribe((res: any) => {
      this.recipesService
        .addWishList(res._id, this.userId)
        .subscribe((res) => (this.remove = true));
    });
  }
  deleteWishList() {
    this.recipesService.getRecipe(this.label).subscribe((res: any) => {
      this.recipesService
        .deleteWishList(res._id, this.userId)
        .subscribe((res) => (this.remove = false));
    });
  }
  ngOnInit(): void {
    this.recipesService.getRecipe(this.label).subscribe((res: any) => {
      const id = res._id;
      this.userService.getData(this.userId).subscribe((res: any) => {
        for (const item of res.wishList) {
          if (item._id == id) {
            this.remove = true;
            break;
          }
        }
      });
    });
  }
}
