'use client'

import { useRef, useState } from 'react'

import useOutsideClick from '../../../hooks/useOutsideClick'

import { Button, Modal } from '../..'

import { MdModeEdit, MdDelete } from 'react-icons/md'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IoEye, IoClose } from 'react-icons/io5'

import type { Task } from '@/utils/services/task/types'

interface TaskCardProps {
  task: Task
  dictionary: any
  onDelete: (id: string) => void
  onEdit: (task: Task) => void
}

interface OptionsMenuProps {
  isOpen: boolean
  taskTitle: string | undefined
  dictionary: any
  onView: () => void
  onEdit: () => void
  onDelete: () => void
  onClose: () => void
}

function ToggleOptionsMenu({
  isOpen,
  taskTitle,
  dictionary,
  onView,
  onEdit,
  onDelete,
  onClose,
}: OptionsMenuProps): JSX.Element {
  return (
    <div
      className={`${
        isOpen ? 'opacity-100 flex' : 'opacity-0 pointer-events-none hidden'
      } fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-50 ${
        isOpen ? '' : 'hidden'
      } md:absolute md:inset-auto md:z-auto md:bg-transparent md:p-2 md:rounded-lg md:transition-all md:duration-200 md:w-[150px] md:right-4 md:top-12`}
    >
      <section className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg w-full max-w-xs">
        <h2 className="text-center text-xl font-semibold pb-4 md:hidden">
          {taskTitle}
        </h2>
        <ul className="grid gap-2">
          <li
            className="flex space-x-2 hover:cursor-pointer hover:text-ok"
            onClick={() => {
              onView()
              onClose()
            }}
          >
            <IoEye className="self-center" />
            <p>{dictionary.button.open}</p>
          </li>
          <li
            className="flex space-x-2 hover:cursor-pointer hover:text-warning"
            onClick={() => {
              onEdit()
              onClose()
            }}
          >
            <MdModeEdit className="self-center" />
            <p>{dictionary.button.edit}</p>
          </li>
          <li
            className="flex space-x-2 hover:cursor-pointer hover:text-danger"
            onClick={() => {
              onDelete()
              onClose()
            }}
          >
            <MdDelete className="self-center" />
            <p>{dictionary.button.delete}</p>
          </li>
          <li
            className="flex space-x-2 hover:cursor-pointer hover:text-primary md:hidden"
            onClick={() => {
              onClose()
            }}
          >
            <IoClose className="self-center" />
            <p>{dictionary.button.close}</p>
          </li>
        </ul>
      </section>
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
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const cardRef = useRef<HTMLDivElement>(null)

  useOutsideClick(cardRef, () => {
    if (optionsMenu) setOptionsMneu(false)
  })

  return (
    <>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="grid">
          <h1 className="text-center text-lg font-semibold pb-4">
            {task.title}
          </h1>
          <p className="text-justify pb-4">{task.description}</p>
          <div className="grid gap-2">
            <div className="group flex flex-row">
              <p className="p-1 rounded-md min-w-fit max-w-[100px] text-sm bg-primary">
                {dictionary.task.status.id[task.status as number]}
              </p>
              <p className="ml-2 p-1 rounded-md min-w-fit max-w-[100px] text-sm text-center hidden group-hover:block bg-white dark:bg-slate-800">
                {dictionary.task.status.name}
              </p>
            </div>
            <div className="group flex flex-row">
              <p className="p-1 rounded-md min-w-fit max-w-[100px] text-sm bg-secondary">
                {dictionary.task.priority.id[task.priority as number]}
              </p>
              <p className="ml-2 p-1 rounded-md min-w-fit max-w-[100px] text-sm text-center hidden group-hover:block bg-white dark:bg-slate-800">
                {dictionary.task.priority.name}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 pt-4">
            <Button
              color="Orange"
              onClick={() => {
                onEdit(task)
                setModalOpen(false)
              }}
            >
              {dictionary.button.editTask}
            </Button>
            <Button
              color="Red"
              onClick={() => {
                setModalOpen(false)
                onDelete(task.uuid as string)
              }}
            >
              {dictionary.button.deleteTask}
            </Button>
          </div>
        </div>
      </Modal>
      <div
        className="border-2 border-primary rounded-lg p-4 relative"
        ref={cardRef}
      >
        <div
          className={`absolute top-5 right-5 rounded-full hover:bg-slate-400/50 dark:hover:bg-slate-800/50 hover:cursor-pointer`}
          onClick={() => setOptionsMneu(!optionsMenu)}
        >
          {optionsMenu ? (
            <IoClose className="p-2 text-3xl hover:text-danger" />
          ) : (
            <BsThreeDotsVertical className="p-2 text-3xl hover:text-primary" />
          )}
        </div>
        <ToggleOptionsMenu
          isOpen={optionsMenu}
          taskTitle={task.title}
          dictionary={dictionary}
          onView={() => setModalOpen(true)}
          onEdit={() => onEdit(task)}
          onDelete={() => onDelete(task.uuid as string)}
          onClose={() => setOptionsMneu(false)}
        />
        <h1 className="text-xl font-semibold pb-2 line-clamp-1">
          {task.title}
        </h1>
        <p className="mb-2 line-clamp-1">{task.description}</p>
        <div className="grid gap-y-2 w-fit">
          <div className="group flex flex-row">
            <p className="p-1 rounded-md min-w-fit max-w-[100px] text-sm bg-primary">
              {dictionary.task.status.id[task.status as number]}
            </p>
            <p className="ml-2 p-1 rounded-md min-w-fit max-w-[100px] text-sm text-center hidden group-hover:block bg-white dark:bg-slate-800">
              {dictionary.task.status.name}
            </p>
          </div>
          <div className="group flex flex-row">
            <p className="p-1 rounded-md min-w-fit max-w-[100px] text-sm bg-secondary">
              {dictionary.task.priority.id[task.priority as number]}
            </p>
            <p className="ml-2 p-1 rounded-md min-w-fit max-w-[100px] text-sm text-center hidden group-hover:block bg-white dark:bg-slate-800">
              {dictionary.task.priority.name}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
