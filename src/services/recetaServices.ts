import { IReceta } from "@/src/interfaces/Receta";
import { api } from "../configs/api";

export class RecetaService {

    private apiURL = "recetas";
 
    public async create(data:IReceta) {
        try {
            console.log('Creating receta with data:', data);
            const response = await api.post<IReceta>(`${this.apiURL}`, data)
            console.log('Response:', response.data);
            console.log('Receta created successfully.');
            return response.data            
        } catch (error) {
            console.error('Error saving receta:', error);
            throw new Error('Failed to save receta.');
        }
    }

}