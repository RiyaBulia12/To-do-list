/**
 * @jest-environment jsdom
 */

import { addToStorage, clearTask, addTaskHelperMethod } from './crud.js';
import TASK from './model/task.js';
import statusUpdate from './statusUpdate.js';

fdescribe('Add task to the list', () => {


  const tasks = new TASK();
  const { location } = window;

  const dummyList = [{ index: 1, description: 'dummyTask1', completed: true }, { index: 1, description: 'dummyTask2', completed: false }, { index: 1, description: 'dummyTask3', completed: false }, { index: 1, description: 'dummyTask4', completed: false }, { index: 1, description: 'dummyTask5', completed: false }];
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
    let storageMock = JSON.parse(localStorage.getItem('task'));
    const expectedSize = storageMock.length;
    clearTask();
    const actualSize = JSON.parse(localStorage.getItem('task')).length;
    expect(actualSize).toEqual(expectedSize);
  });


  fit('should delete completed=true task from storage', () => {
    document.body.innerHTML = `<input type="text" id="add-task" value="test">`;
    const addTask = document.getElementById('add-task');
    const returnVal = addTaskHelperMethod(addTask);
    // addTask = document.getElementById('add-task');
    expect().lastReturnedWith()
    // const mockCallBack = jest.fn();

    // const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
    // button.find('button').simulate('click');
    // addTask.value = 'dummyVal';



  });

});
