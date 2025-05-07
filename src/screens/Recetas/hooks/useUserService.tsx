import { IReceta } from "@/src/interfaces/Receta";
import { RecetaService } from "@/src/services/recetaServices";
import { useState, useEffect } from "react";

export default function useRecetasService() {
  const [recetas, setRecetas] = useState<IReceta[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const recetasService = new RecetaService();

  const fetchRecetas = async () => {
    try {
      setLoading(true);
      setError(null);
      // Simulación de una llamada a una API
      const response = await recetasService.getAll(); // Corrected type to IReceta[]
      setRecetas(response);
    } catch (err: any) {
      setError("Error al cargar las recetas: " + (err?.message || "Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecetas();
  }, []);

  return { recetas, loading, error, refetch: fetchRecetas };
}