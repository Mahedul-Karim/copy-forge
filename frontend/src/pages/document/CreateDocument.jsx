import Container from "@/components/common/Container";
import Contents from "@/components/documents/Contents";
import CreateForm from "@/components/documents/CreateForm";
import React from "react";

const CreateDocument = () => {
  return (
    <main className="py-8 md:py-16 bg-paper dark:bg-background">
      <Container className="bg-background dark:bg-paper px-4 rounded-xl grid sm:grid-cols-[200px_1fr] md:grid-cols-[250px_1fr] lg:grid-cols-[320px_1fr]">
        <CreateForm />
        <Contents />
      </Container>
    </main>
  );
};

export default CreateDocument;
