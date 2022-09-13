import { Box, Flex, GridItem, Heading, Image, SimpleGrid, useMediaQuery, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.css";

const Home: NextPage = () => {

  return (
    <VStack mt="5px" fontFamily="verdana">
      <Box w="8.5in" h="10.75in" pt="0.25in" pl="0.25in" border="1px solid rgba(0,0,0,.1)" bg="rgba(0,0,0,.02)">
        <SimpleGrid columns={10} columnGap="20px">
          <GridItem colSpan={3} display="flex" justifyContent="center">
            <Image w="1.75in" h="1.75in" src="images/Paul_PFP.png" />
          </GridItem>
          <GridItem colSpan={7}>
            <VStack alignItems="flex-start" bg="blue.600" w="100%" p="0.125in" color="white">
              <Box fontWeight="800" mt="0px!important">
                Paul D'Antonio
              </Box>
              <Box mt="3px!important">
                Software Engineer - Specializing in Front-End Web Development
              </Box>
              <Box fontSize="11px" mt="3px!important">
                Motivated by creating impactful applications in the space of gaming and web3. I love data, analytics and creating clean UI/UX. I previously come from the quality assurance field and I strongly believe in the importance of testing, analyzing feedback, and pushing to satisfy requirements.
              </Box>
            </VStack>
          </GridItem>
        </SimpleGrid>

        <SimpleGrid columns={10} columnGap="20px">
          <GridItem colSpan={3} display="flex" justifyContent="center">
            <VStack alignItems="flex-start" w="100%" p="0.125in" fontSize="13px">
              <VStack rowGap="0px" w="100%" mt="3px!important">
                <Box>
                  <Image src="images/mail.png" w=".3in" h=".3in" />
                </Box>
                <Box>
                  pbdantonio@gmail.com
                </Box>
              </VStack>
              <VStack rowGap="0px" w="100%" mt="3px!important">
                <Box>
                  <Image src="images/phone.png" w=".3in" h=".3in" />
                </Box>
                <Box>
                  (315) 727-1453
                </Box>
              </VStack>
              <VStack rowGap="0px" w="100%" mt="3px!important">
                <Box>
                  <Image src="images/location.png" w=".3in" h=".3in" />
                </Box>
                <Box>
                  Syracuse, NY
                </Box>
              </VStack>
              <VStack rowGap="0px" w="100%" mt="3px!important">
                <Box>
                  <Image src="images/github.png" w=".3in" h=".3in" />
                </Box>
                <Box>
                  github.com/xxgunnery
                </Box>
              </VStack>
              <VStack rowGap="0px" w="100%" mt="3px!important">
                <Box>
                  <Image src="images/youtube.png" w=".4in" h=".3in" />
                </Box>
                <Box>
                  youtube.com/thediyresource
                </Box>
              </VStack>
              <VStack rowGap="0px" w="100%" mt="3px!important">
                <Box>
                  <Image src="images/twitter.png" w=".3in" h=".25in" />
                </Box>
                <Box>
                  twitter.com/xxgunnery
                </Box>
              </VStack>
              <VStack w="100%" alignItems="flex-start" pt=".05in">
                <Heading fontSize="23px" borderBottom="1px solid black" w="100%">
                  TECH SKILLS
                </Heading>
                <VStack w="100%" alignItems="flex-start">
                  <Box>
                    Frontend - React
                  </Box>
                  <Box mt="0px!important" border="1px solid blue" w="100%" h="10px">
                    <Box>
                      <Box bg="blue" w="100%" h="8px" />
                    </Box>
                  </Box>
                </VStack>
                <VStack w="100%" alignItems="flex-start">
                  <Box>
                    Frameworks - Next.JS
                  </Box>
                  <Box mt="0px!important" border="1px solid blue" w="100%" h="10px">
                    <Box>
                      <Box bg="blue" w="95%" h="8px" />
                    </Box>
                  </Box>
                </VStack>
                <VStack w="100%" alignItems="flex-start">
                  <Box>
                    Backend - Node, Python, PhP
                  </Box>
                  <Box mt="0px!important" border="1px solid blue" w="100%" h="10px">
                    <Box>
                      <Box bg="blue" w="55%" h="8px" />
                    </Box>
                  </Box>
                </VStack>
                <VStack w="100%" alignItems="flex-start">
                  <Box>
                    Databases - MongoDB, SQL
                  </Box>
                  <Box mt="0px!important" border="1px solid blue" w="100%" h="10px">
                    <Box>
                      <Box bg="blue" w="50%" h="8px" />
                    </Box>
                  </Box>
                </VStack>
                <VStack w="100%" alignItems="flex-start">
                  <Box>
                    Frontend Web3 - EthersJS
                  </Box>
                  <Box mt="0px!important" border="1px solid blue" w="100%" h="10px">
                    <Box>
                      <Box bg="blue" w="50%" h="8px" />
                    </Box>
                  </Box>
                </VStack>
                <VStack w="100%" alignItems="flex-start">
                  <Box>
                    Backend Web3 - Solidity, EVM
                  </Box>
                  <Box mt="0px!important" border="1px solid blue" w="100%" h="10px">
                    <Box>
                      <Box bg="blue" w="10%" h="8px" />
                    </Box>
                  </Box>
                </VStack>
                <VStack w="100%" alignItems="flex-start">
                  <Box>
                    Web Design
                  </Box>
                  <Box mt="0px!important" border="1px solid blue" w="100%" h="10px">
                    <Box>
                      <Box bg="blue" w="90%" h="8px" />
                    </Box>
                  </Box>
                </VStack>
                <VStack w="100%" alignItems="flex-start">
                  <Box>
                    Content Creation
                  </Box>
                  <Box mt="0px!important" border="1px solid blue" w="100%" h="10px">
                    <Box>
                      <Box bg="blue" w="30%" h="8px" />
                    </Box>
                  </Box>
                </VStack>
                <VStack w="100%" alignItems="flex-start">
                  <Box>
                    Quality Assurance
                  </Box>
                  <Box mt="0px!important" border="1px solid blue" w="100%" h="10px">
                    <Box>
                      <Box bg="blue" w="70%" h="8px" />
                    </Box>
                  </Box>
                </VStack>
                <VStack w="100%" alignItems="flex-start">
                  <Box>
                    Community Management
                  </Box>
                  <Box mt="0px!important" border="1px solid blue" w="100%" h="10px">
                    <Box>
                      <Box bg="blue" w="30%" h="8px" />
                    </Box>
                  </Box>
                </VStack>
                <VStack w="100%" alignItems="flex-start">
                  <Box>
                    Customer Service
                  </Box>
                  <Box mt="0px!important" border="1px solid blue" w="100%" h="10px">
                    <Box>
                      <Box bg="blue" w="50%" h="8px" />
                    </Box>
                  </Box>
                </VStack>

              </VStack>
            </VStack>
          </GridItem>

          <GridItem colSpan={7}>
            <VStack alignItems="flex-start" mt=".125in" pr="0.25in" w="100%">
              <Heading borderBottom="1px solid black" w="100%" fontSize="23px">
                WORK EXPERIENCE
              </Heading>
              <VStack alignItems="flex-start" w="100%">
                <Heading fontSize="19px" color="blue.600" w="100%">
                  Front-End Web Developer
                </Heading>
                <Heading fontSize="19px" mt="3px!important" w="100%">
                  Axie DoLL - Defenders of Lunacian Land
                </Heading>
                <Flex justifyContent="space-between" w="100%" fontSize="12px" mt="0!important">
                  <Box>
                    05/2022 - Present
                  </Box>
                  <Box>
                    Remote
                  </Box>
                </Flex>
              </VStack>
            </VStack>
          </GridItem>

        </SimpleGrid>
      </Box>
    </VStack>
  );
};

export default Home;
