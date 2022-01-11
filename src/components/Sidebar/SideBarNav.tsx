import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';


export function SideBarNav(){
  return (
    <Stack spacing="12" align="flex-start">
       <NavSection title="General">
          <NavLink icon={RiDashboardLine} children="Dashboard" href="/dashboard" />
          <NavLink icon={RiContactsLine} children="Users" href="/users"/>
       </NavSection>

       <NavSection title="Automation">
          <NavLink icon={RiInputMethodLine} children="Forms" href="/forms"/>
          <NavLink icon={RiGitMergeLine} children="Automation" href="/automation"/>
       </NavSection>
     </Stack>

  )
}