import { Box, ColorModeScript, Flex, GridItem, Heading, Image, ListItem, SimpleGrid, UnorderedList, useColorMode, useMediaQuery, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.css";

const Home: NextPage = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <VStack mt="5px" fontFamily="verdana">
            <Box w="8.5in" h="10.5in" pt="0.25in" pl="0.25in" border="1px solid rgba(0,0,0,.1)" bg="rgba(0,0,0,.001)">
                <SimpleGrid columns={10} columnGap="20px">
                    <GridItem colSpan={3} display="flex" justifyContent="center">
                        <Image w="1.75in" h="1.75in" src="images/Paul_PFP.png" />
                    </GridItem>
                    <GridItem colSpan={7}>
                        <VStack alignItems="flex-start" bg="blue.600" w="100%" p="0.125in" color="white">
                            <Box fontWeight="800" mt="0px!important" onClick={toggleColorMode}>
                                Paul D'Antonio
                            </Box>
                            <Box mt="3px!important">
                                Software Engineer - Front End
                            </Box>
                            <Box fontSize="11px" mt="3px!important">
                                I am a motivated, analytical, systems driven thinker. My focus has recently been in front end web development, but I am so excited to be entering the technology space and I am open to new possibilities. I pride myself im being a thoughtful team member first, effortlessly working to balance meeting product requirements with the strengths and needs of the team. My career has yielded a variety of experiences working in traditional induxtry and startups and I believe I am prepared for a variety of challenges!
                            </Box>
                        </VStack>
                    </GridItem>
                </SimpleGrid>

                <SimpleGrid columns={10} columnGap="20px">
                    <GridItem colSpan={3} display="flex" justifyContent="center">
                        <VStack alignItems="flex-start" w="100%" p="0.125in" fontSize="13px">
                            <VStack rowGap="0px" w="100%" mt="3px!important">
                                <Box>
                                    pbdantonio@gmail.com
                                </Box>
                            </VStack>
                            <VStack w="100%" m="5px 0px 5px 0px!important">
                                <Box borderBottom="1px solid rgba(0,0,0,0.4)" w="70%" />
                            </VStack>
                            <VStack rowGap="0px" w="100%" mt="3px!important">
                                <Box>
                                    (315) 727-1453
                                </Box>
                            </VStack>
                            <VStack w="100%" m="5px 0px 5px 0px!important">
                                <Box borderBottom="1px solid rgba(0,0,0,0.4)" w="70%" />
                            </VStack>
                            <VStack rowGap="0px" w="100%" mt="3px!important">
                                <Box>
                                    Syracuse, NY
                                </Box>
                            </VStack>
                            <VStack w="100%" m="5px 0px 5px 0px!important">
                                <Box borderBottom="1px solid rgba(0,0,0,0.4)" w="70%" />
                            </VStack>
                            <VStack rowGap="0px" w="100%" mt="3px!important">
                                <Box>
                                    github.com/xxgunnery
                                </Box>
                            </VStack>
                            <VStack w="100%" m="5px 0px 5px 0px!important">
                                <Box borderBottom="1px solid rgba(0,0,0,0.4)" w="70%" />
                            </VStack>
                            <VStack rowGap="0px" w="100%" mt="3px!important">
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
                                        Backend - NodeJS, Django
                                    </Box>
                                    <Box mt="0px!important" border="1px solid blue" w="100%" h="10px">
                                        <Box>
                                            <Box bg="blue" w="75%" h="8px" />
                                        </Box>
                                    </Box>
                                </VStack>
                                <VStack w="100%" alignItems="flex-start">
                                    <Box>
                                        Databases - MongoDB, SQL
                                    </Box>
                                    <Box mt="0px!important" border="1px solid blue" w="100%" h="10px">
                                        <Box>
                                            <Box bg="blue" w="60%" h="8px" />
                                        </Box>
                                    </Box>
                                </VStack>
                                <VStack w="100%" alignItems="flex-start">
                                    <Box>
                                        Data Analysis/Computation
                                    </Box>
                                    <Box mt="0px!important" border="1px solid blue" w="100%" h="10px">
                                        <Box>
                                            <Box bg="blue" w="70%" h="8px" />
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
                                            <Box bg="blue" w="50%" h="8px" />
                                        </Box>
                                    </Box>
                                </VStack>
                                <VStack w="100%" alignItems="flex-start">
                                    <Box>
                                        Customer Relations
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
                            <Heading borderBottom="1px solid black" w="100%" fontSize="20px">
                                WORK HIGHLIGHTS
                            </Heading>
                            <VStack alignItems="flex-start" w="100%">
                                <Heading fontSize="16px" color="blue.600" w="100%">
                                    Lead Front-End Web Developer
                                </Heading>
                                <Heading fontSize="16px" mt="3px!important" w="100%">
                                    Axie DoLL - Defenders of Lunacian Land <Box display="inline" fontSize="14px" fontWeight="500" textDecoration="underline">(https://doll.tioland.com)</Box>
                                </Heading>
                                <Flex justifyContent="space-between" w="100%" fontSize="12px" mt="0!important">
                                    <Box>
                                        May 2022 - Present (6 MONTHS)
                                    </Box>
                                    <Box>
                                        Remote | Full Time
                                    </Box>
                                </Flex>
                                <VStack ml="10px!important" mt="3px!important">
                                    <UnorderedList w="100%" mt="0px!important" fontSize="12px">
                                        <ListItem>
                                            Lead Front-End Web Developer for Axie DoLL, an exploding competitive game created for the Axie Infinity Builder's Program. Our web infrastructure currently supports 2000 players seamlessly and the player base is growing rapidly.
                                        </ListItem>
                                        <ListItem>
                                            As part of a team of 5, I worked cooperatively with game developers and my web partner to facilitate the online connections (REST APIs) for the game to manage leaderboards, live operations events, account creation/management and product sales. Our team developed code quality practices such as code review and testing.
                                        </ListItem>
                                        <ListItem>
                                            Responsible for engaging with community to collect and translate feedback (bug reports and feature requests) for both the website and the game. I maintained several Notion tables for managing tasks and tracking progress.
                                        </ListItem>
                                    </UnorderedList>
                                </VStack>
                                <VStack mt="0px!important" alignItems="center" justifyContent="center" w="100%" borderTop="1px solid rgba(0,0,0,0.4)" borderBottom="1px solid rgba(0,0,0,0.4)">
                                    <Box display="inline" fontSize="12px" fontWeight="500" textAlign="center">Technology: React, Chakra.UI, Next.JS, NodeJS, MongoDB, EthersJS, WalletConnect</Box>
                                </VStack>
                            </VStack>
                            <VStack alignItems="flex-start" w="100%">
                                <Heading fontSize="16px" color="blue.600" w="100%">
                                    Quality Assurance Specialist
                                </Heading>
                                <Heading fontSize="16px" mt="3px!important" w="100%">
                                    Specialty Granules LLC <Box display="inline" fontSize="14px" fontWeight="500">(https://specialtygranules.com/)</Box>
                                </Heading>
                                <Flex justifyContent="space-between" w="100%" fontSize="12px" mt="0!important">
                                    <Box>
                                        June 2018 - October 2020 (2 YEARS 5 MONTHS)
                                    </Box>
                                    <Box>
                                        Sacramento, CA | Full Time
                                    </Box>
                                </Flex>
                                <VStack ml="10px!important" mt="3px!important">
                                    <UnorderedList w="100%" mt="0px!important" fontSize="12px">
                                        <ListItem>
                                            Quality assurance professional in the building materials industry. Responsible for sustaining and improving quality systems at the plant level (manufacturing).
                                        </ListItem>
                                        <ListItem>
                                            Root cause analysis. Remediating and develop short-term and long-term corrective actions for internal quality issues and customer complaints/inquiries.
                                        </ListItem>
                                        <ListItem>
                                            Conduct internal audits and document results related to processing equipment and procedural compliance. Participate in external audits of our facilities, providing data and assisting auditors collect data for our process.
                                        </ListItem>
                                        <ListItem>
                                            Data analysis for determination of process capability, identification of process issues, and process improvement initiatives.
                                        </ListItem>
                                        <ListItem>
                                            Support corporate initiatives for quality and provide support for plant trials, new product development and major process changes.
                                        </ListItem>
                                    </UnorderedList>
                                </VStack>
                            </VStack>
                        </VStack>
                    </GridItem>
                    <GridItem colSpan={10}>
                        <VStack alignItems="flex-start" mt=".125in" pr="0.25in" w="100%">
                            <Heading fontSize="20px">
                                EDUCATION
                            </Heading>
                            <VStack alignItems="flex-start" w="100%">
                                <Heading fontSize="16px" color="blue.600" w="100%">
                                    Penn State University (University Park)
                                </Heading>
                                <Flex justifyContent="space-between" w="100%" fontSize="12px" mt="0!important">
                                    <Box>
                                        2015 - 2018
                                    </Box>
                                    <Box>
                                        State College, PA
                                    </Box>
                                </Flex>
                                <Box fontSize="16px" mt="0px!important">
                                    B.S. Mining Engineering
                                </Box>
                            </VStack>
                            <VStack alignItems="flex-start" w="100%">
                                <Heading fontSize="16px" color="blue.600" w="100%">
                                    Onondaga Community College
                                </Heading>
                                <Flex justifyContent="space-between" w="100%" fontSize="12px" mt="0!important">
                                    <Box>
                                        2013 - 2015
                                    </Box>
                                    <Box>
                                        Syracuse, NY
                                    </Box>
                                </Flex>
                                <Box fontSize="16px" mt="0px!important">
                                    A.S. Engineering Science
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
    )
}

export default Home
