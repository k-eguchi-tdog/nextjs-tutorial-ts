import { GetTodosDocument, UpdateTodoDoneDocument } from "@/generated/graphql";
import { useMutation, useQuery } from "@apollo/client";
import { TodosList } from "../presenters";

export function TodosContent(){
  const { loading, error, data } = useQuery(GetTodosDocument);
  const [ updateTodoDone, ] = useMutation(UpdateTodoDoneDocument);
  
  const onChangeEvent = (id: string, checked: boolean) => {
    updateTodoDone({ variables: {id: Number(id), done: checked }});
    alert("完了ステータスを" + (checked === true ? "完了" : "未完了") + "に更新しました。");
  }

  return  (
    <TodosList loading={loading} error={error} todos={data?.todos} onChangeEvent={(e) => onChangeEvent(e.target.id, e.target.checked)}/>
  )
}