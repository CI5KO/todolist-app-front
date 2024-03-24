'use client'

import { useRef, useState } from 'react'
import { Button } from '../..'

import useOutsideClick from '../../../hooks/useOutsideClick'

import { MdModeEdit, MdDelete } from 'react-icons/md'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'

import type { Task } from '@/utils/services/task/types'

interface TaskCardProps {
  task: Task
  dictionary: any
  onDelete: (id: string) => void
  onEdit: (task: Task) => void
}

function ToggleOptionsMenu({ isOpen }: { isOpen: boolean }): JSX.Element {
  return (
    <div
      className={`${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } absolute right-4 top-12 bg-slate-400 dark:bg-slate-800 p-2 rounded-lg transition-all duration-200`}
    >
      <ul className="text-right">
        <li>Edit</li>
        <li>Delete</li>
      </ul>
    </div>
  )
}

export default function TaskCard({
  task,
  dictionary,
  onDelete,
  onEdit,
}: TaskCardProps) {
  const [optionsMenu, setOptionsMneu] = useState<boolean>(false)

  const cardRef = useRef<HTMLDivElement>(null)

  useOutsideClick(cardRef, () => {
    if (optionsMenu) setOptionsMneu(false)
  })

  return (
    <div
      className="border-2 border-blue-500 rounded-lg p-4 relative"
      ref={cardRef}
    >
      <div
        className={`absolute top-5 right-5 rounded-full hover:bg-slate-400/50 dark:hover:bg-slate-800/50 hover:cursor-pointer`}
        onClick={() => setOptionsMneu(!optionsMenu)}
      >
        {optionsMenu ? (
          <IoClose className="p-2 text-3xl hover:text-red-500" />
        ) : (
          <BsThreeDotsVertical className="p-2 text-3xl hover:text-blue-500" />
        )}
      </div>
      <ToggleOptionsMenu isOpen={optionsMenu} />
      <h1 className="text-xl font-semibold pb-2">{task.title}</h1>
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
