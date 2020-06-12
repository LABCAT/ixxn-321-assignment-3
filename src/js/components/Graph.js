import React, { useContext } from 'react'
import { VictoryPie, VictoryLabel, VictoryContainer } from 'victory';
import { Context } from '../context/Context.js';

export default function Graph() {
    const { currentRegion } = useContext(Context);
    const { Region, Active, Recovered, Deceased, Total } = currentRegion;

    const data = [
        {x: "", y: Recovered},
        {x: "", y: Deceased}
    ]

    function graphPad(number){
        if(number == 0){
            return 0
        }else{
            return 1
        }
    }


        return (
            <div>
                <svg viewBox="0 0 400 400">
                    <VictoryPie
                        containerComponent={<VictoryContainer responsive={false}/>}
                        standalone={false}
                        width={400} height={400}
                        padAngle={graphPad(Deceased)}
                        innerRadius={130}
                        colorScale={['#A0FF90','#FF6767']}
                        labels={() => null}
                        animate={{duration: 500}}
                        data={[
                            data[0],
                            data[1]
                        ]}
                    />
                    <VictoryLabel 
                        textAnchor="middle"
                        verticalAnchor="middle"
                        x={200} y={130}
                        style={{ fontSize: 40, fill: '#A0FF90', fontWeight: '600', fontFamily: 'Lato'}}
                        text={`${data[0].y}`}
                    />
                    <VictoryLabel 
                        textAnchor="middle"
                        verticalAnchor="middle"
                        x={200} y={155}
                        style={{ fill: '#A0FF90', fontSize: 16, fontWeight: '100', fontFamily: 'Lato'}}
                        text={'Recovered'}
                    />
                    <VictoryLabel 
                        textAnchor="middle"
                        verticalAnchor="middle"
                        x={200} y={200}
                        style={{ fontSize: 40, fill: '#FF6767', fontWeight: '600', fontFamily: 'Lato'}}
                        text={`${data[1].y}`}
                    />
                    <VictoryLabel 
                        textAnchor="middle"
                        verticalAnchor="middle"
                        x={200} y={225}
                        style={{fill: '#FF6767', fontSize: 16, fontWeight: '100', fontFamily: 'Lato'}}
                        text={'Infected'}
                    />
                </svg>
            </div>
        )
    }

