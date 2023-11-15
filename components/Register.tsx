"use client";
import React from "react";
import { Modal, ModalContent, Button, useDisclosure } from "@nextui-org/react";
import RegForm from "@/components/RegisterForm";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        size="sm"
        variant="flat"
        onPress={onOpen}
        className="bg-white text-[1.4rem]"
      >
        <AiOutlineUserAdd />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <RegForm />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
