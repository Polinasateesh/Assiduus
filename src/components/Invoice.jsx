import React, { useState ,useEffect,useRef } from 'react'
import { Button, Card, Divider } from '@chakra-ui/react'
import * as d3 from 'd3';

import FileAttachmentModal from './FileAttachmentModal'
const Invoice = () => {
    const [isOpen,setIsOpen]=useState(false)

    const chartRef = useRef(null);

    useEffect(() => {
      const svg = d3.select(chartRef.current);
      const width = 450;
      const height = 100;
    
      const data = [
          { category: 'older', value1: 20,  },
          { category: 'Jan 01-08', value1: 30, },
          { category: 'Jan 09-16', value1: 40, },
          { category: 'Jan 17-24', value1: 30, },
          { category: 'Jan 25-31', value1: 40,  },
          { category: 'Future', value1: 10,}
        
        ];
    
        const categories = data.map((d) => d.category);
        const stack = d3.stack().keys(['value1']);
    
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
            <FileAttachmentModal isOpen={isOpen} setIsOpen={setIsOpen} />
          
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px' }}>
                    <b>Invoices owned to you</b>
                    <Button style={{ color: 'green', fontSize: '13px' }} onClick={()=>setIsOpen(true)}>New Sales Invoice</Button>

                </div>

                <Divider style={{ color: 'grey' }} />
                <svg ref={chartRef} style={{margin:'20px'}}></svg>

           
        </>

    )
}

export default Invoice
