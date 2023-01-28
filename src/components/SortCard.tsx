import { Flex, Image, Tag, TagLabel, TagLeftIcon, Text } from "@chakra-ui/react"
import { AiOutlineUser } from 'react-icons/ai'

const SortCard = () => {
    return (
        <Flex direction={'column'} rounded='50px' borderWidth={1} overflow="hidden" w="fit-content" borderColor="gray.800">
            <Flex p={4} gap={5}>
                <Image
                    src="/cardLogo(1).svg"
                    alt="The logo"
                    boxSize={28}
                    p={2}
                    borderWidth={1}
                    borderColor="gray.800"
                    borderStyle="solid"
                    backdropBlur={10}
                    borderRadius="30px"
                />
                <Flex direction={'column'} gap={2}>
                    <Text as='b' fontSize='xl'>Move Dollar DAO</Text>
                    <Text as='span' color="gray.400" fontSize="lg" noOfLines={2}>Swap, earn and build on the leading decentralized crypto trading protocol.</Text>
                </Flex>
            </Flex>
            <Flex gap={2} alignItems="center" bg={'gray.900'} px={10} py={4}>
                <Tag rounded={"full"} fontSize={"md"} px={4} py={2}>
                    <TagLeftIcon boxSize="24px" color="gray.500" as={AiOutlineUser} />
                    <TagLabel fontWeight={"bold"}>140</TagLabel>
                </Tag>
                <Tag colorScheme={"green"} rounded="full" px={4} py={2} fontSize={"md"}>
                    <TagLabel fontWeight={"bold"}>DeFi</TagLabel>
                </Tag>

                <Tag colorScheme={"purple"} rounded="full" px={4} py={2} fontSize={"md"}>
                    <TagLabel fontWeight={"bold"}>DEX</TagLabel>
                </Tag>
            </Flex>
        </Flex>
    )
}

export default SortCard