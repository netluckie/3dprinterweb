import {
    Button,
    Flex,
    Image,
    Link,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import React from "react";
import { FiUploadCloud } from "react-icons/fi";
  
  export default function DragDrop() {
    const bgColor = "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)";
    const borderColor = useColorModeValue("gray.100", "navy.800");
  
    return (
      <Flex
        justify='center'
        direction='column'
        align='center'
        bg={bgColor}
        borderRadius='20px'
        m='40px'
        position='fixed'
        bottom={0}
        cursor={'pointer'}
        boxShadow={'xl'}
        >
        <Flex
          border='5px solid'
          borderColor={borderColor}
          bg='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
          borderRadius='50%'
          w='64px'
          h='64px'
          align='center'
      
          justify='center'
          mx='auto'
          position='absolute'
          left='50%'
          top='-34px'
          transform='translate(-50%, 0%)'>
          <FiUploadCloud size={32} color='white' />
        </Flex>
        <Flex
          direction='column'
          mb='12px'
          align='center'
          justify='center'
          px='15px'
          pt={10}
          >
          <Text
            fontSize={{ base: "lg", xl: "18px" }}
            color='white'
            fontWeight='bold'
            lineHeight='150%'
            textAlign='center'
            px='10px'
            mb='14px'>
            Hızlı Baskı
          </Text>
          <Text
            fontSize='14px'
            color={"white"}
            px='10px'
            mb='14px'
            textAlign='center'>
            Gcode dosyasını sürükle ve bırak.
          </Text>
        </Flex>
      </Flex>
    );
  }