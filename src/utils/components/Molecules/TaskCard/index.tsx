import { Button } from '../..'

import { MdModeEdit, MdDelete } from 'react-icons/md'
import { BsThreeDotsVertical } from 'react-icons/bs'

import type { Task } from '@/utils/services/task/types'

interface TaskCardProps {
  task: Task
  dictionary: any
  onDelete: (id: string) => void
  onEdit: (task: Task) => void
}

export default function TaskCard({
  task,
  dictionary,
  onDelete,
  onEdit,
}: TaskCardProps) {
  return (
    <div className="border-2 border-blue-500 rounded-2xl p-4 relative">
      <div className="absolute top-5 right-5 rounded-full hover:bg-slate-400 dark:hover:bg-slate-800 hover:cursor-pointer">
        <BsThreeDotsVertical className="p-2 text-3xl" />
      </div>
      <h1 className="text-xl font-semibold text-center pb-2">{task.title}</h1>
      <p>{task.description}</p>
      <div className="grid md:grid-cols-2 py-4 gap-4">
        <p className="text-center p-2 rounded-xl bg-red-500">
          {dictionary.task.status.name}:{' '}
          {dictionary.task.status.id[task.status as number]}
        </p>
        <p className="text-center p-2 rounded-xl bg-green-500">
          {dictionary.task.priority.name}:{' '}
          {dictionary.task.priority.id[task.priority as number]}
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Button color="Orange" Icon={MdModeEdit} onClick={() => onEdit(task)}>
          {dictionary.button.editTask}
        </Button>
        <Button
          color="Red"
          Icon={MdDelete}
          onClick={() => onDelete(task.uuid as string)}
        >
          {dictionary.button.deleteTask}
        </Button>
      </div>
    </div>
  )
}
