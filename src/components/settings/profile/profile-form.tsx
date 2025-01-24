import { useFieldArray, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { cn } from "../../../utils/cn";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface ProfileFormValues {
  username: string;
  email: string;
  bio: string;
  urls: { value: string }[];
}

export default function ProfileForm() {
  const form = useForm();
  const {
    control,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    defaultValues: {
      username: "",
      email: "",
      bio: "",
      urls: [{ value: "" }],
    },
  });

  const { fields, append } = useFieldArray({
    name: "urls",
    control,
  });

  const onSubmit = (data: ProfileFormValues) => {
    console.log("Submitted Data:", data);
  };

  return (
    <div className="pl-1">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Username Field */}
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input
                placeholder="Username"
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 2,
                    message: "Must be at least 2 characters",
                  },
                })}
              />
            </FormControl>
            <FormDescription>
              This is your public display name. It can be your real name or a
              pseudonym.
            </FormDescription>
            <FormMessage>{errors.username?.message}</FormMessage>
          </FormItem>

          {/* Email Field */}
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                placeholder="Email"
                {...register("email", {
                  required: "email is required",
                })}
              />
            </FormControl>
            <FormDescription>
              You can update your email addresse.
            </FormDescription>
            <FormMessage>{errors.email?.message}</FormMessage>
          </FormItem>

          {/* Bio Field */}
          <FormItem>
            <FormLabel>Bio</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Tell us a little bit about yourself"
                className="resize-none"
                {...register("bio", {
                  required: "Bio is required",
                  minLength: {
                    value: 4,
                    message: "Must be at least 4 characters",
                  },
                })}
              />
            </FormControl>
            <FormDescription>
              Write or update your bio.
            </FormDescription>
            <FormMessage>{errors.bio?.message}</FormMessage>
          </FormItem>

          {/* URLs Field Array */}
          <div>
            {fields.map((field, index) => (
              <FormItem key={field.id}>
                <FormLabel className={cn(index !== 0 && "sr-only")}>
                  URLs
                </FormLabel>
                <FormDescription className={cn(index !== 0 && "sr-only")}>
                  Add links to your website, blog, or social media profiles.
                </FormDescription>
                <FormControl>
                  <Input
                    {...register(`urls.${index}.value`, {
                      required: "URL is required",
                    })}
                  />
                </FormControl>
                <FormMessage>
                  {errors.urls?.[index]?.value?.message}
                </FormMessage>
              </FormItem>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => append({ value: "" })}
            >
              Add URL
            </Button>
          </div>

          <Button type="submit">Update profile</Button>
        </form>
      </Form>
    </div>
  );
}
