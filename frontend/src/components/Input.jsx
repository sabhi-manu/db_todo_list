import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodoAction, editTodoController } from '../features/actions/todoAction'

const Input = ({ task, setTask, date, setDate, edit, changeStateEdit, editId: id }) => {
  const dispatch = useDispatch()

  const addTaskHandler = (e) => {
    if (edit) {
      dispatch(editTodoController({ task, date, id }))
      changeStateEdit(false)
      setDate("")
      setTask("")
      return
    }
    dispatch(addTodoAction({ task, date }))
    setDate("")
    setTask("")
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-white shadow-md rounded-2xl p-4 w-full max-w-2xl mx-auto mt-6">
      <input
        type="text"
        name="inputTask"
        id="inputTask"
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="date"
        name="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button
        onClick={addTaskHandler}
        className={`px-5 py-2 font-semibold rounded-lg text-white transition
          ${edit ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-indigo-600 hover:bg-indigo-700'}
        `}
      >
        {edit ? "Edit" : "Add"}
      </button>
    </div>
  )
}

export default Input
