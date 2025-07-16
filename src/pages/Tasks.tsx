import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import { TaskCard } from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";

export default function Tasks() {
  // const tasks = useAppSelector((state) => state.todo.tasks);
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);

  return (
    <>
      <div className="flex justify-between items-center w-1/2 mx-auto my-5">
        <h1 className="text-4xl">Tasks</h1>
        <AddTaskModal></AddTaskModal>
      </div>
      <div className="space-y-5 mx-auto w-1/2">
        {tasks.map((task) => (
          <TaskCard task={task}></TaskCard>
        ))}
      </div>
    </>
  );
}
