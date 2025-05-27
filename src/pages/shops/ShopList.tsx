import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetProducts } from "@/api/products/product.hook";

export function ShopList() {
  const { data } = useGetProducts();

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        {/* <ShopFormDialog onSubmit={handleCreate} /> */}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Ttitle</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>discountPercentage</TableHead>
            <TableHead>description</TableHead>
            <TableHead>price</TableHead>
            <TableHead>rating</TableHead>

            {/* <TableHead className="text-right">Actions</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.products.map((product: any) => (
            <TableRow key={product.id}>
              <TableCell className="py-2">{product.title}</TableCell>
              <TableCell className="py-2">{product.brand}</TableCell>
              <TableCell className="py-2">{product.category}</TableCell>
              <TableCell className="py-2">
                {product.discountPercentage}
              </TableCell>
              <TableCell className="py-2">{product.description}</TableCell>
              <TableCell className="py-2">{product.price}</TableCell>
              <TableCell className="py-2">{product.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
