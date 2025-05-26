export type Shop = {
  id: number;
  name: string;
  location: string;
};

let shops: Shop[] = [
  { id: 1, name: "Green Mart", location: "Pune" },
  { id: 2, name: "Agro World", location: "Nashik" },
];

export const getShops = async () => shops;

export const addShop = async (shop: Omit<Shop, "id">) => {
  const newShop = { id: Date.now(), ...shop };
  shops.push(newShop);
  return newShop;
};

export const updateShop = async (shop: Shop) => {
  shops = shops.map((s) => (s.id === shop.id ? shop : s));
  return shop;
};

export const deleteShop = async (id: number) => {
  shops = shops.filter((s) => s.id !== id);
};
