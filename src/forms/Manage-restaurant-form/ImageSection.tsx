import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const ImageSection = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Image</h2>
        <FormDescription className="text-sm">
          Add an image that will displayed on your restaurant listing in the
          search results.Adding new image will overwrite existing one.
        </FormDescription>
      </div>

      <div className="flex flex-col w-[50%]">
        <FormField
          name="imageFile"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="file"
                  className="bg-white cursor-pointer"
                  accept=".jpg, .jpeg, .png"
                  onChange={(event) =>
                    field.onChange(
                      event.target.files ? event.target.files[0] : null
                    )
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default ImageSection;
