/**
 * @jest-environment jsdom
 */

import { clearTask } from './crud.js';

describe('Add task to the list', () => {
  const { location } = window;

  const dummyList = [
    { index: 1, description: 'dummyTask1', completed: true },
    { index: 1, description: 'dummyTask2', completed: false },
    { index: 1, description: 'dummyTask3', completed: false },
    { index: 1, description: 'dummyTask4', completed: false },
    { index: 1, description: 'dummyTask5', completed: false },
  ];
  localStorage.setItem('task', JSON.stringify(dummyList));

  beforeAll(() => {
    delete window.location;
    window.location = { reload: jest.fn() };
  });

  afterAll(() => {
    window.location = location;
  });

  it('should delete completed=true task from storage', () => {
    let storageMock = JSON.parse(localStorage.getItem('task'));
    const deleteTask = storageMock[0];
    clearTask();
    storageMock = JSON.parse(localStorage.getItem('task'));
    expect(storageMock[0].description).not.toEqual(deleteTask.description);
    expect(jest.isMockFunction(window.location.reload)).toBe(true);
  });

  it('should NOT delete completed=false task from storage', () => {
    const storageMock = JSON.parse(localStorage.getItem('task'));
    const expectedSize = storageMock.length;
    clearTask();
    const actualSize = JSON.parse(localStorage.getItem('task')).length;
    expect(actualSize).toEqual(expectedSize);
  });

  it('should delete ALL task from storage', () => {
    dummyList[0].completed = true;
    dummyList[1].completed = true;
    dummyList[2].completed = true;
    dummyList[3].completed = true;
    dummyList[4].completed = true;
    localStorage.setItem('task', JSON.stringify(dummyList));
    clearTask();
    const actualSize = JSON.parse(localStorage.getItem('task')).length;
    expect(actualSize).toEqual(0);
  });
});
