/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";
import { reserveSchema, type ReservationInput } from "../schemas/reservation.schema";
import { baseApi } from "../api/baseApi";
import type { ReserveProps } from "../types";




export default function ReserveModal({ dropId, userId, onSuccess, onClose }: ReserveProps) {
  const { handleSubmit } = useForm<ReservationInput>({
    resolver: zodResolver(reserveSchema),
    defaultValues: { dropId, userId },
  });

  const onSubmit = async (data: ReservationInput) => {
    try {
      const res = await baseApi.post("/reservations", data);

      Swal.fire("Reserved!", "Item reserved for 60 seconds", "success");

      onSuccess(res.data.data.id);
      onClose();
    } catch (err: any) {
      Swal.fire("Error", err.response?.data?.message || "Failed", "error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-96">
        <h2 className="text-lg font-semibold mb-4">Confirm Reservation</h2>

        <button
          onClick={handleSubmit(onSubmit)}
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
        >
          Confirm
        </button>

        <button
          onClick={onClose}
          className="w-full mt-2 border py-2 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
