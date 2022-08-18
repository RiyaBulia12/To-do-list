/**
 * @jest-environment jsdom
 */
import TASK from './task.js';

describe('Add task to the list', () => {
   const tasks = new TASK();
   const dummyList = [{ index: 1, description: 'dummyTask1', completed: false }, { index: 1, description: 'dummyTask2', completed: false }, { index: 1, description: 'dummyTask3', completed: false }, { index: 1, description: 'dummyTask4', completed: false }, { index: 1, description: 'dummyTask5', completed: false }];

   it('should return 0 task when add() is NOT called ', () => {
      const expectedVal = [];
      const actual = TASK.fetch('dummyStorage');
      expect(tasks.taskList.length).toEqual(0);
      expect(actual).toEqual(expectedVal);
   });

   it('should set storage', () => {
      const expectedVal = ['dummyList'];
      TASK.updateStorage('dummyStorage', ['dummyList']);
      const actual = TASK.fetch('dummyStorage');
      expect(actual).toEqual(expectedVal);
   });

   it('should add task to the list and localstorage', () => {
      const expectedVal = [{ index: 1, description: 'dummyTask1', completed: false }]
      tasks.add(dummyList[0]);
      expect(tasks.taskList).not.toBeNull();
      expect(tasks.taskList).toEqual(expectedVal);
      expect(localStorage.getItem('task')).toEqual(JSON.stringify(expectedVal));
   });

   it('should add one more task to the list and storage', () => {
      const expectedVal = [{ index: 1, description: 'dummyTask1', completed: false }, { index: 1, description: 'dummyTask2', completed: false }]
      tasks.add(dummyList[1]);
      expect(tasks.taskList).not.toBeNull();
      expect(tasks.taskList.length).toEqual(2);
      expect(localStorage.getItem('task')).toEqual(JSON.stringify(expectedVal));
   });

   it('should update tasks index with correct series ', () => {
      tasks.taskList = dummyList;
      tasks.updateIndex();
      expect(dummyList[0].index).toEqual(1);
      expect(dummyList[1].index).toEqual(2);
      expect(dummyList[2].index).toEqual(3);
      expect(dummyList[3].index).toEqual(4);
      expect(dummyList[4].index).toEqual(5);
   });
});
