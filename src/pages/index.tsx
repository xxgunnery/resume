import {
  Box,
  ColorModeScript,
  Flex,
  GridItem,
  Heading,
  Image,
  Link,
  ListItem,
  SimpleGrid,
  UnorderedList,
  useColorMode,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.css";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack mt="5px" fontFamily="verdana">
      <Box
        w="8.5in"
        h="10.25in"
        pt="0.25in"
        pl="0.25in"
        border="1px solid rgba(0,0,0,.1)"
        bg="rgba(0,0,0,.001)"
      >
        <SimpleGrid columns={10} columnGap="20px">
          <GridItem colSpan={3} display="flex" justifyContent="center">
            <SimpleGrid columns={3}>
              <GridItem colSpan={3} display="flex" justifyContent="center">
                <Image w="1.55in" h="1.55in" src="images/Paul_PFP.png" />
              </GridItem>
              <GridItem colSpan={3} display="flex" justifyContent="center">
                <VStack alignItems="flex-start" w="100%" p="0.05in" fontSize="12px">
                  <VStack rowGap="0px" w="100%" mt="3px!important">
                    <Box>pbdantonio@gmail.com</Box>
                  </VStack>
                  <VStack w="100%" m="5px 0px 5px 0px!important">
                    <Box borderBottom="1px solid rgba(0,0,0,0.4)" w="70%" />
                  </VStack>
                  <VStack rowGap="0px" w="100%" mt="0px!important">
                    <Box>(315) 727-1453</Box>
                  </VStack>
                  <VStack w="100%" m="5px 0px 5px 0px!important">
                    <Box borderBottom="1px solid rgba(0,0,0,0.4)" w="70%" />
                  </VStack>
                  <VStack rowGap="0px" w="100%" mt="0px!important">
                    <Box>Syracuse, NY 13027</Box>
                  </VStack>
                  <VStack w="100%" m="5px 0px 5px 0px!important">
                    <Box borderBottom="1px solid rgba(0,0,0,0.4)" w="70%" />
                  </VStack>
                  <VStack rowGap="0px" w="100%" mt="0px!important">
                    <Box>github.com/xxgunnery</Box>
                  </VStack>
                  <VStack w="100%" m="5px 0px 5px 0px!important">
                    <Box borderBottom="1px solid rgba(0,0,0,0.4)" w="70%" />
                  </VStack>
                  <VStack w="100%" alignItems="flex-start" pt=".05in">
                    <Heading fontSize="20px" borderBottom="1px solid black" w="100%">
                      SKILLS
                    </Heading>
                    <VStack w="100%" alignItems="flex-start">
                      <Box fontSize="12px">Frontend - ReactJS, Angular</Box>
                      <Box mt="0px!important" border="1px solid blue" w="100%" h="10px">
                        <Box>
                          <Box bg="blue" w="100%" h="8px" />
                        </Box>
                      </Box>
                    </VStack>
                    <VStack w="100%" alignItems="flex-start">
                      <Box fontSize="12px">CSS - Tailwind, Chakra.UI, Vanilla</Box>
                      <Box mt="0px!important" border="1px solid blue" w="100%" h="10px">
                        <Box>
                          <Box bg="blue" w="90%" h="8px" />
                        </Box>
                      </Box>
                    </VStack>
                    <VStack w="100%" alignItems="flex-start">
                      <Box fontSize="12px">React Frameworks - Next.JS, Vite</Box>
                      <Box mt="0px!important" border="1px solid blue" w="100%" h="10px">
                        <Box>
                          <Box bg="blue" w="80%" h="8px" />
                        </Box>
                      </Box>
                    </VStack>
                    <VStack w="100%" alignItems="flex-start">
                      <Box fontSize="12px">Backend - NodeJS, Rust, Django</Box>
                      <Box mt="0px!important" border="1px solid blue" w="100%" h="10px">
                        <Box>
                          <Box bg="blue" w="75%" h="8px" />
                        </Box>
                      </Box>
                    </VStack>
                    <VStack w="100%" alignItems="flex-start">
                      <Box fontSize="12px">Databases - MongoDB, SQL, PostgreSQL, Prisma</Box>
                      <Box mt="0px!important" border="1px solid blue" w="100%" h="10px">
                        <Box>
                          <Box bg="blue" w="60%" h="8px" />
                        </Box>
                      </Box>
                    </VStack>
                    <VStack w="100%" alignItems="flex-start">
                      <Box fontSize="12px">Data Analysis/Computation</Box>
                      <Box mt="0px!important" border="1px solid blue" w="100%" h="10px">
                        <Box>
                          <Box bg="blue" w="70%" h="8px" />
                        </Box>
                      </Box>
                    </VStack>
                    <VStack w="100%" alignItems="flex-start">
                      <Box fontSize="12px">Frontend Web3 - EthersJS</Box>
                      <Box mt="0px!important" border="1px solid blue" w="100%" h="10px">
                        <Box>
                          <Box bg="blue" w="50%" h="8px" />
                        </Box>
                      </Box>
                    </VStack>
                    <VStack w="100%" alignItems="flex-start">
                      <Box fontSize="12px">Community Management</Box>
                      <Box mt="0px!important" border="1px solid blue" w="100%" h="10px">
                        <Box>
                          <Box bg="blue" w="50%" h="8px" />
                        </Box>
                      </Box>
                    </VStack>
                    <VStack w="100%" alignItems="flex-start">
                      <Box fontSize="12px">Customer Relations</Box>
                      <Box mt="0px!important" border="1px solid blue" w="100%" h="10px">
                        <Box>
                          <Box bg="blue" w="50%" h="8px" />
                        </Box>
                      </Box>
                    </VStack>
                  </VStack>
                </VStack>
              </GridItem>
            </SimpleGrid>
          </GridItem>
          <GridItem colSpan={7}>
            <SimpleGrid columns={10}>
              <GridItem colSpan={10}>
                <VStack alignItems="flex-start" bg="blue.600" w="100%" p="0.125in" color="white">
                  <Box fontWeight="800" mt="0px!important" onClick={toggleColorMode}>
                    Paul D'Antonio
                  </Box>
                  <Box mt="3px!important" borderBottom="1px solid rgba(255,255,255,0.3)" w="100%">
                    Software Engineer - Full Stack
                  </Box>
                </VStack>
              </GridItem>
            </SimpleGrid>
            <GridItem colSpan={8}>
              <VStack alignItems="flex-start" mt=".125in" pr="0.2in" w="100%">
                <Heading borderBottom="1px solid black" w="100%" fontSize="20px">
                  WORK HISTORY -{" "}
                  <Box display="inline" fontSize="13px">
                    See GitHub for more
                  </Box>
                </Heading>
                <VStack alignItems="flex-start" w="100%">
                  <Heading fontSize="16px" color="blue.600" w="100%">
                    Front-End Engineer - GitLab Repository
                  </Heading>
                  <Heading fontSize="15px" mt="3px!important" w="100%">
                    Penn State University{" "}
                    <Link
                      href="https://tlt.psu.edu/elevate/"
                      display="inline"
                      fontSize="14px"
                      fontWeight="500"
                      textDecoration="underline"
                    >
                      (https://tlt.psu.edu/elevate/)
                    </Link>
                  </Heading>
                  <Flex justifyContent="space-between" w="100%" fontSize="12px" mt="0!important">
                    <Box>January 2023 - Current (5 MONTHS)</Box>
                    <Box>Remote | Full Time</Box>
                  </Flex>
                  <VStack ml="10px!important" mt="3px!important">
                    <UnorderedList w="100%" mt="0px!important" fontSize="12px">
                      <ListItem>
                        Software Engineer in Penn State University's Teaching and Learning With
                        Technology (TLT) Date-Driven Learning Team.
                      </ListItem>
                      <ListItem mt="3px">
                        <strong>Technical challenges:</strong> World class, performant UI
                        functionality for filtering, sorting and visualizing institutional data. Use
                        of RxJS, Elf State management tool to create reactive user experiences.
                      </ListItem>
                    </UnorderedList>
                  </VStack>
                  <VStack
                    mt="0px!important"
                    alignItems="center"
                    justifyContent="center"
                    w="100%"
                    borderTop="1px solid rgba(0,0,0,0.4)"
                    borderBottom="1px solid rgba(0,0,0,0.4)"
                  >
                    <Box display="inline" fontSize="12px" fontWeight="500" textAlign="center">
                      Technology: Angular, MaterialUI, RxJS, Elf State Management, NodeJS
                    </Box>
                  </VStack>
                </VStack>
                <VStack alignItems="flex-start" w="100%">
                  <Heading fontSize="16px" color="blue.600" w="100%">
                    Full Stack Developer
                  </Heading>
                  <Heading fontSize="15px" mt="3px!important" w="100%">
                    Axie DoLL - Defenders of Lunacian Land{" "}
                    <Link
                      href="https://doll.tioland.com"
                      display="inline"
                      fontSize="14px"
                      fontWeight="500"
                      textDecoration="underline"
                    >
                      (https://doll.tioland.com)
                    </Link>
                  </Heading>
                  <Flex justifyContent="space-between" w="100%" fontSize="12px" mt="0!important">
                    <Box>May 2022 - November 2022 (6 MONTHS)</Box>
                    <Box>Remote | Full Time</Box>
                  </Flex>
                  <VStack ml="10px!important" mt="3px!important">
                    <UnorderedList w="100%" mt="0px!important" fontSize="12px">
                      <ListItem>
                        Created web infrastructure for a web3 game supporting 2000 players. Next.JS,
                        MongoDB, Chakra UI.
                      </ListItem>
                      <ListItem mt="3px">
                        <strong>Technical challenges:</strong> Seasonal game leaderboards, live
                        operations events, account creation/management, digital asset sales ($50,000
                        revenue in 3 days), user profiles, web3 wallet integrations including secure
                        sign on and payments.
                      </ListItem>
                    </UnorderedList>
                  </VStack>
                  <VStack
                    mt="0px!important"
                    alignItems="center"
                    justifyContent="center"
                    w="100%"
                    borderTop="1px solid rgba(0,0,0,0.4)"
                    borderBottom="1px solid rgba(0,0,0,0.4)"
                  >
                    <Box display="inline" fontSize="12px" fontWeight="500" textAlign="center">
                      Technology: React, Chakra.UI, Next.JS, NodeJS, MongoDB, EthersJS,
                      WalletConnect
                    </Box>
                  </VStack>
                </VStack>
                <VStack alignItems="flex-start" w="100%">
                  <Heading fontSize="16px" color="blue.600" w="100%">
                    Software Developer
                  </Heading>
                  <Heading fontSize="15px" mt="3px!important" w="100%">
                    Hobby Projects{" "}
                    <Link
                      href="https://github.com/xxgunnery"
                      display="inline"
                      fontSize="14px"
                      fontWeight="500"
                      textDecoration="underline"
                    >
                      (https://github.com/xxgunnery)
                    </Link>
                  </Heading>
                  <Flex justifyContent="space-between" w="100%" fontSize="12px" mt="0!important">
                    <Box>2016 - Current (6 Years)</Box>
                  </Flex>
                  <VStack ml="10px!important" mt="3px!important">
                    <UnorderedList w="100%" mt="0px!important" fontSize="12px">
                      <ListItem>
                        <strong>Battle Plains (current):</strong> I am currently working on a game
                        using Three.JS as my rendering engine. Private GitHub repository. Live demo at{" "}
                        <Link
                          href="https://battle-plains.vercel.app/"
                          display="inline"
                          fontSize="12px"
                          fontWeight="500"
                          textDecoration="underline"
                        >
                          (https://battle-plains.vercel.app/).
                        </Link>
                      </ListItem>
                      <ListItem>
                        <strong>Axie-Cute (2022):</strong> A React/Postgres app for Axie Infinity
                        players to view and rate axies. Tinder-like app where you swipe right/left.
                        Axies are then ranked by their rating and displayed in a filterable
                        marketplace.
                      </ListItem>
                      <ListItem>
                        <strong>Tauri-Fitbit (2022)</strong> A Rust app using the Tauri framework to
                        collect, analyze and display my Fitbit data from the Fitbit API.
                      </ListItem>
                    </UnorderedList>
                  </VStack>
                  <VStack
                    mt="0px!important"
                    alignItems="center"
                    justifyContent="center"
                    w="100%"
                    borderTop="1px solid rgba(0,0,0,0.4)"
                    borderBottom="1px solid rgba(0,0,0,0.4)"
                  >
                    <Box display="inline" fontSize="12px" fontWeight="500" textAlign="center">
                      Technology: ReactJS, Next.JS, Chakra.UI, Three.JS, Rust, Tauri, NodeJS
                    </Box>
                  </VStack>
                </VStack>
                <VStack alignItems="flex-start" w="100%">
                  <Heading fontSize="16px" color="blue.600" w="100%">
                    Quality Assurance Specialist
                  </Heading>
                  <Heading fontSize="15px" mt="3px!important" w="100%">
                    Specialty Granules LLC{" "}
                    <Box
                      display="inline"
                      fontSize="14px"
                      fontWeight="500"
                      textDecoration="underline"
                    >
                      (https://specialtygranules.com/)
                    </Box>
                  </Heading>
                  <Flex justifyContent="space-between" w="100%" fontSize="12px" mt="0!important">
                    <Box>June 2018 - October 2020 (2 YEARS 5 MONTHS)</Box>
                    <Box>Sacramento, CA | Full Time</Box>
                  </Flex>
                  <VStack ml="10px!important" mt="3px!important">
                    <UnorderedList w="100%" mt="0px!important" fontSize="12px">
                      <ListItem>
                        I transitioned to software development from a career in Quality Assurance at a manufacturing facility.
                      </ListItem>
                    </UnorderedList>
                  </VStack>
                </VStack>
              </VStack>
            </GridItem>
          </GridItem>
        </SimpleGrid>

        <SimpleGrid columns={10} columnGap="20px">
          <GridItem colSpan={10}>
            <VStack alignItems="flex-start" mt=".125in" pr="0.25in" w="100%">
              <Heading fontSize="20px">EDUCATION</Heading>
              <VStack alignItems="flex-start" w="100%">
                <Heading fontSize="16px" color="blue.600" w="100%">
                  Pennsylvania State University - University Park
                </Heading>
                <Flex justifyContent="space-between" w="100%" fontSize="12px" mt="0!important">
                  <Box>2015 - 2018</Box>
                  <Box>State College, PA</Box>
                </Flex>
                <Box fontSize="14px" mt="0px!important">
                  B.S. Engineering
                </Box>
              </VStack>
              <VStack
                alignItems="flex-start"
                w="100%"
                mt="0px!important"
                borderTop="1px solid black"
              >
                <Box fontSize="12px">
                  <strong>+ A.S. Engineering Science</strong> - Onondage Community College -
                  2013-2015
                </Box>
              </VStack>
            </VStack>
          </GridItem>
        </SimpleGrid>
      </Box>
      <Box pt="0px!important" fontSize="12px">
        (Resume created in React.JS using Chakra.UI and Next.JS)
      </Box>
    </VStack>
  );
};

export default Home;
