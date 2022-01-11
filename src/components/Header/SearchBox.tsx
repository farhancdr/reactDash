import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";


export function SearchBox(){
  const searchInput = useRef<HTMLInputElement>(null);
  
  return(
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.200"
      borderRadius="full"
      _hover={{
        bg: "gray.300"
      }}
    >
      <Input 
        color="gray.700"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Search"
        _placeholder={{ color: 'gray.400'}}
        ref={searchInput}
      />
      <Icon as={RiSearchLine} fontSize="20" color={"gray.600"}/>
      </Flex> 
  )
}