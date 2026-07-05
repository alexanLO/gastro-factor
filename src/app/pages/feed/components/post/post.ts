import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.scss',
})
export class Post {

  public description: String = "Descrição da imagem da postagem"
  public image: String = "";
  public recipeCategory: String = "Cozinha Fria";
  public recipeName: String = "Nome da Receita";
  public perCapita: number = 3;
  public preparationTime: number = 5;
  public numberLikes: number = 245;
  public numberComments: number = 180;
}
