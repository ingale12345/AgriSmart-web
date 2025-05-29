import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/api";
import type { ShopFormData } from "@/types"; // ensure this type is defined as shown below
import { PlusCircle } from "lucide-react";
import { toast } from "sonner";

const CreateShop = () => {
  const queryClient = useQueryClient();

  const { register, handleSubmit, reset } = useForm<ShopFormData>();

  const createShop = useMutation({
    mutationFn: async (shopData: ShopFormData) => {
      const res = await axiosInstance.post("/shops", shopData);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shops"] });
      reset();
      toast.success("Shop created", {
        description: "Your new shop has been added.",
        position: "top-center",
      });
    },
    onError: (error) => {
      toast.error("Shop creation Error", {
        description: `Unable to create Shop\n${error.message}`,
        position: "top-center",
      });
    },
  });

  const onSubmit = (data: ShopFormData) => {
    const cleanedData: ShopFormData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, value || undefined])
    ) as ShopFormData;

    createShop.mutate(cleanedData);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <PlusCircle size={24} className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[400px] p-6">
        <h2 className="text-xl font-semibold mb-4">Create New Shop</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            {...register("name", { required: true })}
            placeholder="Shop Name"
          />
          <Input
            {...register("ownerName", { required: true })}
            placeholder="Owner Name"
          />
          <Input {...register("contact")} placeholder="Contact (+1234567890)" />
          <Input {...register("email")} placeholder="Email" type="email" />
          <Input {...register("address")} placeholder="Address" />
          <Input {...register("imageUrl")} placeholder="Image URL" />
          <Button
            type="submit"
            className="w-full"
            disabled={createShop.isPending}
          >
            {createShop.isPending ? "Creating..." : "Create Shop"}
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default CreateShop;
