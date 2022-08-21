/**
 * @jest-environment jsdom
 */

import { clearTask, changeTaskDesc } from './crud.js';

const dummyList = [
  { index: 1, description: 'dummyTask1', completed: true },
  { index: 4, description: 'dummyTask2', completed: false },
  { index: 5, description: 'dummyTask3', completed: false },
  { index: 8, description: 'dummyTask4', completed: false },
  { index: 9, description: 'dummyTask5', completed: false },
];

describe('Delete Task from storage', () => {
  const { location } = window;

  beforeAll(() => {
    localStorage.setItem('task', JSON.stringify(dummyList));

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

describe('Change the value for the task', () => {
  it('should change value in local storage', () => {
    localStorage.setItem('task', JSON.stringify(dummyList));
    const beforeChange = JSON.parse(localStorage.getItem('task'));
    const event = { target: { id: 1, value: 'testDummy' } };
    changeTaskDesc(event);
    const afterChange = JSON.parse(localStorage.getItem('task'));
    expect(beforeChange[0]).not.toEqual(afterChange[0]);
    expect(afterChange[0].description).toBe('testDummy');
  });
  it('should update index for the task list', () => {
    localStorage.setItem('task', JSON.stringify(dummyList));
    const beforeChange = JSON.parse(localStorage.getItem('task'));
    const event = { target: { id: 1, value: 'testDummy' } };
    changeTaskDesc(event);
    const afterChange = JSON.parse(localStorage.getItem('task'));
    expect(beforeChange[0]).not.toEqual(afterChange[0]);
  });
});
