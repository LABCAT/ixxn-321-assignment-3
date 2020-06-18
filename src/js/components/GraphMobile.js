import React, { useContext } from 'react'
import { VictoryLabel, VictoryBar, VictoryStack } from 'victory';
import { Context } from '../context/Context.js';

export default function Graph() {
    const { setRegion, currentRegion } = useContext(Context);
    const { Region, Recovered, Deceased } = currentRegion;

    //Setting the data for the graph
    const data = [
        { x: "", y: Recovered },
        { x: "", y: Deceased },
        { name: Region }
    ]

    const handleOnCLick = (region) => {
        setRegion(region);
    };

    //Shows the reset button when a region is selected
    function resetButton(regionName){
        if(regionName !== "Nationwide"){
            return(
                <a href="/" onClick={(e) => { e.preventDefault(); handleOnCLick("Nationwide") }}>
                    <VictoryLabel
                        textAnchor="middle"
                        verticalAnchor="middle"
                        x={500} y={220}
                        style={{ fill: '#005D70', fontSize: 26, fontWeight: '100', fontFamily: 'Lato' }}
                        text={'Reset to Nationwide'}
                    />
                </a>
            )
        }else{
            return
        }
    }

        return (
            <svg width="100%" height="100%" viewBox="0 90 1000 250">
                <VictoryStack
                standalone={false}
                colorScale={['#A0FF90', '#FF6767']}
                horizontal={true}
                animate={{ duration: 500 }}
                width={1000}
                >
                <VictoryBar
                    data={[data[0]]}
                    barWidth={60}
                />
                <VictoryBar
                    data={[data[1]]}
                    barWidth={60}
                />
                </VictoryStack>

                <VictoryLabel
                    textAnchor="middle"
                    verticalAnchor="middle"                    
                    x={500} y={100}
                    style={{ fill: '#FFFFFF', fontSize: 26, fontWeight: '100', fontFamily: 'Lato' }}
                    text={`${data[2].name}`}
                />
                <VictoryLabel
                    textAnchor="middle"
                    verticalAnchor="middle"
                    x={150} y={220}
                    style={{ fontSize: 60, fill: '#A0FF90', fontWeight: '600', fontFamily: 'Lato' }}
                    text={`${data[0].y}`}
                />
                <VictoryLabel
                    textAnchor="middle"
                    verticalAnchor="middle"
                    x={150} y={255}
                    style={{ fill: '#A0FF90', fontSize: 26, fontWeight: '100', fontFamily: 'Lato' }}
                    text={'Recovered'}
                />
                <VictoryLabel
                    textAnchor="middle"
                    verticalAnchor="middle"
                    x={850} y={220}
                    style={{ fontSize: 60, fill: '#FF6767', fontWeight: '600', fontFamily: 'Lato' }}
                    text={`${data[1].y}`}
                />
                <VictoryLabel
                    textAnchor="middle"
                    verticalAnchor="middle"
                    x={850} y={255}
                    style={{ fill: '#FF6767', fontSize: 26, fontWeight: '100', fontFamily: 'Lato' }}
                    text={'Deceased'}
                />
                {resetButton(data[2].name)}
            </svg>
        )
    }


