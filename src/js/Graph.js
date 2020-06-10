import React, { Component } from 'react'
import { VictoryPie } from 'victory';

export default class Graph extends Component {
    
    render() {
        return (
            <VictoryPie
                width={1000}
                padAngle={3}
                innerRadius={200}
                colorScale={['#A0FF90','#FF6767']}
                data={[
                    {x: "Recovered", y: 265},
                    {x: "Infected", y: 40}
                ]}
            />
        )
    }
}
