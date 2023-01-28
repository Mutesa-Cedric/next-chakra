import { Box, Flex, Select, Stack, StackDivider, Text, Input, InputGroup, InputLeftElement, Grid } from "@chakra-ui/react"
import { BiSearch } from 'react-icons/bi'
import SortCard from "./SortCard"
import TrendingCard from "./TrendingCard"

const Main = () => {
    return (
        <Stack
            pt={"100px"}
            pl={"120px"}
        >
            <Flex direction="column" gap={3} px={10} py={5}>
                <Text as="b" color="gray.400" fontSize="2xl">Trending Communities</Text>
                <Flex gap={8} wrap={'wrap'}>
                    <TrendingCard />
                    <TrendingCard />
                    <TrendingCard />
                </Flex>
            </Flex>
            <StackDivider borderWidth={'1px'} />
            <Flex direction="column" gap={3} px={10} py={5}>
                <Flex gap={3}>
                    <Select placeholder="Sort by" w={'fit-content'} rounded="full" fontWeight={'bold'}>
                        <option>United Arab Emirates</option>
                        <option>Nigeria</option>
                    </Select>
                    <InputGroup >
                        <InputLeftElement
                            pointerEvents='none'
                            children={<BiSearch color='gray.300' />}
                        />
                        <Input type='tel' placeholder='Phone number' rounded={'full'} maxWidth={"80vw"}/>
                    </InputGroup>
                </Flex>

                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                    <SortCard />
                    <SortCard />
                    <SortCard />
                    <SortCard />
                    <SortCard />
                    <SortCard />
                </Grid>
            </Flex>
        </Stack>
    )
}

export default Main