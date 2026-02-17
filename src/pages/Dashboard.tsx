/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState, useCallback } from "react";

import DropCard from "../components/DropCard";
import { useSocket } from "../hooks/useSocket";
import { baseApi } from "../api/baseApi";
import type { Drop } from "../types";

export default function Dashboard() {
  const [drops, setDrops] = useState<Drop[]>([]);

  const userId = "48df37fd-ddaf-4288-b3c0-4498c8a2d280";

  const fetchDrops = useCallback(async () => {
    const res = await baseApi.get("/drops");
    setDrops(res.data.data);
  }, []);

  useEffect(() => {
    fetchDrops();
  }, [fetchDrops]);

  useSocket(fetchDrops);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Sneaker Drops</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {drops.map((drop) => (
          <DropCard
            key={drop.id}
            drop={drop}
            userId={userId}
            refresh={fetchDrops}
          />
        ))}
      </div>
    </div>
  );
}
