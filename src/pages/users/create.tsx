import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";



type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}


const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido!"),
  password: yup.string().required("Senha obrigatória").min(6, "No mínimo 6 caracteres"),      
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], "As senhas precisam ser iguais")
});



export default function CreateUser(){
  const { register, handleSubmit, formState, errors } = useForm({
    resolver: yupResolver(createUserFormSchema)
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  }


  return (
    <Box>
      <Header />      

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box 
          as="form" 
          flex="1" 
          borderRadius={8}
          bg="white" p={["6","8"]}
          boxShadow={"lg"}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">Create an user</Heading>          

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input 
                name="name" 
                label="Full Name" 
                error={errors.name}
                ref={register} 
              />
              <Input 
                name="email" 
                type="email" 
                label="E-mail" 
                error={errors.email}
                ref={register}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input 
                name="password" 
                type="password" 
                label="Password" 
                error={errors.password}
                ref={register}
              />
              <Input 
                name="password_confirmation" 
                type="password" 
                label="Confirm Password"
                error={errors.password_confirmation}
                ref={register}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancel</Button> 
              </Link>
              <Button 
                type="submit" 
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Save
              </Button> 
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}