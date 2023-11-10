import React, { useEffect, useRef, useState } from 'react';
import { Divider, Select } from '@chakra-ui/react';
import * as d3 from 'd3';
import '../App.css';

const CheckingAccount = () => {
  const chartRef = useRef(null);
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [selectedOption, setSelectedOption] = useState('Manage');

  useEffect(() => {
    const svg = d3.select(chartRef.current);
    const margin = { top: 30, right: 20, bottom: 20, left: 30 };
    const width = 400 - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;

    const xScale = d3.scaleLinear().domain([0, 15]).range([0, width]);
    const yScale = d3.scaleLinear().domain([-1.5, 1.5]).range([height, 0]);

    const line = d3
      .line()
      .x((_, i) => xScale(i))
      .y((d) => yScale(Math.sin(d)));

    // Generate randomized array for data based on selected month and option
    const data = Array.from({ length: 100 }, (_, i) => Math.random());

    svg.selectAll('*').remove(); // Clear existing elements in the SVG

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#55BC55')
      .attr('stroke-width', 5)
      .attr('d', line);

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},${height + margin})`)
      .call(d3.axisBottom(xScale));

  }, [selectedMonth, selectedOption]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px' }}>
        <b>Checking account</b>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: '10px' }}>
            <Select value={selectedOption} onChange={handleOptionChange}>
              <option value="Manage">Manage</option>
              <option value="Date1">0-15</option>
              <option value="Date2">16-30</option>
            </Select>
          </div>
          <div>
            <Select value={selectedMonth} onChange={handleMonthChange}>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="Octember">Octember</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </Select>
          </div>
        </div>
      </div>
      <Divider style={{ color: 'grey', marginBottom: '20px' }} />
      <svg ref={chartRef} style={{ margin: '20px' }}></svg>
    </>
  );
};

export default CheckingAccount;
