export interface Taco {
  _id: string;
  title: string;
  description: string;
  steps: Step[];
  ingredients: Ingredient[];
  tags: string;
}

export interface Ingredient {
  directions: string;
  measure: string;
  name: string;
  quantity: string;
}

export interface Step {
  description: string;
  number: number;
  time: string;
}
