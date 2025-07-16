import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { ITask } from "@/types"

interface IProps{
  task: ITask
}

export function TaskCard({task} : IProps) {
  return (
    <Card className={cn("w-full max-w-sm", {
      "bg-green-500": task.priority === "Low",
      "bg-amber-400": task.priority === "Medium",
      "bg-red-500": task.priority === "High"
    })}>
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>
          {task.description}
        </CardDescription>
        <CardAction>
          <Button variant="link">Delete</Button>
        </CardAction>
      </CardHeader>
      
    </Card>
  )
}
