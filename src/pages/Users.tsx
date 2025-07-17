import { AddUserModal } from "@/components/module/users/AddUserModal";
import { UserCard } from "@/components/module/users/UserCard";
import { useAppSelector } from "@/redux/hooks";

export default function Users() {
  const users = useAppSelector((state) => state.users.users);
  console.log(users);

  // const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex justify-evenly items-center w-1/2 mx-auto my-5">
        <h1 className="text-4xl">Users</h1>
        <AddUserModal></AddUserModal>
      </div>
      <div className="mx-auto w-1/2">
        <div className="grid grid-cols-2 gap-5 ">
          {users.map((user) => (
            <UserCard user={user} key={user.id}></UserCard>
          ))}
        </div>
      </div>
    </>
  );
}
