import { Card, CardHeader, Heading, CardBody, Stack, StackDivider, Box, Text } from '@chakra-ui/react'
import React from 'react'

interface ResultCardProps {
    location: string;
    weather: string;
    maxTemperature: string;
    minTemperature: string;
}

function ResultCard({ location, weather, maxTemperature, minTemperature }: ResultCardProps) {
    return (
        <Card>
            <CardHeader>
                <Heading size="md">
                    Weather Info of <Text as="span" color="orange" textTransform="uppercase">{location}</Text>
                </Heading>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Weather
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {weather}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Max Temperature (°C)
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {maxTemperature}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Min Temperature (°C)
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {minTemperature}
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default ResultCard