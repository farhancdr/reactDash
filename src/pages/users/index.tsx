import {
    Box,
    Button,
    Checkbox,
    Flex,
    Heading,
    Icon,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/Sidebar";

export default function UserList() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />

                <Box flex="1" borderRadius={8} bg="gray.300" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Users
                        </Heading>

                        <Link href="/users/create" passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="blue"
                                leftIcon={<Icon as={RiAddLine} />}
                            >
                                Add user
                            </Button>
                        </Link>
                    </Flex>

                    <Table colorScheme="gray">
                        <Thead>
                            <Tr>
                                <Th
                                    px={["4", "4", "6"]}
                                    color="gray.300"
                                    width="8"
                                >
                                    <Checkbox colorScheme="blue" />
                                </Th>
                                <Th>Users</Th>
                                {isWideVersion && <Th>Created Date</Th>}
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {Array.from(Array(5).keys()).map((key) => (
                                <Tr key={key}>
                                    <Td px={["4", "4", "6"]}>
                                        <Checkbox colorScheme="blue" />
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Text fontWeight="bold">
                                                Sabbir Ahmed
                                            </Text>
                                            <Text
                                                fontWeight="sm"
                                                color="gray.300"
                                            >
                                                sabbir@email.com
                                            </Text>
                                        </Box>
                                    </Td>
                                    {isWideVersion && (
                                        <Td>10th Octorber, 2021</Td>
                                    )}
                                    <Td>
                                        {isWideVersion && (
                                            <Button
                                                as="a"
                                                size="sm"
                                                fontSize="sm"
                                                colorScheme="blue"
                                                leftIcon={
                                                    <Icon
                                                        as={RiPencilLine}
                                                        fontSize="16"
                                                    />
                                                }
                                            >
                                                {isWideVersion}
                                            </Button>
                                        )}
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    );
}
