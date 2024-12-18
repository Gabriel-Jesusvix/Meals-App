interface MealProps {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
}

export class Meal {
  public id: string;
  public categoryIds: string[];
  public title: string;
  public affordability: string;
  public complexity: string;
  public imageUrl: string;
  public duration: number;
  public ingredients: string[];
  public steps: string[];
  public isGlutenFree: boolean;
  public isVegan: boolean;
  public isVegetarian: boolean;
  public isLactoseFree: boolean;

  constructor(props: MealProps) {
    this.id = props.id;
    this.categoryIds = props.categoryIds;
    this.title = props.title;
    this.affordability = props.affordability;
    this.complexity = props.complexity;
    this.imageUrl = props.imageUrl;
    this.duration = props.duration;
    this.ingredients = props.ingredients;
    this.steps = props.steps;
    this.isGlutenFree = props.isGlutenFree;
    this.isVegan = props.isVegan;
    this.isVegetarian = props.isVegetarian;
    this.isLactoseFree = props.isLactoseFree;
  }

  // Getters
  getId(): string {
    return this.id;
  }

  getCategoryIds(): string[] {
    return this.categoryIds;
  }

  getTitle(): string {
    return this.title;
  }

  getAffordability(): string {
    return this.affordability;
  }

  getComplexity(): string {
    return this.complexity;
  }

  getImageUrl(): string {
    return this.imageUrl;
  }

  getDuration(): number {
    return this.duration;
  }

  getIngredients(): string[] {
    return this.ingredients;
  }

  getSteps(): string[] {
    return this.steps;
  }

  isMealGlutenFree(): boolean {
    return this.isGlutenFree;
  }

  isMealVegan(): boolean {
    return this.isVegan;
  }

  isMealVegetarian(): boolean {
    return this.isVegetarian;
  }

  isMealLactoseFree(): boolean {
    return this.isLactoseFree;
  }

  setTitle(title: string): void {
    if (title.trim().length === 0) {
      throw new Error("Title cannot be empty.");
    }
    this.title = title;
  }

  setDuration(duration: number): void {
    if (duration <= 0) {
      throw new Error("Duration must be a positive number.");
    }
    this.duration = duration;
  }

  isSuitableForDiet(glutenFree: boolean, vegan: boolean, vegetarian: boolean, lactoseFree: boolean): boolean {
    return (
      (!glutenFree || this.isGlutenFree) &&
      (!vegan || this.isVegan) &&
      (!vegetarian || this.isVegetarian) &&
      (!lactoseFree || this.isLactoseFree)
    );
  }
}
