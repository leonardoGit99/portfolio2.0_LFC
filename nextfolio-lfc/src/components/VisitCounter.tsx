"use client"
import { useEffect, useState } from "react";

const VisitCounter: React.FC<{ viewsLabel: string, loadingLabel: string }> = ({ viewsLabel, loadingLabel }) => {
  const [visitCount, setVisitCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        // Verificar si ya se registró la visita en esta sesión
        const hasVisited = sessionStorage.getItem("hasVisited");

        if (!hasVisited) {
          const response = await fetch("/api/visits/increment");
          if (!response.ok) {
            throw new Error("Failed to fetch visit increment");
          }
          const data: { visits: number } = await response.json();
          setVisitCount(data.visits);

          // Marcar como visitado, 
          sessionStorage.setItem("hasVisited", "true");
        } else {
          // Solo obtener el número sin incrementar
          const response = await fetch("/api/visits/count", { method: "GET" });
          if (response.ok) {
            const data: { visits: number } = await response.json();
            setVisitCount(data.visits);
          }
        }

      } catch (error) {
        console.error(error);
      }
    };

    fetchVisits();
  }, []);

  return (
    <div>
      <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
        {viewsLabel}: <span className="text-[#A0E7FF] font-semibold"> {visitCount !== null ? visitCount : loadingLabel} </span>
      </h2>
    </div>
  );
};

export default VisitCounter;
