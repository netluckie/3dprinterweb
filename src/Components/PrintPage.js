import React from "react";
import {
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
  Box,
  chakra,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  Icon,
  StatArrow,
  StatGroup,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

import heart from "../heart.m4v";
import { TempChart } from "../Components/TempChart";
import Fan from "../fan64.png";
import { IoPause, IoStop } from "react-icons/io5";
import { FiInfo } from "react-icons/fi";


const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

export default function PrintPage() {
  return (
    <>
      <Flex borderRadius={20}>
        <HStack w="full"  borderRadius={20} p={4} border={0}>
          <VStack spacing={0} alignContent="flex-start" align={"flex-start"}>
            <Heading size={"lg"} fontWeight={"650"}>
              Baskı...
            </Heading>
            <Text fontSize={"md"} color={"gray.500"} fontWeight={"550"}>
              Ender3-red-heartbeat.gcode
            </Text>
          </VStack>
          <Spacer />

          <HStack spacing={4}>
            <CircularProgress value={40} color="#868CFF">
              <CircularProgressLabel>4.7%</CircularProgressLabel>
            </CircularProgress>
            <Button leftIcon={<IoPause />} colorScheme="gray" bg='white' variant="solid">
              Duraklat
            </Button>
            <Button
              leftIcon={<IoStop color="red.300" />}
              colorScheme="gray"
              bg='white'
              color="red.300"
              variant="solid"
            >
              Durdur
            </Button>
          </HStack>
        </HStack>
      </Flex>

      <HStack w="full" py={6} align="flex-start">
        <Flex borderRadius={20}>
          <Box
            as="video"
            src={heart}
            muted
            autoPlay
            loop
            alt="3D live"
            boxShadow={"2xl"}
            maxH={"64vh"}
            objectFit="contain"
            sx={{
              aspectRatio: "4/3",
            }}
            borderRadius={20}
          />
        </Flex>
        <Spacer />
        <Flex w="2xl">
          <TempChart />
        </Flex>
      </HStack>
      <VStack w="full" p={6} bg="white" borderRadius={20} spacing={4}>
      <Flex align="center" w="100%" >
          <Text
            me="auto"
            fontSize="xl"
            color={"secondaryGray.900"}
            fontWeight="700"
            lineHeight="100%"
          >
          Hakkında
          </Text>
          <Button
            align="center"
            justifyContent="center"
            w="37px"
            h="37px"
            lineHeight="100%"
            borderRadius="10px"
          >
            <Icon as={FiInfo} w="24px" color={"#4318FF"} />
          </Button>
        </Flex>
        <HStack w="full">
          <Stat>
            <StatLabel color={"gray.600"}>Baskı Süresi</StatLabel>
            <StatNumber fontSize={"sm"}>00:05:18</StatNumber>
          </Stat>
          <Stat>
            <StatLabel color={"gray.600"}>Kalan Süre</StatLabel>
            <StatNumber fontSize={"sm"}>2h 15m</StatNumber>
          </Stat>
          <Stat>
            <StatLabel color={"gray.600"}>Approx. toplam baskı süresi</StatLabel>
            <StatNumber fontSize={"sm"}>3h 29m</StatNumber>
          </Stat>
          <Stat>
            <StatLabel color={"gray.600"}>Yüklendi</StatLabel>
            <StatNumber fontSize={"sm"}>12:14 12.06.2022</StatNumber>
          </Stat>
          <Stat>
            <StatLabel color={"gray.600"}>İlerleme</StatLabel>
            <StatNumber fontSize={"sm"}>8.2MB / 18.0MB</StatNumber>
          </Stat>
          <Box>
          <Stat>
          <StatLabel color={"gray.600"}>Fan</StatLabel>
          </Stat>
          <ChakraBox
            animate={{
              scale: [1, 1],
              rotate: [0, 360],
              borderRadius: ["20%", "20%"],
            }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{
              duration: 0.6,
          
              repeat: Infinity,
              repeatType: "loop",
            }}
          ><Image src={Fan} h='36px' /></ChakraBox>
  
           </Box>
        </HStack>
      </VStack>
    </>
  );
}
