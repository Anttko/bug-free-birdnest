import { Box } from "@chakra-ui/react"
import { iDrone } from '../interfaces/types'

type DronemapProps = {
    data: iDrone[]
}

const Dronemap = ({ data }: DronemapProps) => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" mt={10} mb={10}>
            <svg width="40%" height="40%" viewBox="0 0 500 500" >
                <rect x={0} y={0} width={500} height={500} stroke="black" strokeWidth={2} fill="none" />

                {data || data.length >= 1 ? data.map((item: iDrone, i: number) => {
                    const ix: number = item.positionX / 1000
                    const iy: number = item.positionY / 1000
                    return (
                        <circle key={i} cx={ix} cy={iy} r={3} />
                    )
                }) : null}
                <circle cx={250} cy={250} r={100} fill="grey" fillOpacity="0.4" />
                <text x={250} y={250} textAnchor="middle" dominantBaseline="central" style={{ fontSize: 20 }}>
                    {'NFZ'}
                </text>
            </svg>
        </Box>
    )
}
export default Dronemap