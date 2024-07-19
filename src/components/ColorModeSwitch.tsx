import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch colorScheme="green" isChecked={true} onChange={toggleColorMode}>
        {colorMode === "dark" ? "Light" : "Dark"}
      </Switch>
    </HStack>
  );
};

export default ColorModeSwitch;
