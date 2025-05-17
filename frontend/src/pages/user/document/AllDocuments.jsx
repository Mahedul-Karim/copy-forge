import Container from "@/components/common/Container";
import DataTable from "@/components/common/data/DataTable";
import { Button } from "@/components/ui/button";
import { formateDate } from "@/lib/utils";
import { ArrowDown, Layers, Pencil, Trash } from "lucide-react";
import React from "react";

const data = [
  {
    name: "10 useEffect uses",
    createdAt: new Date(Date.now() * Math.round(Math.random() * 5)),
  },
  {
    name: "10 usefull react hooks uses",
    createdAt: new Date(Date.now() * Math.round(Math.random() * 5)),
  },
];

const columns = [
  {
    accessorKey: "name",
    enableSorting: true,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-text-primary dark:text-text-primary font-bold has-[>svg]:px-0"
        >
          Document <ArrowDown />{" "}
        </Button>
      );
    },
    cell: ({ row }) => {
      const value = row.getValue("name");
      return (
        <p className="font-semibold flex items-center gap-3">
          <Layers className="size-5 text-primary" />
          {value}
        </p>
      );
    },
  },
  {
    accessorKey: "createdAt",
    enableSorting: true,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-text-primary dark:text-text-primary font-bold has-[>svg]:px-0"
        >
          Created At <ArrowDown />{" "}
        </Button>
      );
    },
    cell: ({ row }) => {
      const dateValue = row.getValue("createdAt");
      const formattedDate = formateDate(dateValue);

      return <p className="text-text-secondary">{formattedDate}</p>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const data = row.original;

      return (
        <div className="flex justify-center items-center">
          <Button variant="ghost" onClick={() => console.log(data)}>
            <Pencil />
          </Button>
          <Button variant="ghost">
            <Trash />
          </Button>
        </div>
      );
    },
    size: 80,
    maxSize: 80,
    minSize: 80,
  },
];

const AllDocuments = () => {
  return (
    <main className="bg-paper dark:bg-background">
      <Container className="py-8 md:py-16">
        <section className="p-6 rounded-xl bg-background dark:bg-paper">
          <h3 className="xs:text-lg font-bold text-text-primary">All Documents</h3>
          <DataTable data={data} columns={columns} />
        </section>
      </Container>
    </main>
  );
};

export default AllDocuments;
