export type EquipmentType = 'engine' | 'electric' | 'warehouse';

export interface Product {
  id: string;
  model: string;
  type: EquipmentType;
  capacity: string;
  description: string;
  imageUrl: string;
}

export const mockProducts: Product[] = [
  {
    id: 'th-eng-30',
    model: 'TH-Series 3.0T Diesel',
    type: 'engine',
    capacity: '3,000 kg',
    description: 'Rugged diesel forklift designed for heavy outdoor applications and lumber yards.',
    imageUrl: 'https://via.placeholder.com/600x400/1e3a8a/ffffff?text=Engine+Forklift+3.0T'
  },
  {
    id: 'th-ele-25',
    model: 'THE-Series 2.5T Li-ion',
    type: 'electric',
    capacity: '2,500 kg',
    description: 'Zero emission, low noise lithium-ion forklift perfect for food and indoor warehousing.',
    imageUrl: 'https://via.placeholder.com/600x400/1e40af/ffffff?text=Electric+Li-ion+2.5T'
  },
  {
    id: 'th-ele-15',
    model: 'THE-Series 1.5T Lead-Acid',
    type: 'electric',
    capacity: '1,500 kg',
    description: 'Cost-effective electric solution for light to medium indoor operations.',
    imageUrl: 'https://via.placeholder.com/600x400/2563eb/ffffff?text=Electric+Forklift+1.5T'
  },
  {
    id: 'th-wh-stacker',
    model: 'Electric Pallet Stacker 1.5T',
    type: 'warehouse',
    capacity: '1,500 kg',
    description: 'Narrow aisle electric stacker for maximum vertical storage efficiency.',
    imageUrl: 'https://via.placeholder.com/600x400/3b82f6/ffffff?text=Pallet+Stacker'
  },
  {
    id: 'th-eng-50',
    model: 'TH-Series 5.0T Heavy Duty',
    type: 'engine',
    capacity: '5,000 kg',
    description: 'High capacity IC engine forklift for demanding structural material transport.',
    imageUrl: 'https://via.placeholder.com/600x400/1e3a8a/ffffff?text=Heavy+Duty+5.0T'
  },
  {
    id: 'th-wh-reach',
    model: 'Reach Truck 2.0T',
    type: 'warehouse',
    capacity: '2,000 kg',
    description: 'High performance reach truck with advanced mast stability control.',
    imageUrl: 'https://via.placeholder.com/600x400/3b82f6/ffffff?text=Reach+Truck'
  }
];
