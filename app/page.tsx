// app/page.tsx
'use client'
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Spacer, Stack, FormErrorMessage, Text, Link } from '@chakra-ui/react'
import ResultCard from './componments/ResultCard'
import CitySelector from './componments/CitySelector'
import { useState } from 'react'

export default function Page() {

  const [error, setError] = useState('');
  const [cityName, setCityName] = useState("");
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");

  const [cities, setCities] = useState<City[]>([]);


  async function searchWeatherByCity() {
    try {
      let resp = await fetch(`https://weather_app_backend.xun-lee.workers.dev/city/${cityName}`)

      let weatherInfo = await resp.json();

      console.warn(weatherInfo);
      if (weatherInfo["error"]) {
        throw Error(weatherInfo["error"])
      }

      setCities(weatherInfo);
      if (weatherInfo.length == 1) {
        setLocation(weatherInfo[0].name);
        setMaxTemp(weatherInfo[0].temp_max);
        setMinTemp(weatherInfo[0].temp_min);
        setWeather(weatherInfo[0].weather);
      }
    } catch (error) {
      setError((error as Error).message);
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(event.target.value);
  };

  const handleInputFocus = () => {
    setCityName("");
    setCities([]);
    setLocation("");
    setMaxTemp("");
    setMinTemp("");
    setWeather("");
    setError("");
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const result = event.target.value.split(",");
    console.log(result);

    setLocation(result[0]);
    setWeather(result[3]);
    setMaxTemp(result[1]);
    setMinTemp(result[2]);
  }

  return (
    <Container maxWidth="md">
      <Heading my="20px">Weather App</Heading>
      <Box mb="30px">
        <Text>interviewee: Lixun 李巽</Text>
        <Link href='https://lixun.luckybaby.eu.org/'>https://lixun.luckybaby.eu.org/</Link>
      </Box>
      <Stack>
        <FormControl isRequired isInvalid={error != ""}>
          <FormLabel>City name</FormLabel>
          <Flex>
            <Box>
              <Input placeholder='Input city name to check weather info'  value={cityName} onChange={handleInputChange} onFocus={handleInputFocus} />
            </Box>
            <Spacer />
            <Button colorScheme='blue' onClick={searchWeatherByCity}>Submit</Button>
          </Flex>
          {/* {error} */}
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
        {cities.length > 1 && (
          <CitySelector cities={cities} handleSelectChange={handleSelectChange} />
        )}
        {location && (<ResultCard location={location} weather={weather} maxTemperature={maxTemp} minTemperature={minTemp} />)}
      </Stack>
    </Container>
  )
}