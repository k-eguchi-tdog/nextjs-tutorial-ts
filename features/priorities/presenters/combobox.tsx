import { GetPrioritiesQuery } from "@/generated/graphql";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
    loading: any,
    error: any,
    priorities: GetPrioritiesQuery['priorities'] | undefined,
    arg: {args: {defaultValue?: string, priorityRegister: UseFormRegisterReturn<"priority_id">}},
}

export const PrioritiesComboBox = ({ loading, error, priorities, arg }: Props): JSX.Element => {
  if (loading) return <p>Loading...</p>;
  if (error || !priorities) return <p>Error</p>;
 
  return (
    <select defaultValue={arg.args.defaultValue ?? "1"} {...arg.args.priorityRegister}>
      {priorities.map((priority) => (
        <option key={priority.id} value={priority.id}>{priority.name}</option>
      ))}
    </select>
  )
}
