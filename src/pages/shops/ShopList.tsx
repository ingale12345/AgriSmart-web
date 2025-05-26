import { useEffect, useState } from "react";
import { getShops, addShop, deleteShop, updateShop } from "./api";
import type { Shop } from "./api";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ShopFormDialog } from "./ShopFormDialog";

export function ShopList() {
  const [data, setData] = useState<Shop[]>([]);

  const load = async () => setData(await getShops());
  useEffect(() => void load(), []);

  const handleCreate = async (shop: Omit<Shop, "id">) => {
    await addShop(shop);
    load();
  };

  const handleUpdate = async (updated: Shop) => {
    await updateShop(updated);
    load();
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure?")) {
      await deleteShop(id);
      load();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <ShopFormDialog onSubmit={handleCreate} />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((shop) => (
            <TableRow key={shop.id}>
              <TableCell>{shop.name}</TableCell>
              <TableCell>{shop.location}</TableCell>
              <TableCell className="text-right space-x-2">
                <ShopFormDialog
                  initial={shop}
                  onSubmit={(form) => handleUpdate({ ...shop, ...form })}
                />
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(shop.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
