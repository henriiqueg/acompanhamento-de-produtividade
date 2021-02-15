import { NextPage } from 'next';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';

import DatePicker from 'components/inputs/date-picker';

const DailyUpdate: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDailyUpdate = (values) => {
    console.log(values);
  };

  return (
    <div
      className="w-42 bg-pink-600 rounded-xl
                flex items-center justify-center font-semibold
                text-center italic"
    >
      <button
        type="button"
        className="w-full flex items-center justify-center px-10 py-4 text-lg text-white font-semibold"
        onClick={onOpen}
      >
        Daily Update
      </button>
      <Modal isOpen={isOpen} onClose={onClose} colorScheme="pink" isCentered>
        <ModalOverlay />
        <ModalContent>
          <Formik
            initialValues={{
              member: undefined,
              task: undefined,
              date: new Date(),
              workedTime: 0,
            }}
            onSubmit={handleDailyUpdate}
          >
            {() => (
              <Form>
                <ModalHeader>Daily Update</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Field name="member">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.member && form.touched.member}
                      >
                        <FormLabel htmlFor="name">Membro</FormLabel>
                        <Select {...field} placeholder="Selecione um membro">
                          <option>Henrique</option>
                        </Select>
                        <FormErrorMessage>
                          {form.errors.member}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="task">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.task && form.touched.task}
                        mt={5}
                      >
                        <FormLabel htmlFor="task">Task</FormLabel>
                        <Select {...field} placeholder="Selecione uma task">
                          <option>Implementar Dashboard</option>
                        </Select>
                        <FormErrorMessage>{form.errors.task}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="date">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.date && form.touched.date}
                        mt={5}
                      >
                        <FormLabel htmlFor="date">Data</FormLabel>
                        <DatePicker
                          {...field}
                          name="date"
                          selectedDate={form.values.date || null}
                          onChange={(d: Date) => form.setFieldValue('date', d)}
                          onSelect={(d: Date) => form.setFieldValue('date', d)}
                          showPopperArrow
                        />
                        <FormErrorMessage>{form.errors.date}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="workedTime">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.workedTime && form.touched.workedTime
                        }
                        mt={5}
                      >
                        <FormLabel htmlFor="workedTime">
                          Horas trabalhadas
                        </FormLabel>
                        <NumberInput
                          {...field}
                          onChange={(number: number) =>
                            form.setFieldValue(field.name, number)
                          }
                        >
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                        <FormErrorMessage>
                          {form.errors.workedTime}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </ModalBody>

                <ModalFooter>
                  <Button mr={3} variant="ghost" onClick={onClose}>
                    Cancelar
                  </Button>
                  <Button colorScheme="pink" type="submit">
                    Enviar
                  </Button>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DailyUpdate;
