/** Демонстрационная галерея — фото для концепта, не подтверждённые кейсы клиентов */
export type PortfolioItem = {
  id: string
  title: string
  caption: string
  image: string
  wide?: boolean
}

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Диагностика силового агрегата',
    caption: 'Концепт · демо-фото',
    image:
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80&auto=format&fit=crop',
    wide: true,
  },
  {
    id: 'p2',
    title: 'Работа с подвеской',
    caption: 'Концепт · демо-фото',
    image:
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80&auto=format&fit=crop&crop=entropy',
  },
  {
    id: 'p3',
    title: 'Сервисный бокс',
    caption: 'Концепт · демо-фото',
    image:
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'p4',
    title: 'Детали и инструмент',
    caption: 'Концепт · демо-фото',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'p5',
    title: 'После обслуживания',
    caption: 'Концепт · демо-фото',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80&auto=format&fit=crop',
    wide: true,
  },
]
