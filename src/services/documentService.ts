import apiClient from "./apiClient";

export interface Document {
  dni: string;
  nombre: string;
  edad?: number;
}

export const getListPokemons = async (): Promise<any> => {
  const response = await apiClient.get('/pokemon');
  return response.data;
}