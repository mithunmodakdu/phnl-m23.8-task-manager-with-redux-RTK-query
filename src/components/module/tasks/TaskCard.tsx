import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { deleteTask, toggleCompleteState } from "@/redux/features/task/taskSlice"
import { selectUsers } from "@/redux/features/user/userSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import type { ITask } from "@/types"
import { Trash2Icon } from "lucide-react"

interface IProps{
  task: ITask
}

export function TaskCard({task} : IProps) {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const assignedUser = users.find(user => user.id === task.assignedTo);

  return (
    <Card className={cn("w-full", {
      "bg-green-500": task.priority === "Low",
      "bg-amber-400": task.priority === "Medium",
      "bg-red-500": task.priority === "High"
    })}>
      <CardHeader>
        <CardTitle className={cn({"line-through": task.isCompleted})}>{task.title}</CardTitle>
        <CardDescription className={cn({"line-through": task.isCompleted})}>
          {task.description}
          
         
        </CardDescription>
        <CardDescription>Assigned to {assignedUser? assignedUser.name : "none"}</CardDescription>
        <CardAction className="flex justify-center items-center gap-5">
          <Button variant="link" onClick={() => dispatch(deleteTask(task.id))}>
            <Trash2Icon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
          <Checkbox checked={task.isCompleted} onClick={() => dispatch(toggleCompleteState(task.id))} />
        </CardAction>
      </CardHeader>
      
    </Card>
  )
}
