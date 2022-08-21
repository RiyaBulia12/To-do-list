/**
 * @jest-environment jsdom
 */
import statusUpdate from './statusUpdate.js';

describe('Update Task Status', () => {
  const dummyList = [{ index: 1, description: 'dummyTask1', completed: false }, { index: 1, description: 'dummyTask2', completed: false }, { index: 1, description: 'dummyTask3', completed: false }, { index: 1, description: 'dummyTask4', completed: false }, { index: 1, description: 'dummyTask5', completed: false }];
  it('should update local storage task status to completed', () => {
    localStorage.setItem('task', JSON.stringify(dummyList));
    const incompleteTask = JSON.parse(localStorage.getItem('task'))[3].completed;
    const ev = { target: { id: 'test-4' } };

    statusUpdate(ev);

    const completeTask = JSON.parse(localStorage.getItem('task'))[3].completed;
    expect(completeTask).toBeTruthy();
    expect(completeTask).not.toEqual(incompleteTask);
  });

  it('should change completed status true to false', () => {
    const completedTask = JSON.parse(localStorage.getItem('task'))[3].completed;
    const ev = { target: { id: 'test-4' } };

    statusUpdate(ev);

    const incompleteTask = JSON.parse(localStorage.getItem('task'))[3].completed;
    expect(incompleteTask).toBeFalsy();
    expect(incompleteTask).not.toEqual(completedTask);
  });
});
