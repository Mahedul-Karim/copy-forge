import React from "react";
import Container from "../../../components/common/Container";
import { useParams } from "react-router";
import { useData } from "@/hooks/useData";
import Loader from "@/components/common/loader/Loader";
import Empty from "@/components/common/Empty";
import EditForm from "@/components/documents/EditForm";

const EditDocument = () => {
  const { documentId } = useParams();

  const { data, isPending, error } = useData({
    queryKey: [`document-${documentId}`, documentId],
    endpoint: `contents/${documentId}`,
  });

  return (
    <main className="bg-paper dark:bg-background py-8 md:py-16">
      <Container className="p-6 bg-background dark:bg-paper rounded-lg">
        {isPending && (
          <div className="h-[250px] xs:h-[500px] flex items-center justify-center order-1 xs:order-2">
            <Loader />
          </div>
        )}
        {error && !isPending && <Empty title={error.message} />}
        {!isPending && data?.content && (
          <EditForm content={data?.content} id={documentId} />
        )}
      </Container>
    </main>
  );
};

export default EditDocument;
