import { Button } from "@chakra-ui/react";

interface IPaginationItemsProps {
  number: number;
  isCurrent?: boolean;
}

export function PaginationItem({ isCurrent = false, number } : IPaginationItemsProps){
  if(isCurrent)
    return (
      <Button 
        size="sm" 
        fontSize="xs" 
        width="4" 
        colorScheme="blue" 
        disabled 
        _disabled={{ bgColor: 'blue.500', cursor: 'default'}}
      >
        {number}
      </Button>
    )

    return (
      <Button 
        size="sm" 
        fontSize="xs" 
        width="4" 
        bgColor="gray.400" 
        _hover={{
          bgColor: 'gray.500'

        }}
      >
        {number}
      </Button>
    )
}