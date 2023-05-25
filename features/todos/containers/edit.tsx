import { GetTodoDocument, UpdateTodoDocument } from "@/generated/graphql";
import { useQuery, useMutation } from "@apollo/client";
import { TodoForm, TodoFormData } from "../presenters/edit";

type Props = {
  id: number
}

export function TodoEditContent({ id }: Props){
  const { loading, error, data } = useQuery(GetTodoDocument, { variables: { id: id }});
  const [ updateTodo, ] = useMutation(UpdateTodoDocument);

  const onClickEvent = async(postData: TodoFormData) => {
    const updateData = {
      id: Number(data?.todo?.id) ?? 0,
      name: postData.name,
      detail: postData.detail,
      priority_id: Number(postData.priority_id) ?? 0,
      deadline: postData.deadline,
      done: postData.done,
    };
    await updateTodo({ variables: updateData });
    alert("更新しました。");
    location.href = "/todos";
  }

  return  (
    <TodoForm loading={loading} error={error} todo={data?.todo} onSubmit={(postData) => onClickEvent(postData)}/>
  )
}