import React, { useReducer, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Check, ChevronsUpDown, Loader, X } from "lucide-react";
import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { languages } from "@/lib/utils/data";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/useToast";
import { useDispatch } from "react-redux";
import { useServer } from "@/hooks/useServer";
import { setDocument } from "@/store/slice/content";

const Icon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-7"
    >
      <path
        className="fill-[#FFD65A]"
        d="M13.7087 3.30729C12.6049 2.90591 11.395 2.90591 10.2913 3.30729L3.24266 5.87042C1.48732 6.50872 1.4873 8.99128 3.24266 9.62959L10.2913 12.1927C11.395 12.5941 12.6049 12.5941 13.7087 12.1927L20.7573 9.62959C22.5126 8.99128 22.5126 6.50873 20.7573 5.87042L13.7087 3.30729Z"
      />
      <path
        className="fill-[#e6bd4d]"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.05781 12.395C2.24283 11.8746 2.81467 11.6028 3.33504 11.7878L11.33 14.6304C11.7634 14.7845 12.2367 14.7845 12.67 14.6304L20.665 11.7878C21.1854 11.6028 21.7572 11.8746 21.9422 12.395C22.1273 12.9154 21.8554 13.4872 21.335 13.6722L13.3401 16.5149C12.4733 16.8231 11.5268 16.8231 10.66 16.5149L2.66502 13.6722C2.14465 13.4872 1.87279 12.9154 2.05781 12.395Z"
      />
      <path
        className="fill-[#FFD65A]"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.05781 16.645C2.24283 16.1246 2.81467 15.8528 3.33504 16.0378L11.33 18.8804C11.7634 19.0345 12.2367 19.0345 12.67 18.8804L20.665 16.0378C21.1854 15.8528 21.7572 16.1246 21.9422 16.645C22.1273 17.1654 21.8554 17.7372 21.335 17.9222L13.3401 20.7649C12.4733 21.0731 11.5268 21.0731 10.66 20.7649L2.66502 17.9222C2.14465 17.7372 1.87279 17.1654 2.05781 16.645Z"
      />
    </svg>
  );
};

const reducer = (state, action) => {
  if (action.field) {
    return {
      ...state,
      [action.field]: action.value,
    };
  }

  return state;
};

const initialState = {
  topic: "",
  keywords: [],
  language: "English",
  writingStyle: "Professional",
};

const CreateForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { topic, keywords, language, writingStyle } = state;

  const [keyword, setKeyword] = useState("");
  const [open, setOpen] = useState(false);

  const { warning, error } = useToast();

  const reduxDispatch = useDispatch();

  const { mutate, isPending } = useServer({
    onSuccess: (data) => {
      reduxDispatch(setDocument({ document: data?.content?.document }));

      if (data?.message) {
        warning(data?.message);
      }
    },
    onError: (err) => {
      error(err.message);
    },
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch({ field: "keywords", value: [...keywords, keyword] });
      setKeyword("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      data: state,
    };

    mutate({
      endpoint: "contents/generate",
      options,
    });
  };

  return (
    <aside className="py-4 pr-4 border-t sm:border-t-0 sm:border-r border-border order-2 sm:order-1">
      <h3 className="flex items-center gap-2 text-lg font-semibold text-text-primary">
        <Icon />
        Create Content
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div className="space-y-2">
          <Label className="text-text-secondary font-semibold">Topic</Label>
          <Input
            type="text"
            className=" text-sm bg-background  text-text-primary placeholder:text-text-secondary/60 shadow-none"
            placeholder="10 useEffect uses in react"
            value={topic}
            onChange={(e) =>
              dispatch({ field: "topic", value: e.target.value })
            }
            disabled={isPending}
          />
        </div>
        <div className="space-y-2">
          <Label className="text-text-secondary font-semibold">Keywords</Label>
          <Input
            type="text"
            className="text-sm bg-background  text-text-primary placeholder:text-text-secondary/60 shadow-none"
            placeholder="react"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isPending}
          />
          <div className="flex items-center gap-2 flex-wrap">
            {keywords.length > 0 &&
              keywords.map((word, i) => (
                <Badge
                  key={i}
                  className="rounded-full bg-blue-100 text-blue-700 flex items-center justify-between gap-2"
                >
                  {word}{" "}
                  <Button
                    variant={"ghost"}
                    className={"h-auto px-0 has-[>svg]:px-0 py-0 text-blue-700"}
                    type="button"
                    onClick={() => {
                      const newKeywords = [...keywords].filter(
                        (_, index) => index !== i
                      );

                      dispatch({ field: "keywords", value: newKeywords });
                    }}
                  >
                    <X />
                  </Button>
                </Badge>
              ))}
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-text-secondary font-semibold">Language</Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                className="justify-between w-full text-sm bg-background dark:bg-input/30 transition-none text-text-primary"
              >
                {language}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="border-border bg-background dark:bg-paper hideScrollbar">
              <Command className="hideScrollbar">
                <CommandInput placeholder="Search language..." />
                <CommandList>
                  <CommandEmpty>No language found.</CommandEmpty>
                  <CommandGroup className="bg-background dark:bg-paper hideScrollbar">
                    {languages.map((lang) => (
                      <CommandItem
                        key={lang}
                        value={lang}
                        onSelect={(currentValue) => {
                          dispatch({ field: "language", value: currentValue });
                          setOpen(false);
                        }}
                        className="cursor-pointer"
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            language === lang ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {lang}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label className="text-text-secondary font-semibold">
            Writing Style
          </Label>
          <Select
            value={writingStyle}
            onValueChange={(val) =>
              dispatch({ field: "writingStyle", value: val })
            }
            disabled={isPending}
          >
            <SelectTrigger className="w-full cursor-pointer text-text-primary font-medium shadow-none">
              <SelectValue placeholder="Select a writing style" />
            </SelectTrigger>
            <SelectContent className="border-border bg-background dark:bg-paper">
              <SelectItem value="Professional">Professional</SelectItem>
              <SelectItem value="Casual">Casual</SelectItem>
              <SelectItem value="Funny">Funny</SelectItem>
              <SelectItem value="Sarcastic">Sarcastic</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full font-semibold" disabled={isPending}>
          {" "}
          {isPending && <Loader className="animate-spin" />} Generate
        </Button>
      </form>
    </aside>
  );
};

export default CreateForm;
