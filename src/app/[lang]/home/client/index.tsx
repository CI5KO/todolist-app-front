'use client'

/**
 * Author: CI5KO
 * Creation Date: April 14, 2024
 * Last Modification: April 23, 2024
 *
 * Contact: hector_oliva16k@hotmail.com
 *
 * This code is owned by CI5KO.
 * You are welcome to contribute to the original repository.
 *
 * Any contributions to this repository are subject to the original terms stated herein.
 */

import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { useState, Suspense } from 'react'

import {
  Button,
  Input,
  Modal,
  Select,
  EditTask,
  NavBar,
} from '@/utils/components'

import Skeleton from '@/utils/components/Molecules/TaskCard/Skeleton'

import TaskView from '@/utils/services/task'

import type { Task, TaskRegister } from '@/utils/services/task/types'
import { type UserLogged } from '@/utils/services/user/types'
import { type AvailableLang } from '@/utils/lang'

import { MdAdd, MdLibraryAdd } from 'react-icons/md'
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
  params: { lang: AvailableLang }
  dictionary: any
  user: UserLogged
  tasksData: Task[]
}): JSX.Element {
  const taskStateDefault: TaskRegister = {
    title: '',
    description: '',
    status: undefined,
    priority: undefined,
    userId: user.uuid,
  }
  const [task, setTask] = useState<TaskRegister>(taskStateDefault)

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
      setTask(taskStateDefault)
      setModal(false)
    } catch (error) {
      console.error(error)
    }
  }

  const onUpdate = async (updatedTask: Task) => {
    try {
      await TaskView.update(updatedTask)
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

  const disabledAddTask = (): boolean =>
    task.title === '' ||
    task.description === '' ||
    task.status === undefined ||
    task.priority === undefined

  return (
    <>
      <EditTask
        task={task}
        openState={aside}
        dictionary={dictionary}
        onSave={onUpdate}
        onClose={() => {
          setAside(false)
          setTask(taskStateDefault)
        }}
      />
      <NavBar lang={lang} dictionary={dictionary} />
      <Modal
        isOpen={modal}
        onClose={() => {
          setModal(false)
          setTask(taskStateDefault)
        }}
      >
        <h1 className="text-center text-2xl pb-4 font-semibold">
          {dictionary.button.addTask}
        </h1>
        <div className="grid gap-2">
          <Input
            type="text"
            title={dictionary.home.title}
            value={task.title}
            onChange={(event) =>
              setTask({ ...task, title: event.target.value })
            }
          />
          <Input
            type="text"
            title={dictionary.home.description}
            value={task.description}
            onChange={(event) =>
              setTask({ ...task, description: event.target.value })
            }
          />
          <Select
            label={dictionary.task.status.name}
            options={[
              { label: dictionary.task.status.id[0], value: 0 },
              { label: dictionary.task.status.id[1], value: 1 },
              { label: dictionary.task.status.id[2], value: 2 },
            ]}
            onChange={(value) => setTask({ ...task, status: Number(value) })}
          />
          <Select
            label={dictionary.task.priority.name}
            options={[
              { label: dictionary.task.priority.id[0], value: 0 },
              { label: dictionary.task.priority.id[1], value: 1 },
              { label: dictionary.task.priority.id[2], value: 2 },
            ]}
            onChange={(value) => setTask({ ...task, priority: Number(value) })}
          />
        </div>
        <div className="grid grid-cols-2 gap-2 pt-2">
          <Button
            Icon={IoMdClose}
            color="Red"
            onClick={() => {
              setModal(false)
              setTask(taskStateDefault)
            }}
          >
            {dictionary.button.cancel}
          </Button>
          <Button
            Icon={MdAdd}
            color="Green"
            disabled={disabledAddTask()}
            onClick={onCreate}
          >
            {dictionary.button.addTask}
          </Button>
        </div>
      </Modal>
      <main className="grid">
        <div className="grid gap-2 md:grid-cols-3 py-4">
          <section>
            <h1 className="text-center text-lg bg-danger rounded-t-lg font-semibold mb-2">
              {dictionary.task.status.id[0]} (
              {tasks.filter((task) => task.status === 0).length})
            </h1>
            <div className="grid gap-2">
              <Suspense fallback={<Skeleton />}>
                {tasks
                  .sort(
                    (a, b) => (b.priority as number) - (a.priority as number)
                  )
                  .map(
                    (task, index) =>
                      task.status === 0 && (
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
                      )
                  )}
              </Suspense>
            </div>
          </section>
          <section>
            <h1 className="text-center text-lg bg-warning rounded-t-lg font-semibold mb-2">
              {dictionary.task.status.id[1]} (
              {tasks.filter((task) => task.status === 1).length})
            </h1>
            <div className="grid gap-2">
              <Suspense fallback={<Skeleton />}>
                {tasks
                  .sort(
                    (a, b) => (b.priority as number) - (a.priority as number)
                  )
                  .map(
                    (task, index) =>
                      task.status === 1 && (
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
                      )
                  )}
              </Suspense>
            </div>
          </section>
          <section>
            <h1 className="text-center text-lg bg-ok rounded-t-lg font-semibold mb-2">
              {dictionary.task.status.id[2]} (
              {tasks.filter((task) => task.status === 2).length})
            </h1>
            <div className="grid gap-2">
              <Suspense fallback={<Skeleton />}>
                {tasks
                  .sort(
                    (a, b) => (b.priority as number) - (a.priority as number)
                  )
                  .map(
                    (task, index) =>
                      task.status === 2 && (
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
                      )
                  )}
              </Suspense>
            </div>
          </section>
        </div>
        <button
          className={clsx(
            'bg-ok rounded-xl p-4 w-fit fixed bottom-24 right-5 md:bottom-20 md:right-20',
            { 'animate-pulse': tasks.length === 0 }
          )}
          onClick={() => setModal(true)}
        >
          <MdLibraryAdd className="text-3xl" />
        </button>
      </main>
    </>
  )
}
