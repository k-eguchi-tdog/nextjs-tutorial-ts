import React from "react";
import { GetTodoQuery } from "@/generated/graphql";
import { PrioritiesComboBoxContent } from "@/features/priorities/containers/combobox"
import { format, parseISO } from "date-fns";
import { useForm } from "react-hook-form";

export type TodoFormData = {
  name: string,
  detail: string,
  priority_id: string,
  deadline: Date,
  done: boolean,
}

type Props = {
    loading: any,
    error: any,
    todo: GetTodoQuery['todo'] | undefined,
    onSubmit: (data: TodoFormData) => void,
}

export const TodoForm = ({ loading, error, todo, onSubmit }: Props): JSX.Element => {
  const { handleSubmit, register } = useForm<TodoFormData>();

  if (loading) return <p>Loading...</p>;
  if (error || !todo) return <p>Error</p>;
 
  const dateDeadline = parseISO(todo.deadline);
  const formatDeadline = format(dateDeadline, 'yyyy-MM-dd');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      名前: <input type="text" defaultValue={todo.name} {...register('name')} /><br />
      詳細: <textarea defaultValue={todo.detail} {...register('detail')} /><br />
      優先度: <PrioritiesComboBoxContent args={{defaultValue: todo.priority_id.toString(), priorityRegister: register('priority_id')}} /><br />
      期限: <input type="date" defaultValue={formatDeadline} {...register('deadline')} /><br />
      完了: <input type="checkbox" defaultChecked={todo.done} {...register('done')} /><br />
      <button type="submit" onSubmit={handleSubmit(onSubmit)}>更新</button><br />
    </form>
  )
}
