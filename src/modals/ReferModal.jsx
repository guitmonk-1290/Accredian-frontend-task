'use client'

import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Button,
    FormErrorMessage,
} from '@chakra-ui/react'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    email: z.string().email('Invalid email address').trim(),
    text: z.string().min(1, 'Text field cannot be empty'),
    ref_email: z.string().email('Invalid email address').trim(),
})

const ReferModal = ({ isOpen, onClose }) => {

    const [isLoading, setLoading] = useState(false);
    const emailRef = useRef(null);
    const textRef = useRef(null);
    const refemailRef = useRef(null);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    })

    const onSubmit = async (data) => {
        // Handle form submission with validated data here
        setLoading(true)
        console.log('Submitted data:', data)
        const res = await fetch("http://localhost:5000/submit-referral", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: data.email, text: data.text, ref_email: data.ref_email }),
        })
        console.log(res)
        emailRef.current.value = ""
        textRef.current.value = ""
        refemailRef.current.value = ""
        setLoading(false)
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent maxW="56rem" w={{ sm: '46rem', md: '36rem' }} width='100%'>
                <ModalHeader textAlign='center'>Referral Form</ModalHeader>
                <ModalCloseButton />
                <ModalBody
                    display='flex'
                    flexDirection='column'
                    position='relative'
                    justifyContent='center'
                    pb={6}
                >
                    <div className='flex flex-row gap-4 mt-4'>
                        {/* Image container */}
                        <form onSubmit={handleSubmit(onSubmit)} className='w-[100%]'>
                            <FormControl>
                                <FormLabel htmlFor="email" className='text-[12px]'>Your Email</FormLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    width="100%"
                                    fontSize='10pt'
                                    fontWeight='bold'
                                    ref={emailRef}
                                    _placeholder={{ colors: 'gray.500' }}
                                    _hover={{
                                        bg: 'white',
                                        border: '1px solid',
                                        borderColor: 'blue.500'
                                    }}
                                    _focus={{
                                        outline: 'none',
                                        bg: 'white',
                                        border: '1px solid',
                                        borderColor: 'blue.500'
                                    }}
                                    bg='gray.50'
                                    placeholder="Enter your email"
                                    required
                                    {...register('email')}
                                />
                                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel htmlFor="text" fontSize='12pt'>Referral Message</FormLabel>
                                <Input id="text" ref={textRef} fontSize='10pt' placeholder="Enter some text" {...register('text')} />
                                <FormErrorMessage>{errors.text?.message}</FormErrorMessage>
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel htmlFor="email" className='text-xsm'>Referral Email</FormLabel>
                                <Input
                                    id="ref_email"
                                    type="email"
                                    width="100%"
                                    fontSize='10pt'
                                    fontWeight='bold'
                                    ref={refemailRef}
                                    _placeholder={{ colors: 'gray.500' }}
                                    _hover={{
                                        bg: 'white',
                                        border: '1px solid',
                                        borderColor: 'blue.500'
                                    }}
                                    _focus={{
                                        outline: 'none',
                                        bg: 'white',
                                        border: '1px solid',
                                        borderColor: 'blue.500'
                                    }}
                                    bg='gray.50'
                                    mb={4}
                                    required
                                    placeholder="Enter the referral's email"
                                    {...register('ref_email')}
                                />
                                <FormErrorMessage>{errors.ref_email?.message}</FormErrorMessage>
                            </FormControl>

                            <Button type="submit" mt={4} colorScheme="blue">
                                {isLoading ? "..." : "Refer"}
                            </Button>
                        </form>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ReferModal