import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Image,
  HStack,
  VStack,
  Spacer
} from '@chakra-ui/react';
import {
  FiHome,

  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,

  FiMoreVertical,

  FiLayers,
  FiFile,
  FiCommand,
  FiPower,
  FiUpload,
  FiUploadCloud,
} from 'react-icons/fi';

import logo from '../logo.png'
import printerlogo from '../printerlogo.png'
import DragDrop from './DragDrop';



const LinkItems = [
  { name: 'Anasayfa', icon: FiHome },
  { name: 'Yazıcılar', icon: FiLayers },
  { name: 'Dosyalar', icon: FiFile },
  { name: 'Pluginler', icon: FiCommand },
  { name: 'Ayarlar', icon: FiSettings },
  { name: 'Kapat', icon: FiPower },
];

export default function SideBar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue('white.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
   
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 80 }} px={8} pt={8} minH='100vh' bg='gray.100'>
        {children}
      </Box>
    </Box>
  );
}



const SidebarContent = ({ onClose, ...rest }) => {
    const bgColor = "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)";
    const borderColor = useColorModeValue("white", "navy.800");
  return (
    <Box
      bg={useColorModeValue('white.100', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', lg: 80 }}
      pos="fixed"
      h="full">
   
      <HStack p={8} pb={20} mt={6} borderRadius={18}>
        <Image h={16} src={printerlogo} borderRadius={18} boxShadow='xl' />
        <VStack pl={2} align={'flex-start'} spacing={2} > 
        <Text fontSize={'lg'} fontWeight={'semibold'}>Ender 3 Pro</Text>
        <Text  fontSize={'sm'} >Version 2.0.9.2</Text>
        </VStack>
        <Spacer/>
        <IconButton variant={'ghost'} icon={<FiMoreVertical />} />
      </HStack>

      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
       
        <DragDrop />
    
    </Box>
  );
};


const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="6"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#868CFF ',
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
    </Link>
  );
};


const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

       
    </Flex>
  );
};