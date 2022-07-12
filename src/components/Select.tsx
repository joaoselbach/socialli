import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps
} from '@chakra-ui/react'

interface SelectProps extends ChakraSelectProps {
  name: string
  label?: string
  error?: FieldError
  placeholder: string
}

const SelectBase: ForwardRefRenderFunction<HTMLInputElement, SelectProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error} lineHeight="1rem">
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Flex
        flex=".25rem"
        py=".25rem"
        position="relative"
        alignItems="center"
        transition="2s"
        width="100%"
      >
        <ChakraSelect
          name={name}
          h="3.5rem"
          placeholder="Selecione uma opção"
          backgroundColor="gray.input"
          borderColor="r"
          focusBorderColor="purple.primary"
          color="gray.placeholder"
          appearance="none"
          _hover={{ borderColor: 'gray.input' }}
        >
          <option value="Funk">Funk</option>
          <option value="Trap">Trap</option>
          <option value="Funk">Eletrônica</option>
        </ChakraSelect>
      </Flex>
      {!!error && <FormErrorMessage mt="0">{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Select = forwardRef(SelectBase)
