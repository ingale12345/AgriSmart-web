import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash, Pencil } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

interface Shop {
  _id: string;
  name: string;
  ownerName: string;
  contact?: string;
  email?: string;
  address?: string;
  imageUrl?: string;
}

export function Shops() {
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    // Replace with API call
    const mockShops: Shop[] = [
      {
        _id: uuidv4(),
        name: "Green Agri Center",
        ownerName: "Raj Patel",
        contact: "9876543210",
        email: "raj@greenagri.com",
        address: "Village Road, Pune",
        imageUrl:
          "https://www.kissanagrimall.com/wp-content/uploads/2022/06/Aboutus-e1655798681907.png",
      },
      {
        _id: uuidv4(),
        name: "Green Agri Center",
        ownerName: "Raj Patel",
        contact: "9876543210",
        email: "raj@greenagri.com",
        address: "Village Road, Pune",
        imageUrl:
          "https://www.kissanagrimall.com/wp-content/uploads/2022/06/Aboutus-e1655798681907.png",
      },
      {
        _id: uuidv4(),
        name: "Green Agri Center",
        ownerName: "Raj Patel",
        contact: "9876543210",
        email: "raj@greenagri.com",
        address: "Village Road, Pune",
        imageUrl:
          "https://www.kissanagrimall.com/wp-content/uploads/2022/06/Aboutus-e1655798681907.png",
      },
      {
        _id: uuidv4(),
        name: "Green Agri Center",
        ownerName: "Raj Patel",
        contact: "9876543210",
        email: "raj@greenagri.com",
        address: "Village Road, Pune",
        imageUrl:
          "https://www.kissanagrimall.com/wp-content/uploads/2022/06/Aboutus-e1655798681907.png",
      },
      {
        _id: uuidv4(),
        name: "Green Agri Center",
        ownerName: "Raj Patel",
        contact: "9876543210",
        email: "raj@greenagri.com",
        address: "Village Road, Pune",
        imageUrl:
          "https://www.kissanagrimall.com/wp-content/uploads/2022/06/Aboutus-e1655798681907.png",
      },
    ];
    setShops(mockShops);
  }, []);

  const handleDelete = (id: string) => {
    setShops((prev) => prev.filter((shop) => shop._id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shops.map((shop) => (
          <div
            key={shop._id}
            className="border rounded-2xl p-4 bg-white shadow space-y-2"
          >
            {shop.imageUrl && (
              <img
                src={shop.imageUrl}
                alt="Shop"
                className="w-full h-32 object-cover rounded-xl"
              />
            )}
            <div className="text-lg font-bold">{shop.name}</div>
            <div>Owner: {shop.ownerName}</div>
            <div>Contact: {shop.contact}</div>
            <div className="flex space-x-2 mt-2">
              <Button size="sm" variant="outline" onClick={() => {}}>
                <Pencil size={16} />
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => handleDelete(shop._id)}
              >
                <Trash size={16} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
