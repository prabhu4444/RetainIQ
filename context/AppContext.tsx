"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

interface AppContextType {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  tableColumns: {
    key: string;
    header: string;
  }[];
  setTableColumns: Dispatch<SetStateAction<{ key: string; header: string }[]>>;
  addNewVariantColumn: () => void;
  addNewProduct: () => void;
  deleteProduct: (id: string) => void;
  deleteVariantColumn: (key: string) => void;
}

export const AppContext = createContext({} as AppContextType);

const initialProducts = [
  {
    id: "1",
    product_filter: "design 1",
    primary_variant: "1",
    variant_2: "2",
    variant_3: "3",
    filters: [
      { field: "image_list.Product Image 2", operator: "is empty", value: "" },
      { field: "AND Discount Percentage", operator: "is", value: "0" },
    ],
  },
  {
    id: "2",
    product_filter: "design 2",
    primary_variant: "4",
    variant_2: "5",
    variant_3: "6",
    filters: [{ field: "tags", operator: "contains", value: "onsale" }],
  },
  {
    id: "3",
    product_filter: "design 3",
    primary_variant: "7",
    variant_2: "8",
    variant_3: "9",
    filters: [
      { field: "tags", operator: "contains", value: "__label:New" },
    ],
  },
  {
    id: "4",
    product_filter: "design 4",
    primary_variant: "10",
    variant_2: "11",
    variant_3: "12",
    filters: [{field: "Discount Percentage", operator: "is", value: "0"  }],
  },
  {
    id: "5",
    product_filter: "design 5",
    primary_variant: "13",
    variant_2: "14",
    variant_3: "15",
    filters: [{  field: "image_list.Product Image 2", operator: "is", value: "empty" }],
  },
] as unknown as Product[];

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const [tableColumns, setTableColumns] = useState<
    {
      key: string;
      header: string;
    }[]
  >([
    {
      key: "primary_variant",
      header: "Primary Variant",
    },
    {
      key: "variant_2",
      header: "Variant 2",
    },
    {
      key: "variant_3",
      header: "Variant 3",
    },
  ]);

  function addNewVariantColumn() {
    setTableColumns((columns) => [
      ...columns,
      {
        key: `variant_${uuidv4()}`,
        header: `Variant ${columns.length + 1}`,
      },
    ]);

    toast.success("Variant added");
  }

  function addNewProduct() {
    setProducts((products) => [
      ...products,
      {
        id: uuidv4(),
        filters: [],
        primary_variant: "",
        variant_2: "",
      } as unknown as Product,
    ]);

    toast.success("State added");
  }

  function deleteProduct(id: string) {
    setProducts((products) => products.filter((product) => product.id !== id));
    toast.success("State removed!");
  }

  function deleteVariantColumn(key: string) {
    setTableColumns((columns) =>
      columns.filter((column) => column.key !== key)
    );

    toast.success("Variant deleted");
  }

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        tableColumns,
        setTableColumns,
        addNewVariantColumn,
        addNewProduct,
        deleteProduct,
        deleteVariantColumn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
