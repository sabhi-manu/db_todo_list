import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deteleTodoAction, todoToggleController } from '../features/actions/todoAction'

const List = ({ editFun }) => {
  const dispatch = useDispatch()
  const { todoList } = useSelector(state => state.todo)

  const deleteHandler = (id) => {
    dispatch(deteleTodoAction(id))
  }

  const doneHandler = (id) => {
    dispatch(todoToggleController(id))
  }

  const editHandler = (id) => {
    editFun(id)
  }

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 bg-white shadow-lg rounded-2xl p-4">
      <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-4">Your Todo List</h2>

      {/* Header Row */}
      <div className="grid grid-cols-3 font-semibold text-gray-600 border-b pb-2 mb-3 text-sm sm:text-base">
        <p>Task</p>
        <p>Deadline</p>
        <p className="text-center">Actions</p>
      </div>

      <ul className="space-y-3">
        {todoList.length === 0 ? (
          <p className="text-gray-500 text-center italic">No tasks yet. Add one above!</p>
        ) : (
          todoList.map((val) => (
            <li
              key={val._id}
              className={`grid grid-cols-3 items-center border-b py-2 px-2 rounded-md transition ${
                val.isDone ? 'bg-green-50' : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              {/* Task */}
              <p className={`truncate ${val.isDone ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                {val.task}
              </p>

              {/* Date */}
              <p className="text-gray-600 text-sm">{val.date}</p>

              {/* Buttons */}
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => deleteHandler(val._id)}
                  className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-sm"
                >
                  Delete
                </button>
                <button
                  onClick={() => doneHandler(val._id)}
                  className={`text-white px-3 py-1 rounded-md text-sm ${
                    val.isDone ? 'bg-green-600 hover:bg-green-700' : 'bg-yellow-500 hover:bg-yellow-600'
                  }`}
                >
                  {val.isDone ? 'Done' : 'Pending'}
                </button>
                <button
                  onClick={() => editHandler(val._id)}
                  className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md text-sm"
                >
                  Edit
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default List
