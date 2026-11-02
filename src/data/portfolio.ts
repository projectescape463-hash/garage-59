import { IMG } from './images'

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
    image: IMG.gallery[0],
    wide: true,
  },
  {
    id: 'p2',
    title: 'Работа с подвеской',
    caption: 'Концепт · демо-фото',
    image: IMG.gallery[1],
  },
  {
    id: 'p3',
    title: 'Сервисный бокс',
    caption: 'Концепт · демо-фото',
    image: IMG.gallery[2],
  },
  {
    id: 'p4',
    title: 'Детали и инструмент',
    caption: 'Концепт · демо-фото',
    image: IMG.gallery[3],
  },
  {
    id: 'p5',
    title: 'После обслуживания',
    caption: 'Концепт · демо-фото',
    image: IMG.gallery[4],
    wide: true,
  },
]
