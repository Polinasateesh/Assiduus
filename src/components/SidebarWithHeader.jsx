

import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Img,
  
  } from '@chakra-ui/react'
  import {
    FiMenu,
    FiBell,
    FiChevronDown,
  } from 'react-icons/fi'
  import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
  import { SearchIcon } from '@chakra-ui/icons'; 
  import { BsCurrencyDollar } from 'react-icons/bs'
  import { IoMdWallet } from 'react-icons/io'
  import { GrDocumentText } from 'react-icons/gr'
  import { BsFillPersonFill } from 'react-icons/bs'
  import { BiSolidDashboard } from 'react-icons/bi'
  import { MdContacts } from 'react-icons/md'
  import Layout from './Layout';
  
  
  
  const LinkItems = [
    { name: 'Dashboard', icon: BiSolidDashboard },
    { name: 'Accounts', icon: IoMdWallet },
    { name: 'Payroll', icon: BsCurrencyDollar },
    { name: 'Reports', icon: GrDocumentText },
    { name: 'Advisor', icon: BsFillPersonFill },
    { name: 'Contacts', icon: MdContacts },
  ]
  
  const SidebarContent = ({ onClose, ...rest }) => {
    console.log('rederedsidebarcontent');
    return (
      <Box
        transition="3s ease"
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        shadow={'10xl'}
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
  
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
        {...rest}>
        <Flex h="20" alignItems="center" mx="8" justifyContent="start" flexDirection='row'>
          <Img src="https://desk.assiduus.in/content/images/size/w256h256/2023/07/shape-png.png" height={'25px'} />
  
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" marginTop={2}>
            ASSIDUUS
          </Text>
          <Text fontSize="5px" fontFamily="monospace" fontWeight="bold" marginBottom={'12px'}>
  
            TM
          </Text>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    )
  }
  
  const NavItem = ({ icon, children, ...rest }) => {
    console.log('rederedNavItem');
    return (
      <Box
        as="a"
        href="/"
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}>
        <Flex
          align="center"
          p="3"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'green',
            color: 'white',
          }}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Box>
    )
  }
  
  const MobileNav = ({ onOpen, ...rest }) => {
    console.log('redered mobileNav');
    return (
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue('white', 'gray.900')}
        shadow={'1xl'}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        {...rest}>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
  
        <Text
          display={{ base: 'flex', md: 'none' }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold">
          ASSIDUUS
        </Text>
  
        <HStack spacing={{ base: '0', md: '6' }}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input border={'none'} backgroundColor={"gray.100"} />
          </InputGroup>
          <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />}/>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                <HStack>
  
                  <Avatar
                    size={'sm'}
                    src={
                      'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                  />
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2">
  
                  </VStack>
                  <Box display={{ base: 'none', md: 'flex' }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              {/* <MenuList
                bg={useColorModeValue('white', 'gray.900')}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Billing</MenuItem>
                <MenuDivider />
                <MenuItem>Sign out</MenuItem>
              </MenuList> */}
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    )
  }
  
  const SidebarWithHeader = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    console.log('redered sidebar');
  
    return (
      <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')} >
        <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          borderRadius={'5px'}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full">
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <MobileNav onOpen={onOpen} />
        {/* <Box ml={{ base: 0, md: 60 }} p="4">
          <Flex alignItems="center" justifyContent="space-between" flexWrap="wrap">
            <CheckingAccount />
            <Invoice />
            <CashFlow />
            <AccountWatchlist />
          </Flex>
        </Box> */}
        <Layout/>
      </Box >
  
  
  
  
  
  
  
  
    )
  }
  
  export default SidebarWithHeader
  