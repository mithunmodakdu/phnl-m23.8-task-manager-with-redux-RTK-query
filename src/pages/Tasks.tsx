import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";

export default function Tasks() {
  // const tasks = useAppSelector((state) => state.todo.tasks);
  const tasks = useAppSelector(selectTasks);
  console.log(tasks)
  
  const filter = useAppSelector(selectFilter);
  console.log(filter)

  return (
    <div>
      Tasks Component
    </div>
  );
}