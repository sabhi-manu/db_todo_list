import { useState } from "react"
import { useSelector } from "react-redux"
import Input from "./Input"
import List from "./List"

const Todo = () => {
  let { todoList } = useSelector(state => state.todo)

  const [task, setTask] = useState("")
  const [date, setDate] = useState("")
  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState(null)

  const editFun = (ind) => {
    let obj = todoList.find((val) => val._id === ind)
    setTask(obj.task)
    setDate(obj.date)
    setEdit(true)
    setEditId(ind)
  }

  let changeStateEdit = () => setEdit(!edit)

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          My Todo App
        </h1>

        {/* Input Section */}
        <Input
          task={task}
          setTask={setTask}
          date={date}
          setDate={setDate}
          edit={edit}
          changeStateEdit={changeStateEdit}
          editId={editId}
        />

        {/* Todo List */}
        <List editFun={editFun} />
      </div>
    </div>
  )
}

export default Todo
