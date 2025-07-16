import { TaskCard } from "@/components/module/tasks/TaskCard";
import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";

export default function Tasks() {
  // const tasks = useAppSelector((state) => state.todo.tasks);
  const tasks = useAppSelector(selectTasks);
  console.log(tasks)
  
  const filter = useAppSelector(selectFilter);
  console.log(filter)

  return (
    <div className="space-y-5 mx-auto w-1/2">
      {
        tasks.map((task) =>(<TaskCard task={task}></TaskCard>))
      }
    </div>
  );
}