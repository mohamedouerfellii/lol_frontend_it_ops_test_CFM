import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Champion} from "../models/Champion";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb(){
    let champions:Champion[] =  [
      {  id:  1,  name:  'GNAR', shortDescription: "Chaînon manquant", description: "Gnar est un yordle primitif dont les manières joyeuses peuvent soudain faire place à une colère irrationnelle. Il se transforme alors en une bête colossale portée à la destruction. Gelé dans de la glace pure pendant des millénaires, la curieuse créature s'est libérée de sa prison. Aujourd'hui, il parcourt avec enthousiasme un monde qu'il trouve exotique et merveilleux. Enchanté par le danger, Gnar lance à ses ennemis tout ce qu'il trouve, qu'il s'agisse de son boomerang en croc ou d'un bâtiment proche.", image: "gnar.jpg", role: 'COMBATTANT', difficulty: 'ELEVEE' },
      {  id:  2,  name:  'AHRI', shortDescription: "Renard à neuf queues", description: "Connectée à la magie du royaume spirituel, Ahri est une mystérieuse Vastaya aux traits de renard qui peut manipuler les émotions de sa proie et consumer son essence, afin de recevoir des fragments de sa mémoire. Ahri fut un temps un terrifiant prédateur, mais elle voyage désormais à la recherche des vestiges de ses ancêtres tout en essayant de remplacer les souvenirs qu'elle a volés par sa propre expérience de l'existence.", image: "ahri.jpg", role: 'MAGE', difficulty: 'MODEREE' },
      {  id:  3,  name:  'AMBESSA', shortDescription: "Matriarche de guerre", description: "Tous ceux qui connaissent le nom de Medarda savent qu'il faut craindre et respecter sa matriarche, Ambessa. En tant que générale noxienne, elle incarne la force impitoyable et la détermination sans peur. Son rôle de matriarche n'est pas bien différent. Elle se doit de faire preuve d'une grande ruse tout en ne laissant aucune place à l'échec ou à la compassion. Dédiée à la voie du Loup, Ambessa fera tout ce qui est en son pouvoir pour protéger l'héritage de sa famille, même si cela doit lui coûter l'amour de ses enfants.", image: "ambessa.png", role: 'COMBATTANT', difficulty: 'ELEVEE' },
      {  id:  4,  name:  'AKSHAN', shortDescription: "Sentinelle rebelle", description: "Se jouant du danger, Akshan combat le mal sans jamais se départir de son charisme (il ne faut jamais sous-estimer l'importance de la cape) et de sa droiture. Il est passé maître dans l'art du combat furtif, ce qui lui permet d'échapper au regard de ses ennemis et de réapparaître lorsqu'ils s'y attendent le moins. À l'aide de son sens aigu de la justice et d'une arme légendaire défiant la mort elle-même, il redresse les torts des nombreux vauriens de Runeterra. Sa règle d'or : « ne sois pas crapuleux. »", image: "akshan.jpg", role: 'TIREUR', difficulty: 'FAIBLE' },
      {  id:  5,  name:  'AMUMU', shortDescription: "Momie mélancolique", description: "La légende veut qu'Amumu soit une âme solitaire et mélancolique de la Shurima antique et qu'il parcoure le monde à la recherche d'un ami. Condamné par une malédiction à rester seul à jamais, il provoque la mort et la ruine à chaque geste d'affection. Ceux qui prétendent l'avoir vu le décrivent comme un cadavre vivant, petit de taille, enveloppé dans d'effrayants bandages. Il a inspiré bien des mythes, des chansons et des légendes, transmis de génération en génération pendant si longtemps qu'il est désormais impossible de démêler le vrai du faux.", image: "amumu.jpg", role: 'SUPPORT', difficulty: 'FAIBLE' },
      {  id:  6,  name:  'Annie', shortDescription: "Enfant des ténèbres", description: "Dangereuse, incroyablement précoce, Annie est une enfant mage dotée d'extraordinaires pouvoirs de pyrokinésie. Même à l'ombre des montagnes du nord de Noxus, sa magie est un cas unique. Son affinité naturelle avec le feu se manifesta dès sa prime enfance à travers des explosions émotionnelles imprévisibles, même si elle apprit rapidement à contrôler ces éclats. Parmi ses jeux favoris, elle aime invoquer son bien-aimé ours en peluche, Tibbers, sous la forme d'un protecteur enflammé. Perdue dans l'innocence perpétuelle de l'enfance.", image: "annie.jpg", role: 'MAGE', difficulty: 'MODEREE' },
    ];

    let mychampions:Champion[] =  [];

    return {champions, mychampions};
  }
}
