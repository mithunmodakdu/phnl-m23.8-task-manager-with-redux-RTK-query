import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { deleteUser } from "@/redux/features/user/userSlice"
import { useAppDispatch } from "@/redux/hooks"
import type { IUser } from "@/types"
import { Trash2Icon } from "lucide-react"

interface IProps{
  user: IUser
}

export function UserCard({user} : IProps) {
  const dispatch = useAppDispatch();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle >{user.name}</CardTitle>
        <CardAction className="flex justify-center items-center gap-5">
          <Button variant="link" onClick={() => dispatch(deleteUser(user.id))}>
            <Trash2Icon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </CardAction>
      </CardHeader>
      
    </Card>
  )
}
