"use client";
import { Button } from "@nextui-org/button";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { Input, Textarea } from "@nextui-org/input";
import * as actions from "@/actions";
import { useFormState } from "react-dom";

const TopicCreateForm = () => {
  const [formState, action] = useFormState(actions.createTopic, {
    errors: {
      name: [],
      description: [],
    },
  });
  return (
    <div>
      <Popover placement="left-start">
        <PopoverTrigger>
          <Button color="primary">Create New Topic</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form action={action}>
            <div className="flex flex-col gap-4 p-2">
              <h3 className="font-bold">Create a Topic</h3>
              <Input name="name" label="Name" labelPlacement="outside" placeholder="Name" />
              <Textarea name="description" label="Description" labelPlacement="outside" placeholder="Describe your topic" />
              <Button type="submit">Create</Button>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TopicCreateForm;
