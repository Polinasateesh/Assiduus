import React ,{useEffect,useRef}from 'react'
import { Divider } from '@chakra-ui/react'
import * as d3 from 'd3';

const CashFlow = () => {
    const chartRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(chartRef.current);
    const width = 450;
    const height = 100;
  
    const data = [
        { category: 'August', value1: 40, value2: 80 },
        { category: 'September', value1: 40, value2: 60 },
        { category: 'Octember', value1: 20, value2: 80 },
        { category: 'November', value1: 50, value2: 50 },
        { category: 'December', value1: 40, value2: 80 },
        { category: 'January', value1: 40, value2: 60 },
        
      
      ];
  
      const categories = data.map((d) => d.category);
      const stack = d3.stack().keys(['value1', 'value2']);
  
      const stackedData = stack(data);
  
      const xScale = d3.scaleBand().domain(categories).range([0, width]).padding(0.8);
      const yScale = d3.scaleLinear().domain([0, d3.max(stackedData, (d) => d3.max(d , (e) => e[1]))]).range([height, 0]);
  
      const colorScale = d3.scaleOrdinal().domain(['value1', 'value2']).range(['green', 'rgb(97, 158, 97)']);
  
      svg.selectAll('*').remove(); // Clear existing elements in the SVG
  
      svg
        .selectAll('g')
        .data(stackedData)
        .enter()
        .append('g')
        .attr('fill', (d) => colorScale(d.key))
        .selectAll('rect')
        .data((d) => d)
        .enter()
        .append('rect')
        .attr('x', (d) => xScale(d.data.category))
        .attr('y', (d) => yScale(d[1]))
        .attr('height', (d) => yScale(d[0]) - yScale(d[1]))
        .attr('width', xScale.bandwidth())
        .attr('rx', 2) 
        .attr('ry', 3)
       
  
      // Add x-axis
      svg
        .append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale));
  
      // Add y-axis
    //   svg.append('g').call(d3.axisLeft(yScale));
    }, [])
    return (
        <>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '15px' }}>
                <b>Cash Flow</b>
                <div className='in-out-container'>
                    <div className='in-out-wrapper'>
                        <div className='in-out in'></div>
                        <p className='text'>In</p>
                    </div>
                    <div className='in-out-wrapper'>
                        <div className='in-out out'></div>
                        <p className='text'>Out</p>
                    </div>
                </div>
            </div>
            <Divider style={{ color: 'grey' ,marginBottom:'50px'}} />

            <svg ref={chartRef} style={{margin:'20px'}}></svg>

        </>
    )
}

export default CashFlow
