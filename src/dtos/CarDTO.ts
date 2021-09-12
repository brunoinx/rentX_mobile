type RentProps = {
  period: string;
  price: number;
};

type AcessoryProps = {
  type: string;
  name: string;
};

export type CarProps = {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: RentProps;
  fuel_type: string;
  accessories: AcessoryProps[];
  photos: string[];
  thumbnail: string;
};
