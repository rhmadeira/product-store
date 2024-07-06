export interface IProduct {
  id: string;
  title: string;
}

export type TProductPayload = Omit<IProduct, 'id'>;
