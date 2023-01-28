import { Box, Flex, Select, Stack, StackDivider, Text, Input, InputGroup, InputLeftElement, Grid } from "@chakra-ui/react"
import { BiSearch } from 'react-icons/bi'
import SortCard from "./SortCard"
import TrendingCard from "./TrendingCard"
import dummyData from '../data/dummyData.json'

const Main = () => {
    return (
        <Stack
            pt={"100px"}
            pl={"120px"}
        >
            <Flex direction="column" gap={3} px={10} py={5}>
                <Text as="b" color="gray.400" fontSize="2xl">Trending Communities</Text>
                <Grid
                    templateColumns={
                        {
                            base: 'repeat(1, 1fr)',
                            md: "repeat(2, 1fr)",
                            xl: "repeat(3, 1fr)",
                        }
                    }
                    gap={6}
                >
                    {
                        dummyData.trending.map((item, index) => {
                            return (
                                <TrendingCard
                                    key={index}
                                    name={item.name}
                                    description={item.description}
                                    logo_url={item.logo_url}
                                // members={item.members}
                                // tags={item.tags}
                                />
                            )
                        })

                    }
                </Grid>
            </Flex>
            <StackDivider borderWidth={'1px'} />
            <Flex direction="column" gap={3} px={10} py={5}>
                <Flex gap={3}>
                    <Select placeholder="Sort by" w={'fit-content'} rounded="full" fontWeight={'bold'} color="white">
                        <option>United Arab Emirates</option>
                        <option>Nigeria</option>
                    </Select>
                    <InputGroup color={'white'}>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<BiSearch color='gray.300' />}
                        />
                        <Input type='tel' placeholder='Phone number' rounded={'full'} maxWidth={"80vw"} />
                    </InputGroup>
                </Flex>

                <Grid
                    templateColumns={
                        {
                            base: 'repeat(1, 1fr)',
                            md: "repeat(2, 1fr)",
                            xl: "repeat(3, 1fr)",
                            '2xl': "repeat(4, 1fr)",
                        }
                    }
                    gap={6}
                >
                    {
                        dummyData.sortable.map((item, index) => {
                            return (
                                <SortCard
                                    key={index}
                                    name={item.name}
                                    description={item.description}
                                    logo_url={item.logo_url}
                                // members={item.members}
                                // tags={item.tags}
                                />
                            )
                        })
                    }
                </Grid>
            </Flex>
        </Stack>
    )
}

export default Main