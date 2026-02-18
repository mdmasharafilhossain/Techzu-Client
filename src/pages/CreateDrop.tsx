/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dropSchema, type DropInput} from "../schemas/drop.schema";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import { baseApi } from "../api/baseApi";

export default function CreateDrop() {
  const { register, handleSubmit, formState: { errors, isSubmitting },reset,}=useForm<DropInput>({
    resolver: zodResolver(dropSchema),
  });

  const onSubmit = async (data: DropInput) => {
    try {
      const formattedDate = dayjs(data.startsAt).format(
        "DD-MM-YYYY, hh:mm A"
      );

      await baseApi.post("/drops", {
        name: data.name,
        price: Number(data.price),
        totalStock: Number(data.totalStock),
        startsAt: formattedDate,
      });

      Swal.fire({
        icon: "success",
        title: "Drop Created",
        text: "New merch drop initialized successfully",
      });

      reset();
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.response?.data?.message || "Failed to create drop",
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Merch Drop
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          

          <div>
            <label className="block text-sm font-medium">Drop Name</label>
            <input
              {...register("name")}
              className="w-full border p-2 rounded-lg mt-1"
              placeholder="Air Jordan 1"
            />
            <p className="text-red-500 text-sm">{errors.name?.message}</p>
          </div>

 
          <div>
            <label className="block text-sm font-medium">Price (৳)</label>
            <input
              type="number"
              {...register("price", { valueAsNumber: true })}
              className="w-full border p-2 rounded-lg mt-1"
            />
            <p className="text-red-500 text-sm">{errors.price?.message}</p>
          </div>


          <div>
            <label className="block text-sm font-medium">Total Stock</label>
            <input
              type="number"
              {...register("totalStock", { valueAsNumber: true })}
              className="w-full border p-2 rounded-lg mt-1"
            />
            <p className="text-red-500 text-sm">{errors.totalStock?.message}</p>
          </div>


          <div>
            <label className="block text-sm font-medium">Start Time</label>
            <input
              type="datetime-local"
              {...register("startsAt")}
              className="w-full border p-2 rounded-lg mt-1"
            />
            <p className="text-red-500 text-sm">{errors.startsAt?.message}</p>
          </div>

          <button
            disabled={isSubmitting}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            {isSubmitting ? "Creating..." : "Create Drop"}
          </button>
        </form>
      </div>
    </div>
  );
}
