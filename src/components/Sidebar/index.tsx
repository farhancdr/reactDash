import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useBreakpointValue,
} from "@chakra-ui/react";
import { useSideBarDrawer } from "../../contexts/SidebarDrawerContext";
import { SideBarNav } from "./SideBarNav";

export function SideBar() {
    const { isOpen, onClose } = useSideBarDrawer();

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    });

    if (isDrawerSidebar) {
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg="gray.100" p="4">
                        <DrawerCloseButton mt="6" />
                        <DrawerHeader>Navigation</DrawerHeader>
                        <DrawerBody>
                            <SideBar />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        );
    }

    return (
        <Box as="aside" w="60" mr="8" borderRight={"1px"} borderRightColor={"gray.300"}>
            <SideBarNav />
        </Box>
    );
}
