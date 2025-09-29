export interface Champion {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  role: 'COMBATTANT'|'SUPPORT'|'MAGE'|'TANK'|'TIREUR';
  difficulty: 'FAIBLE'|'MODEREE'|'ELEVEE';
}
