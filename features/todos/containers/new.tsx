import { CreateTodoDocument } from "@/generated/graphql";
import { useMutation } from "@apollo/client";
import { TodoForm, TodoFormData } from "../presenters/new";

export function TodoNewContent(){
  const [ createTodo, ] = useMutation(CreateTodoDocument);

  const onClickEvent = async(postData: TodoFormData) => {
    const createData = {
      name: postData.name,
      detail: postData.detail,
      priority_id: Number(postData.priority_id) ?? 0,
      deadline: postData.deadline,
      done: postData.done,
    };
    await createTodo({ variables: createData });
    alert("新規登録しました。");
    location.href = "/todos";
  }

  return  (
    <TodoForm onSubmit={(postData) => onClickEvent(postData)}/>
  )
}