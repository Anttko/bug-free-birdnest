import { Card, CardBody, Heading, Stack, Box, Text, StackDivider } from '@chakra-ui/react'
import { iDrone } from '../pages/interfaces/types'
import React from "react";
const DroneCard: React.FC<{ drone: iDrone }> = ({ drone }) => {
    const { serialNumber,
        timestamp,
        distance,
        firstName,
        lastName,
        email,
        phoneNumber } = drone
    return (
        <Card>

            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Serial number
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {serialNumber}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Time
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {timestamp}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Distance from nest
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {distance.toFixed(1)} meters
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Pilot contact information
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {firstName + ' ' + lastName}
                        </Text>
                        <Text pt='2' fontSize='sm'>
                            {email}
                        </Text>
                        <Text pt='2' fontSize='sm'>
                            {phoneNumber}
                        </Text>
                    </Box>



                </Stack>
            </CardBody>
        </Card>
    )
}


export default DroneCard