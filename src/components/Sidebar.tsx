import { Stack, IconButton, Text, Box, StackDivider, Avatar, AvatarBadge, Spacer, Flex } from "@chakra-ui/react"
import { RiPulseLine } from 'react-icons/ri'
import { RxDashboard } from 'react-icons/rx'
import { AiOutlinePlus } from 'react-icons/ai'
import uuidGen from "uuid-by-string"

const Sidebar = () => {
  return (
    <Stack
      align="center"
      pt={"100px"}
      spacing={8}
      w="64px"
      position="fixed"
      top="0"
      left="0"
      bottom="0"
      borderRightWidth={1}
      width={"120px"}
      overflowY="auto"
      className="no-scrollbar"
    >
      <IconButton aria-label="sidebar-icon" icon={<RiPulseLine/>} size="lg" rounded={'full'} flexShrink={0}  />
      <IconButton aria-label="sidebar-icon" icon={<RxDashboard/>} size="lg" rounded={'full'} flexShrink={0} />
      <StackDivider borderWidth={1} />
      {
        [`cardLogo(1).svg`, 'cardLogo(2).svg', 'cardLogo(3).svg'].map((el, i) => (
          <Avatar size="md" name="Dan Abrahmov" src={el} rounded={'full'} key={`Messages-${i}`}>
            <AvatarBadge boxSize="1.25em" bg="red.500" >
              <Box as="span" color="white" fontWeight="bold" display="flex" alignItems="center" justifyContent="center" fontSize="sm">
                3
              </Box>
            </AvatarBadge>
          </Avatar>
        ))

      }
      <IconButton aria-label="sidebar-icon" icon={<AiOutlinePlus />} size="lg" rounded={'full'} flexShrink={0} />
      <Spacer />
      <Flex direction={'column'} alignItems={'center'} gap={4} px={4} w="100%">
        <StackDivider borderWidth={1} rounded="full" />

        <Avatar size="md" name="Dan Abrahmov" src={`https://api.dicebear.com/5.x/adventurer/png?seed=${uuidGen('1')}`} rounded={'full'}>
          <AvatarBadge boxSize="1rem" bg="red.500" />
        </Avatar>
        <Avatar size="md" name="Dan Abrahmov" src={`https://api.dicebear.com/5.x/adventurer/png?seed=${uuidGen('2')}`} rounded={'full'}>
          <AvatarBadge boxSize="1rem" bg="red.500" />
        </Avatar>
        <Avatar size="md" name="Dan Abrahmov" src={`https://api.dicebear.com/5.x/adventurer/png?seed=${uuidGen('3')}`} rounded={'full'}>
          <AvatarBadge boxSize="1rem" bg="red.500" />
        </Avatar>
        <Avatar size="md" name="Dan Abrahmov" src={`https://api.dicebear.com/5.x/adventurer/png?seed=${uuidGen('4')}`} rounded={'full'}>
          <AvatarBadge boxSize="1rem" bg="red.500" />
        </Avatar>
        <StackDivider borderWidth={1} rounded="full" />
        <Avatar size="md" name="Dan Abrahmov" src={`https://api.dicebear.com/5.x/adventurer/png?seed=${uuidGen('5')}`} rounded={'full'}>
          <AvatarBadge boxSize="1rem" bg="red.500" />
        </Avatar>
      </Flex>
    </Stack>
  )
}

export default Sidebar