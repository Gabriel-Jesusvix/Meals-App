interface CategoryProps {
  id: string;
  title: string;
  color: string;
}

export class Category {
  private id: string;
  private title: string;
  private color: string;

  constructor(props: CategoryProps) {
    if (!props.id || !props.title || !props.color) {
      throw new Error("All fields (id, title, color) are required.");
    }
    this.id = props.id;
    this.title = props.title;
    this.color = props.color;
  }

  getId(): string {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getColor(): string {
    return this.color;
  }

  setTitle(title: string): void {
    if (title.trim().length === 0) {
      throw new Error("Title cannot be empty.");
    }
    this.title = title;
  }

  setColor(color: string): void {
    if (!/^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(color)) {
      throw new Error("Invalid color format. Use hex codes, e.g., #FF5733.");
    }
    this.color = color;
  }

  toString(): string {
    return `Category [ID: ${this.id}, Title: ${this.title}, Color: ${this.color}]`;
  }
}

export default Category;
