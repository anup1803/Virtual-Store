import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItems',
})
export class FilterItemsPipe implements PipeTransform {
  transform(value: any[], filterTerm: string): any[] {
    if (!value || !filterTerm.trim()) {
      return value;
    }
    const searchTerm = filterTerm.toLowerCase().trim();
    return value.filter((item) =>
      this.itemContainsSearchTerm(item, searchTerm)
    );
  }

  private itemContainsSearchTerm(item: any, searchTerm: string): boolean {
    return Object.values(item).some((value) => {
      return (
        typeof value === 'string' && value.toLowerCase().includes(searchTerm)
      );
    });
  }
}
