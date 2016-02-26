import {TodoService} from 'todos.service';

export function main() {
  describe('NameList Service', () => {
    let nameListService;

    beforeEach(() => {
      nameListService = new TodoService;
    });

    it('should return the list of names', () => {
      let names = nameListService.get();
      expect(names).toEqual(jasmine.any(Array));
    });
  });
}
