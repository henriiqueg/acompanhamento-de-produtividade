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
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';

const AddMember: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddMember = (values) => {
    console.log(values);
  };

  return (
    <div
      className="w-42 bg-white rounded-xl
                flex items-center justify-center font-semibold
                text-center italic"
    >
      <button
        type="button"
        className="w-full flex items-center justify-center px-10 py-4 text-lg text-black font-semibold"
        onClick={onOpen}
      >
        Adicionar Membro
      </button>
      <Modal isOpen={isOpen} onClose={onClose} colorScheme="pink" isCentered>
        <ModalOverlay />
        <ModalContent>
          <Formik
            initialValues={{
              name: '',
            }}
            onSubmit={handleAddMember}
          >
            {() => (
              <Form>
                <ModalHeader>Adicionar Membro</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Field name="name">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel htmlFor="name">Nome</FormLabel>
                        <Input
                          {...field}
                          id="name"
                          placeholder="Nome do membro"
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </ModalBody>

                <ModalFooter>
                  <Button mr={3} variant="ghost" onClick={onClose}>
                    Cancelar
                  </Button>
                  <Button colorScheme="pink" type="submit">
                    Adicionar
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

export default AddMember;
