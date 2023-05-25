import { GetTodosQuery, Todo } from "@/generated/graphql";
import Link from "next/link";

type Props = {
    loading: any,
    error: any,
    todos: GetTodosQuery['todos'] | undefined,
    onChangeEvent: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const TodosList = ({ loading, error, todos, onChangeEvent }: Props): JSX.Element => {
  if (loading) return <p>Loading...</p>;
  if (error || !todos) return <p>Error</p>;
 
  return (
    <>
      <h2>TODO</h2>
      <Link href="/todos/new">新規</Link>
      <hr />
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>完了:<input type="checkbox" id={todo.id} defaultChecked={todo.done} onChange={(e) => onChangeEvent(e)} /></p>
          <p>名前: {todo.name}</p>
          <p>詳細: {todo.detail}</p>
          <p>優先度: {todo.priority.name}</p>
          <p>期限: {todo.deadline}</p>
          <Link href={'/todos/' + todo.id}>編集</Link>
          <hr />
        </div>
      ))}
    </>
  )
}
