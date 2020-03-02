import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/core";
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import * as ROUTES from 'constants/routes';
import Logo from 'assets/logo192.png';

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Navigation = () => (
  <Flex
    bg="gray.100"
    px={5}
    py={4}
    justifyContent="space-between"
    alignItems="center"
  >
    <StyledLink to={ROUTES.LANDING}>
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Image
          src={Logo}
          size={30}
        />
        <Text pl={3} textDecor="none" color="black">
          React Firebase App
        </Text>
      </Flex>
    </StyledLink>
    <Box>
      <StyledLink to={ROUTES.SIGN_IN}>
        <Text px={2} display="inline" textDecor="none" color="black">Sign In</Text>
      </StyledLink>
      <StyledLink to={ROUTES.HOME}>
        <Text px={2} display="inline" textDecor="none" color="black">Home</Text>
      </StyledLink>
      <StyledLink to={ROUTES.ACCOUNT}>
        <Text px={2} display="inline" textDecor="none" color="black">Account</Text>
      </StyledLink>
      <StyledLink to={ROUTES.ADMIN}>
        <Text px={2} display="inline" textDecor="none" color="black">Admin</Text>
      </StyledLink>
    </Box>
  </Flex>
);

export default Navigation;
