import useSwr from 'swr'
import DroneCard from '../components/droneCard'
import { Heading, SimpleGrid } from "@chakra-ui/react"
import { iDrone } from '../interfaces/types'
import Dronemap from '../components/Dronemap'

const fetcher = (url: string) => fetch(url).then((res) => {
  if (!res.ok) {
    throw new Error('Someting went wrong')
  }
  return res.json()
}
)
export default function Home() {
  const { data, error } = useSwr('/api/drones', fetcher, {
    refreshInterval: 5000
  })
  if (error) return <div>Failed to load drones</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <Heading display="flex" justifyContent="center" alignItems="center" m={10}>Drones that violate the NFZ</Heading>
      <Dronemap data={data} />
      <Heading display="flex" justifyContent="center" alignItems="center" m={10}>Information</Heading>
      <SimpleGrid
        columns={{ sm: 1, md: 3, lg: 4 }}
        gap={6}
        justifyContent="center"
        alignItems="center"
        m={3}
      >
        {data || data.length >= 1 ? data.map((item: iDrone, i: number) => {
          return <DroneCard drone={item} key={i} />
        }) : null}
      </SimpleGrid>
    </div>
  )
}