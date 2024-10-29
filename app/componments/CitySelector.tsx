import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import React, { ChangeEventHandler } from 'react'



interface CitySelectorProps {
    cities: City[];
    handleSelectChange: ChangeEventHandler
}

function CitySelector({ cities, handleSelectChange }: CitySelectorProps) {
    return (
        <FormControl isRequired mb="30px">
            <FormLabel>Please select target city</FormLabel>
            <Select onChange={handleSelectChange} placeholder='Duplicated results return, pls select target one'>
                {
                    cities.map((e, i) => {
                        if (e.state) {
                            return <option key={i} value={[e.name, e.temp_max.toString(), e.temp_min.toString(), e.weather]}>{e.name} - {e.state} - {e.country}</option>
                        } else {
                            return <option key={i} value={[e.name, e.temp_max.toString(), e.temp_min.toString(), e.weather]}>{e.name} - {e.country}</option>
                        }

                    })
                }
            </Select>
        </FormControl>
    )
}

export default CitySelector