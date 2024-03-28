'use client'

import { useEffect, useState } from 'react'
import type { Task } from '@/utils/services/task/types'

import { Button, Input, Select } from '..'

import { IoMdClose } from 'react-icons/io'

interface EditTaskProps {
  task?: Task
  openState: boolean
  onSave: (task: Task) => void
  onClose: () => void
  dictionary: any
}

const setOverflow = (text: string): void => {
  if (document === undefined) return
  document.body.style.overflow = text
}

export default function EditTask({
  task,
  openState,
  dictionary,
  onSave,
  onClose,
}: EditTaskProps): JSX.Element {
  const [editTask, setEditTask] = useState<Task>(
    task || {
      title: '',
      description: '',
      userId: '',
      status: 0,
      priority: 0,
    }
  )

  useEffect(() => {
    setEditTask(
      task || {
        title: '',
        description: '',
        userId: '',
        status: 0,
        priority: 0,
      }
    )
  }, [task])

  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => setMounted(true), [])
  if (mounted === false) return <></>

  // fix for scroll issue
  const { warn, error } = console

  console.warn = (...args: any) => {
    if (
      /Skipping auto-scroll behavior due to `position: sticky` or `position: fixed` on element:/.test(
        args[0]
      )
    )
      return
    warn(...args)
  }
  console.error = (...args: any) => {
    if (/setOverflow/.test(args[0])) return
    error(...args)
  }

  if (!openState) {
    setOverflow('auto')
    return <></>
  }

  setOverflow('hidden')

  return (
    <aside
      className="h-full w-full md:w-1/2 bg-[#FAFAFA] dark:bg-[#232323] p-4 rounded-lg shadow-lg fixed top-0 right-0 z-10 flex flex-col gap-4 justify-center items-center transition-all duration-300 ease-in-out"
      style={{ transform: openState ? 'translateX(0)' : 'translateX(100%)' }}
    >
      <IoMdClose
        className="absolute top-4 md:top-20 left-4 cursor-pointer text-2xl hover:rotate-90 transition-all duration-100 ease-in-out"
        onClick={onClose}
      />
      <h2 className="text-center text-xl font-semibold">{editTask.title}</h2>
      <section className="grid gap-4 w-4/5">
        <Input
          type="text"
          title="Title"
          value={editTask?.title}
          onChange={(event) =>
            setEditTask({ ...editTask, title: event.target.value })
          }
        />
        <Input
          type="text"
          title="Description"
          value={editTask?.description}
          onChange={(event) =>
            setEditTask({ ...editTask, description: event.target.value })
          }
        />
        <Select
          label={dictionary.task.status.name}
          selected={{
            label: dictionary.task.status.id[editTask?.status as number],
            value: editTask?.status as number,
          }}
          options={[
            { label: dictionary.task.status.id[0], value: 0 },
            { label: dictionary.task.status.id[1], value: 1 },
            { label: dictionary.task.status.id[2], value: 2 },
          ]}
          onChange={(event) =>
            setEditTask({ ...editTask, status: Number(event) })
          }
        />
        <Select
          label={dictionary.task.priority.name}
          selected={{
            label: dictionary.task.priority.id[editTask?.priority as number],
            value: editTask?.priority as number,
          }}
          options={[
            { label: dictionary.task.priority.id[0], value: 0 },
            { label: dictionary.task.priority.id[1], value: 1 },
            { label: dictionary.task.priority.id[2], value: 2 },
          ]}
          onChange={(event) =>
            setEditTask({ ...editTask, priority: Number(event) })
          }
        />
        <Button
          color="Green"
          onClick={() => {
            onSave(editTask as Task)
            onClose()
          }}
        >
          Save
        </Button>
      </section>
    </aside>
  )
}
