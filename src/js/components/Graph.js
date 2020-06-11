import React, { Component } from 'react'
import { VictoryPie, VictoryLabel } from 'victory';

export default function Graph() {
    const data = [
        {x: "", y: 265},
        {x: "", y: 40}
    ]


        return (
            <div>
                <svg viewBox="0 0 250 250">
                    <VictoryPie
                        standalone={false}
                        width={250} height={250}
                        padAngle={3}
                        innerRadius={100}
                        colorScale={['#A0FF90','#FF6767']}
                        labels={() => null}
                        data={[
                            data[0],
                            data[1]
                        ]}
                        
                    />
                    <VictoryLabel 
                        textAnchor="middle"
                        verticalAnchor="middle"
                        x={125} y={160}
                        style={[{ fontSize: 50, fill: '#A0FF90', fontWeight: '600'},
                        { fill: '#A0FF90', fontSize: 16 },
                        { fontSize: 50, fill: '#FF6767', fontWeight: '600'},
                        { fill: '#FF6767', fontSize: 16 }]}
                        
                        text={[`${data[0].y}`, 'Recovered', `${data[1].y}`, 'Infected']}
                    />
                </svg>
            </div>
        )
    }

