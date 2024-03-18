'use client'

import dynamic from 'next/dynamic'
import { useState, Suspense } from 'react'

import { Button, Input, Modal, Select, EditTask } from '@/utils/components'
import Skeleton from '@/utils/components/Molecules/TaskCard/Skeleton'

import TaskView from '@/utils/services/task'
import type { Task } from '@/utils/services/task/types'

import { type UserLogged } from '@/utils/services/user/types'

import { MdAdd } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'

const TaskCard = dynamic(
  () => import('@/utils/components/Molecules/TaskCard'),
  {
    ssr: false,
  }
)

export default function ClientPage({
  params: { lang },
  dictionary,
  user,
  tasksData,
}: {
  params: { lang: string }
  dictionary: any
  user: UserLogged
  tasksData: Task[]
}) {
  const [task, setTask] = useState<Task>()
  const [tasks, setTasks] = useState<Task[]>(tasksData)

  const [modal, setModal] = useState<boolean>(false)
  const [aside, setAside] = useState<boolean>(false)

  const onCreate = async () => {
    try {
      const response = await TaskView.create({
        ...task,
        userId: user.uuid,
      } as Task)

      setTasks((prev) => [...prev, response])
      setModal(false)
    } catch (error) {
      console.error(error)
    }
  }

  const onUpdate = async (updatedTask: Task) => {
    try {
      const response = await TaskView.update(updatedTask)
      setTasks((prev) =>
        prev.map((task) =>
          task.uuid === updatedTask.uuid ? updatedTask : task
        )
      )
    } catch (error) {
      console.error(error)
    }
  }

  const onDelete = async (uuid: string) => {
    try {
      await TaskView.delete(uuid)
      setTasks((prev) => prev.filter((task) => task.uuid !== uuid))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <EditTask
        task={task}
        openState={aside}
        dictionary={dictionary}
        onSave={onUpdate}
        onClose={() => {
          setAside(false)
          setTask(undefined)
        }}
      />
      <main className="grid">
        <Modal
          isOpen={modal}
          onClose={() => {
            setModal(false)
            setTask(undefined)
          }}
        >
          <h1 className="text-center text-2xl pb-4 font-semibold">
            {dictionary.button.addTask}
          </h1>
          <div className="grid gap-2">
            <Input
              type="text"
              title="Title"
              onChange={(event) =>
                setTask({ ...task, title: event.target.value })
              }
            />
            <Input
              type="text"
              title="Description"
              onChange={(event) =>
                setTask({ ...task, description: event.target.value })
              }
            />
            <Select
              displayOption={dictionary.task.status.name}
              options={[
                { label: dictionary.task.status.id[0], value: 0 },
                { label: dictionary.task.status.id[1], value: 1 },
                { label: dictionary.task.status.id[2], value: 2 },
              ]}
              onChange={(event) =>
                setTask({ ...task, status: event.target.value })
              }
            />
            <Select
              displayOption={dictionary.task.priority.name}
              options={[
                { label: dictionary.task.priority.id[0], value: 0 },
                { label: dictionary.task.priority.id[1], value: 1 },
                { label: dictionary.task.priority.id[2], value: 2 },
              ]}
              onChange={(event) =>
                setTask({ ...task, priority: event.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <Button
              Icon={IoMdClose}
              color="Red"
              onClick={() => {
                setModal(false)
                setTask(undefined)
              }}
            >
              Cancel
            </Button>
            <Button Icon={MdAdd} color="Green" onClick={() => onCreate()}>
              Add
            </Button>
          </div>
        </Modal>
        <div className="justify-self-center">
          <Button Icon={MdAdd} onClick={() => setModal(true)}>
            {dictionary.button.addTask}
          </Button>
        </div>
        <div className="grid gap-4 py-4">
          <Suspense
            fallback={
              <div className="grid gap-4 py-4">
                <Skeleton />
                <Skeleton />
              </div>
            }
          >
            {tasks.map((task, index) => (
              <TaskCard
                key={index}
                task={task}
                dictionary={dictionary}
                onDelete={onDelete}
                onEdit={(task) => {
                  setAside(!aside)
                  setTask(task)
                }}
              />
            ))}
          </Suspense>
        </div>
      </main>
    </>
  )
}
