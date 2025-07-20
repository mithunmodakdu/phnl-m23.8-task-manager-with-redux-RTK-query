import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import { TaskCard } from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import type { ITask } from "@/types";

export default function Tasks() {
  
 const {data, isLoading, isError} = useGetTasksQuery(undefined);
 console.log(data, isLoading, isError)

 if(isLoading){
  return <p>Loading....</p>
 }

  return (
    <>
      <div className="flex justify-evenly items-center w-1/2 mx-auto my-5">
        <h1 className="text-4xl">Tasks</h1>
        <Tabs defaultValue="All">
          <TabsList>
            {/* <TabsTrigger onClick={() => dispatch(updateFilter("All")) } value="All">All</TabsTrigger>
            <TabsTrigger onClick={() => dispatch(updateFilter("High"))} value="High">High</TabsTrigger>
            <TabsTrigger  onClick={() => dispatch(updateFilter("Medium"))} value="Medium">Medium</TabsTrigger>
            <TabsTrigger  onClick={() => dispatch(updateFilter("Low"))} value="Low">Low</TabsTrigger> */}
          </TabsList>
        </Tabs>
        <AddTaskModal></AddTaskModal>
      </div>
      <div className="space-y-5 mx-auto w-1/2">
        {!isLoading && data.tasks.map((task : ITask) => (
          <TaskCard key={task._id} task={task}></TaskCard>
        ))}
      </div>
    </>
  );
}
