/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import ReserveModal from "./ReserveModal";
import Swal from "sweetalert2";
import { baseApi } from "../api/baseApi";
import type { DropProps } from "../types";




export default function DropCard({ drop, userId, refresh }: DropProps) {
  const [modal, setModal] = useState(false);
  const [reservationId, setReservationId] = useState<string | null>(null);

  const handlePurchase = async () => {
    try {
      await baseApi.post("/purchases", {
        userId,
        reservationId,
      });

      Swal.fire("Success", "Purchased successfully", "success");

      setReservationId(null);
      refresh();
    } catch (err: any) {
      Swal.fire("Error", err.response?.data?.message, "error");
    }
  };

  return (
    <div className="bg-white shadow rounded-xl p-4">
      <h2 className="text-xl font-bold">{drop.name}</h2>

      <p className="text-gray-600">${drop.price}</p>

      <p className="mt-2 font-semibold">
        Stock: <span className="text-green-600">{drop.availableStock}</span>
      </p>

      <div className="mt-3">
        {reservationId ? (
          <button
            onClick={handlePurchase}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Complete Purchase
          </button>
        ) : (
          <button
            disabled={drop.availableStock === 0}
            onClick={() => setModal(true)}
            className="bg-black text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
          >
            Reserve
          </button>
        )}
      </div>

      <div className="mt-4">
        <p className="text-sm font-semibold">Recent Buyers:</p>
        <ul className="text-sm text-gray-600">
          {drop.purchases.map((p:any) => (
            <li key={p.id}>{p.user.username}</li>
          ))}
        </ul>
      </div>

      {modal && (
        <ReserveModal
          dropId={drop.id}
          userId={userId}
          onSuccess={(id) => setReservationId(id)}
          onClose={() => setModal(false)}
        />
      )}
    </div>
  );
}
