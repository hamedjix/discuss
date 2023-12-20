"use client";
import { Button } from "@nextui-org/button";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { Input, Textarea } from "@nextui-org/input";
import * as actions from "@/actions";
import { useFormState } from "react-dom";
import { error } from "console";

const TopicCreateForm = () => {
  const [formState, formAction] = useFormState(actions.createTopic, {
    errors: {},
  });
  return (
    <div>
      <Popover placement="left-start">
        <PopoverTrigger>
          <Button color="primary">Create New Topic</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form action={formAction}>
            <div className="flex flex-col gap-4 p-2">
              <h3 className="font-bold">Create a Topic</h3>
              <Input name="name" label="Name" labelPlacement="outside" placeholder="Name" isInvalid={!!formState.errors.name?.length} errorMessage={formState.errors.name?.join(", ")} />
              <Textarea
                name="description"
                label="Description"
                labelPlacement="outside"
                placeholder="Describe your topic"
                isInvalid={!!formState.errors.description?.length}
                errorMessage={formState.errors.description?.join(", ")}
              />
              {formState.errors._form ? <div className="p-2 rounded bg-red-200 border border-red-400">{formState.errors._form.join(", ")}</div> : null}
              <Button type="submit">Create</Button>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TopicCreateForm;
