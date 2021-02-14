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

const AddProject: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddProject = (values) => {
    console.log(values.name);
  };

  return (
    <div
      className="w-36 h-36 bg-pink-600 rounded-3xl
                flex items-stretch justify-center font-semibold
                text-xl text-center italic"
    >
      <button
        type="button"
        className="w-full flex items-center justify-center p-6 text-6xl text-white font-black"
        onClick={onOpen}
      >
        +
      </button>
      <Modal isOpen={isOpen} onClose={onClose} colorScheme="pink" isCentered>
        <ModalOverlay />
        <ModalContent>
          <Formik
            initialValues={{
              name: '',
            }}
            onSubmit={handleAddProject}
          >
            {() => (
              <Form>
                <ModalHeader>Adicionar Projeto</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Field name="name">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel htmlFor="name">Nome</FormLabel>
                        <Input {...field} id="name" placeholder="name" />
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
                    Criar
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

export default AddProject;
