import { Badge, Box, Flex, Image, Tag, TagLabel, TagLeftIcon, Text } from "@chakra-ui/react"
import { AiOutlineUser } from 'react-icons/ai'

const TrendingCard = () => {
    return (
        <Flex
            direction="column"
            alignItems={"center"}
            borderWidth={1}
            p={8}
            w="fit-content"
            rounded={"32px"}
            mt={16}
            fontSize="xl"
            textAlign={"center"}
            gap={2}
            bg="radial-gradient(100% 100% at 50.18% 100%, #141425 0%, rgba(20, 20, 37, 0) 100%)"
            backdropBlur={"62px"}
        >
            <Image
                src="/cardLogo(1).svg"
                alt="The logo"
                boxSize={180}
                p={4}
                borderWidth={1}
                borderRadius={"40px"}
                borderColor="gray.600"
                borderStyle="solid"
                backdropBlur={10}
                className="-translate-y-20 backdrop-blur-lg -mb-14"
                bg={"radial-gradient(100% 100% at 50% 0%, rgba(130, 130, 164, 0.12) 0%, rgba(130, 130, 164, 0) 100%)"}
            />

            <Text as="b" fontSize="2xl">AirFoil DAO</Text>
            <Text as="span" color="gray.400" maxWidth={400} px={8}>Swap, earn and build on the leading decentralized crypto trading protocol.</Text>
            <Flex gap={2} alignItems="center" >
                <Tag rounded={"full"} fontSize={"lg"} px={4} py={2}>
                    <TagLeftIcon boxSize="24px" color="gray.500" as={AiOutlineUser} />
                    <TagLabel fontWeight={"bold"}>140</TagLabel>
                </Tag>
                <Tag colorScheme={"green"} rounded="full" px={4} py={2} fontSize={"lg"}>
                    <TagLabel fontWeight={"bold"}>DeFi</TagLabel>
                </Tag>

                <Tag colorScheme={"purple"} rounded="full" px={4} py={2} fontSize={"lg"}>
                    <TagLabel fontWeight={"bold"}>DEX</TagLabel>
                </Tag>
            </Flex>
        </Flex>
    )
}

export default TrendingCard