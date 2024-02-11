"use client";

import { useState } from "react";

import { Button, Input, Modal, Select } from "@/utils/components";

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
  const [modal, setModal] = useState<boolean>(false);
  const [task, setTask] = useState<Task>();

  const handleAddTask = () => {
    TaskView.create(task as Task);
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
    </main>
  );
}
