import { Box, Heading, Text } from "@chakra-ui/react";

import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Box padding={5} marginLeft={"50px"}>
        <Heading>Oops</Heading>
        <Text padding={3}>
          {isRouteErrorResponse(error)
            ? "❗❗ 404 not found : This page does not exist."
            : "An unexpected error occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
