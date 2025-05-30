import { Button, buttonVariants } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router";

import { Pencil, Trash, ArrowDown, Layers } from "lucide-react";

import { formateDate } from "@/lib/utils";
import DataTable from "@/components/common/data/DataTable";

const columns = [
  {
    accessorKey: "topic",
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
      const value = row.getValue("topic");
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

const RecentDocuments = ({ contents }) => {
  return (
    <section className="order-2 xs:order-3">
      <div className="flex items-center justify-between">
        <h3 className="xs:text-lg font-bold text-text-primary">
          Recent Documents
        </h3>
        <Link
          to="/user/documents"
          className={buttonVariants({ variant: "ghost" })}
        >
          View All
        </Link>
      </div>
      <DataTable data={contents} columns={columns} />
    </section>
  );
};

export default RecentDocuments;
