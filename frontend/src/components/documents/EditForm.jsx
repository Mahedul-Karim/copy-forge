import React, { useState, useRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { Editor } from "@tinymce/tinymce-react";
import { useServer } from "@/hooks/useServer";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";

const EditForm = ({ content, id }) => {
  const [topic, setTopic] = useState(content?.topic || "");
  const [document, setDocument] = useState(content?.document || "");

  const queryClient = useQueryClient();

  const editorRef = useRef(null);

  const { mutate, isPending } = useServer({
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.refetchQueries({ queryKey: [`document-${id}`] });
    },
    onError: (err) => toast.error(err.message),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: "PATCH",
      data: {
        topic,
        document,
      },
    };

    mutate({ endpoint: `contents/${id}`, options });
  };

  return (
    <section>
      <h2 className="text-text-primary font-semibold text-lg xs:text-xl">
        {content?.topic}
      </h2>
      <hr className="my-6 border-border" />
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label className="text-text-secondary font-semibold">Topic:</Label>
          <Input
            type="text"
            className=" text-sm bg-background  text-text-primary placeholder:text-text-secondary/60 shadow-none"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div>
          <Editor
            apiKey={import.meta.env.VITE_EDITOR_API_KEY}
            onInit={(evt, editor) => (editorRef.current = editor)}
            value={document}
            onEditorChange={setDocument}
            init={{
              height: 500,
              menubar: false,
              plugins: ["link", "lists", "code"],
              toolbar:
                "undo redo | formatselect | bold italic underline | alignleft aligncenter alignright | bullist numlist outdent indent | link code",
            }}
          />
        </div>
        <Button className="font-semibold" disabled={isPending}>
          {isPending && <Loader className="animate-spin" />}
          Update Document
        </Button>
      </form>
    </section>
  );
};

export default EditForm;
