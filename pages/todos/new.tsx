import client from "@/lib/graphqlClient";
import { ApolloProvider } from "@apollo/client";
import { TodoNewContent } from "@/features/todos/containers/new";
import Layout from "@/components/layout";

export default function Content() {
  return (
    <Layout>
      <ApolloProvider client={client}>
        <TodoNewContent />
      </ApolloProvider>
    </Layout>
  );
}