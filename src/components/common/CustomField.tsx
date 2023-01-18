import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Switch,
    Textarea,
} from "@chakra-ui/react"
import { nanoid } from "nanoid"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { useState } from "react"
import { Controller } from "react-hook-form"

export interface CustomFieldProps {
    name: string
    label: string
    type?: string
    options?: any
    placeholder?: string
    control?: any
    register: any
    errors: any
    setValue?: any
    field?: any
    isDirty?: boolean
    description?: string
}

const Field = (props: CustomFieldProps) => {
    const { field } = props
    const [show, setShow] = useState(false)

    if (props.type === "select") {
        return (
            <Select
                {...field}
                placeholder={props.placeholder}
                borderColor={"gray.400"}
                _hover={{ borderColor: "pink.400" }}
                onChange={e => props.setValue(props.name, e.target.value, { shouldValidate: true })}>
                <option value="">Choose {props.label}</option>
                {props.options.map(({ value, label }: { value: string; label: string }) => {
                    return (
                        <option key={nanoid()} value={value}>
                            {label}
                        </option>
                    )
                })}
            </Select>
        )
    } else if (props.type === "password") {
        return (
            <InputGroup>
                <Input
                    {...field}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    borderColor={"gray.400"}
                    _hover={{ borderColor: "pink.400" }}
                />
                <InputRightElement width="4.5rem">
                    <Button variant="link" onClick={() => setShow(!show)}>
                        {show ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                </InputRightElement>
            </InputGroup>
        )
    } else if (props.type === "textarea") {
        return (
            <FormControl display="flex" alignItems="center">
                <Textarea {...field} borderColor={"gray.400"} _hover={{ borderColor: "pink.400" }} />
                <FormLabel color={"black"} htmlFor={props.name} mb={0}>
                    {props.description}
                </FormLabel>
            </FormControl>
        )
    } else if (props.type === "switch") {
        return (
            <FormControl display="flex" alignItems="center">
                <Switch {...field} pr={4} colorScheme="pink" />
                <FormLabel color={"black"} htmlFor={props.name} mb={0}>
                    {props.description}
                </FormLabel>
            </FormControl>
        )
    } else {
        return <Input {...field} type={props.type} borderColor={"gray.400"} _hover={{ borderColor: "pink.400" }} />
    }
}

const CustomField = (props: CustomFieldProps) => {
    return (
        <FormControl isInvalid={!!props.errors[props.name]} mb={6}>
            <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
            <Controller
                name={props.name}
                control={props.control}
                render={({ field, fieldState: { isDirty } }) => <Field {...props} field={field} isDirty={isDirty} />}
            />
            {props.errors[props.name] && <FormErrorMessage>{props.errors[props.name].message}</FormErrorMessage>}
        </FormControl>
    )
}

export default CustomField
