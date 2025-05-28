import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash, Pencil } from "lucide-react";
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
  const [open, setOpen] = useState(false);
  const [editingShop, setEditingShop] = useState<Shop | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (editingShop) {
      setShops((prev) =>
        prev.map((shop) =>
          shop._id === editingShop._id
            ? { ...editingShop, imageUrl: previewUrl || editingShop.imageUrl }
            : shop
        )
      );
    } else {
      setShops((prev) => [
        ...prev,
        {
          _id: uuidv4(),
          ...formState,
          imageUrl: previewUrl || "https://via.placeholder.com/80",
        },
      ]);
    }
    setOpen(false);
    setEditingShop(null);
    setFormState({
      name: "",
      ownerName: "",
      contact: "",
      email: "",
      address: "",
    });
    setPreviewUrl(null);
  };

  const handleDelete = (id: string) => {
    setShops((prev) => prev.filter((shop) => shop._id !== id));
  };

  const [formState, setFormState] = useState<Omit<Shop, "_id">>({
    name: "",
    ownerName: "",
    contact: "",
    email: "",
    address: "",
  });

  const openEditor = (shop?: Shop) => {
    setEditingShop(shop || null);
    setFormState(
      shop || {
        name: "",
        ownerName: "",
        contact: "",
        email: "",
        address: "",
      }
    );
    setPreviewUrl(shop?.imageUrl || null);
    setOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        {/* <h2 className="text-xl font-semibold">Shops</h2> */}
        <Button variant="secondary" onClick={() => openEditor()}>
          <Plus className="mr-2" size={16} /> Add Shop
        </Button>
      </div>
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
              <Button
                size="sm"
                variant="outline"
                onClick={() => openEditor(shop)}
              >
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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{editingShop ? "Edit Shop" : "Add Shop"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Owner Name</Label>
              <Input
                value={formState.ownerName}
                onChange={(e) =>
                  setFormState({ ...formState, ownerName: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Contact</Label>
              <Input
                value={formState.contact || ""}
                onChange={(e) =>
                  setFormState({ ...formState, contact: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                value={formState.email || ""}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Address</Label>
              <Textarea
                value={formState.address || ""}
                onChange={(e) =>
                  setFormState({ ...formState, address: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Image</Label>
              <Input type="file" accept="image/*" onChange={handleFileChange} />
              {previewUrl && (
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full h-32 object-cover rounded-xl mt-2"
                />
              )}
            </div>
            <Button onClick={handleSave} className="w-full">
              {editingShop ? "Update" : "Create"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
