import client from "@/lib/graphqlClient";
import { ApolloProvider } from "@apollo/client";
import { TodoEditContent } from "@/features/todos/containers/edit";
import { useRouter } from "next/router";
import Layout from "@/components/layout";

export default function Content() {
  const router = useRouter()

  return (
    <Layout>
      <ApolloProvider client={client}>
        <TodoEditContent id={Number(router.query.id)}/>
      </ApolloProvider>
    </Layout>
  );
}