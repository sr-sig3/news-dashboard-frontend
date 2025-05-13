import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // 백엔드 서버 주소

export interface KeywordData {
  text: string;
  value: number;
}

export const getKeywords = async (): Promise<KeywordData[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/keywords`);
    return response.data.map((item: any) => ({
      text: item.keyword,
      value: item.count
    }));
  } catch (error) {
    console.error('Error fetching keywords:', error);
    return [];
  }
}; 