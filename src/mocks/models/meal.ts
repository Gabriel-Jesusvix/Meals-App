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
  private id: string;
  private categoryIds: string[];
  private title: string;
  private affordability: string;
  private complexity: string;
  private imageUrl: string;
  private duration: number;
  private ingredients: string[];
  private steps: string[];
  private isGlutenFree: boolean;
  private isVegan: boolean;
  private isVegetarian: boolean;
  private isLactoseFree: boolean;

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
