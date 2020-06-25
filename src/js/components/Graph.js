import React, { useContext } from 'react'
import { VictoryPie, VictoryLabel } from 'victory';
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

    //Sets the the graph's padAngle to zero if deceased value is zero
    function graphPad(number) {
        if (number === 0) {
            return 0
        } else {
            return 1
        }
    }

    //Shows the reset button when a region is selected
    function resetButton(regionName){
        if(regionName !== "Nationwide"){
            return(
                <a href="/" onClick={(e) => { e.preventDefault(); handleOnCLick("Nationwide") }}>
                    <VictoryLabel
                        textAnchor="middle"
                        verticalAnchor="middle"
                        x={200} y={380}
                        style={{ fill: '#005D70', fontSize: 22, fontWeight: '100', fontFamily: 'Lato'}}
                        text={'Reset to Nationwide'}
                    />
                </a>
            )
        }else{
            return
        }
    }

    return (
            <svg width="50%" height="50%" viewBox="0 0 400 400" style={{ marginBottom: "2vw" }}>
                <VictoryPie
                    standalone={false}
                    width={400} height={400}
                    padAngle={graphPad(Deceased)}
                    cornerRadius={2}
                    innerRadius={130}
                    colorScale={['#A0FF90', '#FF6767']}
                    labels={() => null}
                    animate={{ duration: 500 }}
                    data={[
                        data[0],
                        data[1]
                    ]}
                />
                <VictoryLabel
                    textAnchor="middle"
                    verticalAnchor="middle"
                    x={200} y={30}
                    style={{ fill: '#FFFFFF', fontSize: 26, fontWeight: '100', fontFamily: 'Lato' }}
                    text={`${data[2].name}`}
                />
                <VictoryLabel
                    textAnchor="middle"
                    verticalAnchor="middle"
                    x={200} y={130}
                    style={{ fontSize: 60, fill: '#A0FF90', fontWeight: '600', fontFamily: 'Lato' }}
                    text={`${data[0].y}`}
                />
                <VictoryLabel
                    textAnchor="middle"
                    verticalAnchor="middle"
                    x={200} y={170}
                    style={{ fill: '#A0FF90', fontSize: 26, fontWeight: '100', fontFamily: 'Lato' }}
                    text={'Recovered'}
                />
                <VictoryLabel
                    textAnchor="middle"
                    verticalAnchor="middle"
                    x={200} y={230}
                    style={{ fontSize: 60, fill: '#FF6767', fontWeight: '600', fontFamily: 'Lato' }}
                    text={`${data[1].y}`}
                />
                <VictoryLabel
                    textAnchor="middle"
                    verticalAnchor="middle"
                    x={200} y={270}
                    style={{ fill: '#FF6767', fontSize: 26, fontWeight: '100', fontFamily: 'Lato' }}
                    text={'Deceased'}
                />
                {resetButton(data[2].name)}
            </svg>
    )
}


