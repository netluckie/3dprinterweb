import React, { useState } from "react";
import Chart from "react-apexcharts";
import {
  Box,
  Button,
  Flex,
  Stack,
  HStack,
  Icon,
  Text,
  VStack,
  Stat,
  StatLabel,
  Radio,
  RadioGroup,
  Checkbox,
  PinInput,
  PinInputField
} from "@chakra-ui/react";
import { FiBarChart, FiToggleLeft } from "react-icons/fi";

const ChartData = [
  {
    name: "Nuzzle Gövde",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
  },
  {
    name: "Tabla",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
  },
  {
    name: "Nuzzle Uç",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
  },
];

export class TempChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      chartOptions: {},
      value: "1",
    };
  }

  componentDidMount() {
    this.setState({
      chartData: ChartData,
      chartOptions: ChartOptions,
    });
  }

  render() {
    return (
      <VStack
        borderRadius={20}
        p={4}
        minH="full"
        bg="white"
        align="center"
        direction="column"
        w="100%"
      >
        <Flex align="center" w="100%" px="15px" py="10px">
          <Text
            me="auto"
            fontSize="xl"
            color={"secondaryGray.900"}
            fontWeight="700"
            lineHeight="100%"
          >
            Anlık Sıcaklıklar
          </Text>
          <Button
            align="center"
            justifyContent="center"
            w="37px"
            h="37px"
            lineHeight="100%"
            borderRadius="10px"
          >
            <Icon as={FiBarChart} w="24px" color={"#4318FF"} />
          </Button>
        </Flex>
        <Box h="xs" mt="auto" w="full" pt={4}>
          <Chart
            options={this.state.chartOptions}
            series={this.state.chartData}
            type="bar"
            width="100%"
            height="70%"
          />
        </Box>
        <VStack w="full" p={6} bg="white" borderRadius={20} spacing={6}>
          <Flex align="center" w="100%">
            <Text
              me="auto"
              fontSize="xl"
              color={"secondaryGray.900"}
              fontWeight="700"
              lineHeight="100%"
            >
              Ayarlar
            </Text>
            <Button
              align="center"
              justifyContent="center"
              w="37px"
              h="37px"
              lineHeight="100%"
              borderRadius="10px"
            >
              <Icon as={FiToggleLeft} w="24px" color={"#4318FF"} />
            </Button>
          </Flex>
          <HStack w='full'>
            <Stat>
              <StatLabel color={"gray.600"} defaultValue="1" pb={2}>
                Teknik
              </StatLabel>
              <RadioGroup defaultValue="2">
                <Stack spacing={2} direction='column'>
                  <Radio  colorScheme='blue' value="1">
                    Dikdörtgen
                  </Radio>
                  <Radio colorScheme='blue' value="2">
                    Kare
                  </Radio>
                </Stack>
              </RadioGroup>
            </Stat>
            <Stat>
              <StatLabel color={"gray.600"} defaultValue="1" pb={2}>
                Isıtma
              </StatLabel>
              <Stack spacing={2} direction='column'>
            <Checkbox colorScheme='blue' defaultChecked>
              Yatak
            </Checkbox>
            <Checkbox colorScheme='blue' >
              Bölme
            </Checkbox>
          </Stack>
            </Stat>
            <Stat>
              <StatLabel color={"gray.600"} defaultValue="1" pb={2}>
                Kutu Sınırlayıcı/mm
              </StatLabel>
              <Stack spacing={2} direction='row'>
              <Box border={'4px solid'}  borderColor='gray.400' h='54px' w='54px' borderRadius={6}  ></Box>
              <HStack>
              <PinInput size='sm'>
                <PinInputField />
                
                <PinInputField  />
              </PinInput>
            </HStack>
          </Stack>
            </Stat>
          </HStack>
        </VStack>
      </VStack>
    );
  }
}

const ChartOptions = {
  chart: {
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: false,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
  },

  grid: {
    borderColor: "rgba(163, 174, 208, 0.3)",
    show: true,
    yaxis: {
      lines: {
        show: false,
        opacity: 0.5,
      },
    },
    row: {
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
  },
  legend: {
    show: false,
  },
  colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "20px",
    },
  },
};
