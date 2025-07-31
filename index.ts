export interface Image {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
  photographer: string;
}

export type ViewMode = 'grid' | 'masonry' | 'list';

export type Category = 'All' | 'Nature' | 'Urban' | 'Architecture' | 'Art' | 'Portrait';

export type Page = 'home' | 'collections' | 'artists' | 'explore';