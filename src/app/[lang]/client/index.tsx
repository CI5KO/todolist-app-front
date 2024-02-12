"use client";

import { useEffect, useState } from "react";

import { Button, Input, Modal, Select } from "@/utils/components";

import TaskView from "@/utils/services/task";
import type { Task } from "@/utils/services/task/types";

import { MdAdd, MdDelete } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const RenderTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [mounted, setMounted] = useState<boolean>(false);

  const fetchTasks = async () => {
    try {
      const response = await TaskView.get("task");
      setTasks(response);
    } catch (error) {
      console.error(error);
    }
  };

  const onDelete = async (title: string) => {
    try {
      await TaskView.delete(title);
      setTasks((prev) => prev.filter((task) => task.title !== title));
      console.log("deleted");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
    setMounted(true);
  }, []);

  if (!mounted) return <>Loading...</>;

  return (
    <div className="grid gap-4 py-4">
      {tasks.map((task, index) => (
        <div key={index}>
          <div className="border-2 border-blue-500 rounded-2xl p-4">
            <h1 className="text-xl font-semibold text-center pb-2">
              {task.title}
            </h1>
            <p>{task.description}</p>
            <div className="grid grid-cols-2 py-4">
              <p className="text-center">{task.status}</p>
              <p className="text-center">{task.priority}</p>
            </div>
            <Button
              color="Red"
              Icon={MdDelete}
              onClick={() => onDelete(task.title as string)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function ClientPage({
  params: { lang },
  dictionary,
}: {
  params: { lang: string };
  dictionary: any;
}) {
  const [task, setTask] = useState<Task>();
  const [modal, setModal] = useState<boolean>(false);

  const handleAddTask = async () => {
    try {
      const response = await TaskView.create(task as Task);
      console.log("Task added! , ", response);
      setModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="grid">
      <Modal isOpen={modal} onClose={() => setModal(false)}>
        <h1 className="text-center text-2xl pb-4 font-semibold">Add task</h1>
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
            displayOption="Status"
            options={[
              { label: "Not done", value: 0 },
              { label: "Working", value: 1 },
              { label: "Done", value: 2 },
            ]}
            onChange={(event) =>
              setTask({ ...task, status: event.target.value })
            }
          />
          <Select
            displayOption="Priority"
            options={[
              { label: "Low", value: 0 },
              { label: "Medium", value: 1 },
              { label: "High", value: 2 },
            ]}
            onChange={(event) =>
              setTask({ ...task, priority: event.target.value })
            }
          />
        </div>
        <div className="grid grid-cols-2 gap-2 pt-2">
          <Button Icon={IoMdClose} color="Red" onClick={() => setModal(false)}>
            Cancel
          </Button>
          <Button Icon={MdAdd} color="Green" onClick={() => handleAddTask()}>
            Add
          </Button>
        </div>
      </Modal>
      <div className="justify-self-center">
        <Button Icon={MdAdd} onClick={() => setModal(true)}>
          Add task
        </Button>
      </div>
      <RenderTasks />
    </main>
  );
}
