import { Button, Flex, Stack } from "@chakra-ui/react";
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Input } from '../components/Form/Input';


type SignInFormData = {
  email: string;
  password: string;
}

const signInSchema = yup.object().shape({
  email: yup.string().required("You must provide an email").email("Invalid email"),
  password: yup.string().required("You must enter password"),      
});


export default function SignIn() {
  const router = useRouter()
  
  const { register, handleSubmit, formState, errors } = useForm({
    resolver: yupResolver(signInSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(values);
    router.push("/dashboard");
  }


  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex 
        as="form" 
        width="100%" 
        maxWidth={360} 
        bg="white"
        boxShadow="lg" 
        p="8" 
        borderRadius={8} 
        flexDir="column" 
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
         <Input 
            name="email" 
            type="email" 
            label="E-mail"
            error={errors.email}
            ref={register}/>
         <Input 
            name="password" 
            type="password" 
            label="Password" 
            error={errors.password}
            ref={register}/>
        </Stack>

        <Button 
          type="submit" 
          mt="6" 
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Login
        </Button>

      </Flex>
    </Flex>
  )
}
