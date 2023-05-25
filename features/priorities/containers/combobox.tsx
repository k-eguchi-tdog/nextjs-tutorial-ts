import { GetPrioritiesDocument } from "@/generated/graphql";
import { useQuery } from "@apollo/client";
import { PrioritiesComboBox } from "../presenters/combobox";
import { UseFormRegisterReturn } from "react-hook-form";

export function PrioritiesComboBoxContent(arg: {args: {defaultValue?: string, priorityRegister: UseFormRegisterReturn<"priority_id">}}){
  const { loading, error, data } = useQuery(GetPrioritiesDocument);

  return  (
    <PrioritiesComboBox loading={loading} error={error} priorities={data?.priorities} arg={arg} />
  )
}