import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import { TaskCard } from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Tasks() {
  // const tasks = useAppSelector((state) => state.todo.tasks);
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);

  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex justify-evenly items-center w-1/2 mx-auto my-5">
        <h1 className="text-4xl">Tasks</h1>
        <Tabs defaultValue="All">
          <TabsList>
            <TabsTrigger onClick={() => dispatch(updateFilter("All")) } value="All">All</TabsTrigger>
            <TabsTrigger onClick={() => dispatch(updateFilter("High"))} value="High">High</TabsTrigger>
            <TabsTrigger  onClick={() => dispatch(updateFilter("Medium"))} value="Medium">Medium</TabsTrigger>
            <TabsTrigger  onClick={() => dispatch(updateFilter("Low"))} value="Low">Low</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal></AddTaskModal>
      </div>
      <div className="space-y-5 mx-auto w-1/2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
      </div>
    </>
  );
}
