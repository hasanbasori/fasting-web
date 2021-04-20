;<FormControl isRequired>
  <Input m="2px" w="212px" placeholder="First name" />
  <Input w="208px" placeholder="Last name" />
  <Input m="2px" w="212px" placeholder="Nickname" />
  <Input w="208px" placeholder="Birthdate" />
  <DatePicker />
  <Input w="421px" m="2px" s id="email" placeholder="Email Address" />

  <InputGroup w="421px" size="md" m="2px" mb="4px" ml="30">
    <Input
      pr="4.5rem"
      type={showPassword ? 'text' : 'password'}
      placeholder="Enter password"
    />
    <InputRightElement width="4.5rem">
      <Button h="1.75rem" size="sm" onClick={handleClick}>
        {showPassword ? 'Hide' : 'Show'}
      </Button>
    </InputRightElement>
  </InputGroup>

  <InputGroup w="421px" size="md" m="2px" ml="30">
    <Input
      pr="4.5rem"
      type={showConfirmPassword ? 'text' : 'password'}
      placeholder="Confirm Password"
    />
    <InputRightElement width="4.5rem">
      <Button h="1.75rem" size="sm" onClick={handleConfirmClick}>
        {showConfirmPassword ? 'Hide' : 'Show'}
      </Button>
    </InputRightElement>
  </InputGroup>
  <FormLabel ml="31" as="legend">
    Please select user type
  </FormLabel>
  <Radio.Group defaultValue="Itachi">
    <HStack spacing="24px">
      <Radio ml="30" value="Sasuke">
        User
      </Radio>
      <Radio value="Nagato">Creator</Radio>
    </HStack>
  </Radio.Group>
  <Input w="421px" m="2px" mb="15px" id="file" placeholder="Email Address" />
  <Button colorScheme="teal" size="sm">
    Sign Up
  </Button>
</FormControl>
