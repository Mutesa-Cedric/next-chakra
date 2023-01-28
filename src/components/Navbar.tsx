import { Box, Flex, IconButton, Image, Link, Spacer, Text } from "@chakra-ui/react"
import { SlOptions } from 'react-icons/sl'
import { BsFillBellFill } from 'react-icons/bs'

const Navbar = () => {
  return (
    <Flex
      bg="body-bg"
      px={4}
      py={6}
      borderBottomWidth={1}
      position='fixed'
      width={'100%'}
      zIndex={2}
    >
      <Box mr="auto" display={'flex'} alignItems="center" gap={2}>
        <Image src="/Logo.svg" alt="The logo" boxSize={8} />
        <Text as='b' fontSize='2xl'>Parliament</Text>
      </Box>
      <Spacer />
      <Flex gap={4} alignItems="center">
        <Flex py={1} pl={1} pr={2} alignItems="center" rounded="full" gap={2} bg="gray.800">
          <Image src="/cardLogo(1).svg" alt="The logo" boxSize={8} rounded="full" />
          <Text as='b' fontSize='md'>maxxthedesign.eth</Text>
        </Flex>
        <IconButton icon={<SlOptions />} aria-label="icon-button" rounded={"full"} />
        <IconButton icon={<BsFillBellFill />} aria-label="icon-button" rounded={"full"} />
      </Flex>
    </Flex>
  )
}

export default Navbar