import Head from 'next/head'
import useSwr from 'swr'
import Link from 'next/link'
import DroneCard from '../components/droneCard'
import { Grid, Box, Heading } from "@chakra-ui/react";
import { iDrone } from '../interfaces/types';
const fetcher = (url: string) => fetch(url).then((res) => {
  if (!res.ok) {
    throw new Error('Someting went wrong')
  }
  return res.json()
}
)
export default function Home() {
  const { data, error } = useSwr('/api/drones', fetcher, {
    refreshInterval: 10000
  })
  if (error) return <div>Failed to load drones</div>
  if (!data) return <div>Loading...</div>
  console.log(data)
  return (
    <div>
      <Heading display="flex" justifyContent="center" alignItems="center" m={10}>Drones that violate the NFZ</Heading>
      <Box display="flex" justifyContent="center" alignItems="center" mt={10}>
        <svg width="40%" height="40%" viewBox="0 0 500 500" >
          <rect x={0} y={0} width={500} height={500} stroke="black" strokeWidth={2} fill="none" />

          {data || data.lenght >= 1 ? data.map((item: iDrone, i: number) => {
            const ix = item.positionX / 1000
            const iy = item.positionY / 1000
            console.log(ix, iy)
            return <circle key={i} cx={ix} cy={iy} r={3} />
          }) : null}
          <circle cx={250} cy={250} r={100} fill="grey" fillOpacity="0.4" />
          <text x={250} y={250} textAnchor="middle" dominantBaseline="central" style={{ fontSize: 20 }}>
            {'NFZ'}
          </text>
        </svg>

      </Box>
      <Heading display="flex" justifyContent="center" alignItems="center" m={10}>Information</Heading>

      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        justifyContent="center"
        alignItems="center"
        m={3}
      >
        {data || data.lenght >= 1 ? data.map((item: iDrone, i: number) => {
          return <DroneCard drone={item} key={i} />
        }) : null}
      </Grid>
    </div>

  )
}