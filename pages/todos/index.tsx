import client from "@/lib/graphqlClient";
import { ApolloProvider } from "@apollo/client";
import { TodosContent } from "@/features/todos/containers";
import Layout from "@/components/layout";

export default function Content() {
  return (
    <Layout>
      <ApolloProvider client={client}>
        <TodosContent />
      </ApolloProvider>
    </Layout>
  );
}