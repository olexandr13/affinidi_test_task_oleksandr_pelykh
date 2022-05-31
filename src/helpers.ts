export function sortObjectsInArrayByPropValue(arr: any[], propName: string, order: 'asc' | 'desc'): any[] {
  return arr.sort((x: any, y: any): number => {
    if (order === 'asc') {
      return x[propName] > y[propName] ? 1 : -1
    } else {
      return x[propName] < y[propName] ? 1 : -1
    }
  });
}
