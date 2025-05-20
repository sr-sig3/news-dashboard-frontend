import React, { useEffect, useState, useRef } from 'react';
import cloud from 'd3-cloud';
import * as d3 from 'd3';
import { getKeywords, KeywordData } from '../services/keywordService';

interface Word {
  text: string;
  value: number;
  size?: number;
  x?: number;
  y?: number;
  rotate?: number;
}

const WordCloud: React.FC = () => {
  const [words, setWords] = useState<KeywordData[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const fetchKeywords = async () => {
      try {
        const data = await getKeywords();
        console.log('Fetched keywords:', data); // 디버깅을 위한 로그
        setWords(data);
      } catch (error) {
        console.error('Error fetching keywords:', error);
      }
    };

    fetchKeywords();
    const interval = setInterval(fetchKeywords, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!svgRef.current || words.length === 0) return;

    const width = svgRef.current.clientWidth || 800;
    const height = 500;

    const layout = cloud()
      .size([width, height])
      .words(words.map(word => ({
        text: word.text,
        value: word.value,
        size: Math.sqrt(word.value) * 20
      })))
      .padding(5)
      .rotate(() => ~~(Math.random() * 2) * 90)
      .fontSize(d => (d as Word).size || 0)
      .on('end', draw);

    layout.start();

    function draw(words: Word[]) {
      console.log('Drawing words:', words); // 디버깅을 위한 로그
      const svg = d3.select(svgRef.current);
      svg.selectAll('*').remove();

      svg
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`)
        .selectAll('text')
        .data(words)
        .enter()
        .append('text')
        .style('font-size', d => `${d.size}px`)
        .style('font-family', 'Impact')
        .style('fill', () => d3.schemeCategory10[~~(Math.random() * 10)])
        .attr('text-anchor', 'middle')
        .attr('transform', d => `translate(${d.x},${d.y}) rotate(${d.rotate})`)
        .text(d => d.text);
    }
  }, [words]);

  return (
    <div style={{ width: '100%', height: '500px', border: '1px solid #ccc' }}>
      <svg ref={svgRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default WordCloud; 