import { useEffect, useRef, useState } from 'react'

import Lottie from 'react-lottie'
import * as animationData from '../../assets/notes.json'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { gql, useMutation } from '@apollo/client'
import * as yup from 'yup'

import { Input } from '~/components/Input'
import { SubmitButton } from '~/components/Buttons/SubmitButton'
import { IconLink } from '~/components/IconLink'
import { Select } from '~/components/Select'
import { BackgroundHighlight } from './styles'

import { RiUser2Fill, RiMailAddFill, RiWhatsappFill } from 'react-icons/ri'

import {
  Flex,
  Heading,
  Text,
  Image,
  Stack,
  HStack,
  useToast,
  Checkbox,
  Box
} from '@chakra-ui/react'


type LeadsFormData = {
  nome: string
  email: string
  celular: string
}

const CREATE_LEAD = gql`
  mutation createLP($input: LandingPageInput) {
    createLP(input: $input) {
      status {
        status
        message
      }
    }
  }
`

const leadsFormSchema = yup.object().shape({
  nome: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  celular: yup
    .string()
    .required('Celular obrigatório')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Número de celular inválido'
    )
})

export const Form = () => {
  const [createLP, { data: formData, loading: formLoading, error }] =
    useMutation(CREATE_LEAD)

  const toast = useToast()
  const spectrum = useRef(null)

  const [fillEmail, setFillEmail] = useState(false)
  const [fillName, setFillName] = useState(false)
  const [fillPhone, setFillPhone] = useState(false)

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(leadsFormSchema)
  })

  const { errors } = formState

  useEffect(() => {
    if (formData?.createLP) {
      if (formData.createLP.status.status === 200) {
        toast({
          title: 'Sucesso',
          description: 'Seu dados foram enviados com sucesso!',
          status: 'success',
          duration: 9000,
          isClosable: true
        })
        reset()
      } else {
        toast({
          title: 'Erro.',
          description: 'Algo de errado aconteceu',
          status: 'error',
          duration: 9000,
          isClosable: true
        })
      }
    }
  }, [formData])

  const handleLeads: SubmitHandler<LeadsFormData> = async values => {
    createLP({
      variables: {
        input: {
          ...values
        }
      }
    })
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Flex
      id="fiquepordentro"
      w="100%"
      h="100%"
      px={{ base: '2rem', m: '6rem' }}
      flexDirection="column"
      justifyContent={{ base: 'center', m: 'center' }}
      alignItems="center"
      overflow="hidden"
      pt="4.2rem"
    >
      <Heading
        position="relative"
        fontSize={{ base: '2.5rem', m: '4rem' }}
        color="#fff"
        letterSpacing="1.5px"
        textShadow="0px 0px 30px rgba(124, 7, 227, 0.5)"
        lineHeight="3rem"
        mt="12rem"

      >
        Que tal ser um
        <span
          style={{
            position: 'relative',
            marginLeft: '1rem',
            background: '-webkit-linear-gradient(#980ED9, #3F3CC0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          artista famoso?
          <Box
            top="-8rem"
            right="-25rem"
            position="absolute"
            transform="rotate(30deg)"
            display={{ base: 'none', m: 'block' }}
          >
            <Lottie
              isClickToPauseDisabled={true}
              options={defaultOptions}
              height="100%"
              width="50%"
            />
          </Box>
        </span>
      </Heading>
      <Text
        color="#ffffff8b"
        mt="2rem"
        maxWidth={850}
        textAlign="center"
        fontSize="1.05rem"
      >
        Já pensou em ser um artista influencer e aproveitar tudo que o mundo da
        música tem a oferecer?
        <br />
        Venha fazer parte da Socialli Records ;)
      </Text>
      <Flex
        position="relative"
        alignItems="flex-start"
        justifyContent="center"
        flexDirection={{ base: 'column', m: 'row' }}
        w="100%"
        mt="6rem"
      >
        <Flex
          as="form"
          w="100%"
          p="4rem"
          gap="1.25rem"
          maxWidth={1180}
          flexDirection="column"
          alignItems="center"
          borderRadius="1rem"
          zIndex="10"
          backgroundColor="#0c0c0c"
          onSubmit={handleSubmit(handleLeads)}
        >
          <Stack
            spacing="1.5rem"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
          >
            <Input
              name="nome"
              type="nome"
              label="Nome completo:"
              placeholder="Nome"
              icon={RiUser2Fill}
              error={errors.nome}
              {...register('nome')}
              onBlur={() => setFillName(false)}
              onFocus={() => setFillName(true)}
              stateIcon={fillName}
            />
            <Input
              name="email"
              type="email"
              placeholder="email@email.com"
              label="E-mail para contato:"
              icon={RiMailAddFill}
              error={errors.email}
              {...register('email')}
              onBlur={() => setFillEmail(false)}
              onFocus={() => setFillEmail(true)}
              stateIcon={fillEmail}
            />
            <Input
              name="celular"
              type="celular"
              placeholder="(41) 99798-0688"
              label="Whatsapp:"
              icon={RiWhatsappFill}
              error={errors.celular}
              {...register('celular')}
              onBlur={() => setFillPhone(false)}
              onFocus={() => setFillPhone(true)}
              stateIcon={fillPhone}
            />
            <Select
              name="topic"
              placeholder="Seleciona um genero"
              label="Escolha o gênero musical:"
              error={errors.topic}
              {...register('topic')}
            />
            
            <Checkbox isDisabled defaultChecked colorScheme="red">
              Aceito compartilhar minhas informações com a Socialli Records
            </Checkbox>
          </Stack>
          <SubmitButton
            type="submit"
            fontSize="18"
            px="3rem"
            py="1.6rem"
            isLoading={formLoading}
          >
            Enviar
          </SubmitButton>
        </Flex>
        <BackgroundHighlight />
      </Flex>

      <Flex
        mt={{ base: '6rem', m: '10rem' }}
        flexDirection="column"
        alignItems="center"
        gap="1rem"
      >
        <Image src="/images/logo.svg" cursor="pointer" />
        <Text>Siga nas redes</Text>
        <HStack>
          <IconLink src="/images/facebook.svg" href="https://chakra-ui.com" />
          <IconLink src="/images/instagram.svg" href="https://chakra-ui.com" />
          <IconLink src="/images/youtube.svg" href="https://chakra-ui.com" />
          <IconLink src="/images/spotify.svg" href="https://chakra-ui.com" />
          <IconLink src="/images/soundcloud.svg" href="https://chakra-ui.com" />
        </HStack>
        <Text fontSize=".8rem" textAlign="center">
          Copyright © 2022 Socialli, todos os direitos reservados -
          99.999.999/0001-99
        </Text>
      </Flex>
    </Flex>
  )
}
