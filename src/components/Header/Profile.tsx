import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface IProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData } : IProfileProps){
  return(
    <Flex align="center">
    {showProfileData && (
      <Box mr="4" textAlign="right">
        <Text>Farhan Sadek</Text>
        <Text 
          color="gray.300"
          fontSize="small"
        >
          farhancdr@gmail.com
        </Text>
      </Box>
    )}

    <Avatar size="md" name="Farhan Sadek" src="https://avatars.githubusercontent.com/u/54210540?v=4"/>
  </Flex>
  )
}