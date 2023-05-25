import React from "react";
import { PrioritiesComboBoxContent } from "@/features/priorities/containers/combobox"
import { useForm } from "react-hook-form";

export type TodoFormData = {
  name: string,
  detail: string,
  priority_id: string,
  deadline: Date,
  done: boolean,
}

type Props = {
    onSubmit: (data: TodoFormData) => void,
}

export const TodoForm = ({ onSubmit }: Props): JSX.Element => {
  const { handleSubmit, register } = useForm<TodoFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      名前: <input type="text" {...register('name')} /><br />
      詳細: <textarea {...register('detail')} /><br />
      優先度: <PrioritiesComboBoxContent args={{priorityRegister: register('priority_id')}} /><br />
      期限: <input type="date" {...register('deadline')} /><br />
      完了: <input type="checkbox" {...register('done')} /><br />
      <button type="submit" onSubmit={handleSubmit(onSubmit)}>登録</button><br />
    </form>
  )
}
