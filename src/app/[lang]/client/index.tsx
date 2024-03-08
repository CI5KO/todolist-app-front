"use client";

import { useEffect, useState } from "react";

import { Button, Input, Modal, Select, TaskCard } from "@/utils/components";

import TaskView from "@/utils/services/task";
import type { Task } from "@/utils/services/task/types";

import { MdAdd } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

export default function ClientPage({
  params: { lang },
  dictionary,
}: {
  params: { lang: string };
  dictionary: any;
}) {
  const [task, setTask] = useState<Task>();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [modal, setModal] = useState<boolean>(false);

  const fetchTasks = async () => {
    try {
      const response = await TaskView.get(
        process.env.NEXT_PUBLIC_MOCK_USER_ID as string
      );
      setTasks(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    try {
      const response = await TaskView.create(task as Task);
      setTasks((prev) => [...prev, response]);
      setModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const onDelete = async (id: string) => {
    try {
      await TaskView.delete(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const saveChanges = async (task: Task) => {
    try {
      const response = await TaskView.update(task);
      setTasks((prev) => prev.map((t) => (t.id === task.id ? response : t)));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="grid">
      <Modal
        isOpen={modal}
        onClose={() => {
          setModal(false);
          setTask(undefined);
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
              setModal(false);
              setTask(undefined);
            }}
          >
            Cancel
          </Button>
          <Button Icon={MdAdd} color="Green" onClick={() => handleAddTask()}>
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
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            task={task}
            dictionary={dictionary}
            onDelete={onDelete}
            onEdit={(task) => console.log(task)}
          />
        ))}
      </div>
    </main>
  );
}
