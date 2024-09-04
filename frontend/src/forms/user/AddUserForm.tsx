import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import {
  emailIdSchema,
  firstNameSchema,
  lastNameSchema,
} from "../../schema/userSchema";
import { createUser } from "../../services/users";
import { handleServerError } from "../../lib/helper";
import { useFetchUsers } from "../../hooks/user-hooks";
import { useState } from "react";
import { useToast } from "../../hooks/use-toast";
import { ValidationType } from "../../types/ValidationTypes";

type FormData = {
  firstName: string;
  lastName: string;
  emailId: string;
  root: string;
  [key: `root.${string}`]: string; // If you have dynamic keys
};

export const formSchema = z.object({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  emailId: emailIdSchema,
});

export default function AddUserForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const { refetch } = useFetchUsers();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailId: "",
    },
  });

  // Type guard to ensure field is a key of FormData
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function isKeyOfFormData(key: any): key is keyof FormData {
    // Check if the key is one of the predefined keys or a dynamic key
    return (
      ["firstName", "lastName", "emailId", "root"].includes(key) ||
      /^root\.\w+$/.test(key)
    );
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    form.clearErrors();
    setLoading(true);
    try {
      const response = await createUser(values);
      form.reset();
      setLoading(false);
      toast({
        title: "User Created",
        description: `${JSON.stringify(response._id)}`,
      });
      refetch();
    } catch (error: unknown) {
      const errorMessage = handleServerError(error);
      if (Array.isArray(errorMessage)) {
        errorMessage.forEach((error: ValidationType) => {
          const field = error.property;
          if (isKeyOfFormData(field)) {
            const message = Object.values(error.constraints).join(", ");
            form.setError(field, {
              type: "server",
              message: message,
            });
          } else {
            console.warn(`Field '${field}' is not a valid key in FormData.`);
          }
        });
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 mt-6 mb-6 flex justify-center"
      >
        <div className="flex flex-col items-center justify-center w-[100%] lg:w-[50%] space-y-6 p-4 lg:p-0">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Brito" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="emailId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email Id</FormLabel>
                <FormControl>
                  <Input placeholder="john@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {loading && (
            <Button type="button" className="w-full" disabled>
              Submitting...
            </Button>
          )}
          {!loading && (
            <Button type="submit" className="w-full">
              Add User
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
