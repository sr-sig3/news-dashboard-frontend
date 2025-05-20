import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000'; // 백엔드 서버 주소

export interface KeywordData {
  text: string;
  value: number;
}

export const getKeywords = async (): Promise<KeywordData[]> => {
  try {
    console.log('Fetching keywords from:', `${API_BASE_URL}/keywords/wordcloud/`);
    const response = await axios.get(`${API_BASE_URL}/keywords/wordcloud/?days=20&min_score=0.1&limit=50`);
    console.log('API Response:', response.data);
    
    // API 응답이 예상과 다른 경우를 위한 데이터 변환
    const keywords = response.data.keywords.map((item: any) => ({
      text: item.keyword || item.text || '',
      value: item.count || item.value || 1
    }));
    
    console.log('Transformed keywords:', keywords);
    return keywords;
  } catch (error) {
    console.error('Error fetching keywords:', error);
    // 테스트를 위한 더미 데이터 반환
    return [
      { text: '테스트1', value: 10 },
      { text: '테스트2', value: 8 },
      { text: '테스트3', value: 6 },
      { text: '테스트4', value: 4 },
      { text: '테스트5', value: 2 }
    ];
  }
}; 