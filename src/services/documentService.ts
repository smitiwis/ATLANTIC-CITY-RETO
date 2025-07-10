import apiClient from "./apiClient";

export interface Document {
  dni: string;
  nombre: string;
  edad?: number;
}

export const getDocumentByDNI = async (dni: string): Promise<Document> => {
  const response = await apiClient.get<Document>(`/document/dni/${dni}`);
  return response.data;
};