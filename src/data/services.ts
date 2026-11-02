export type ServiceItem = {
  id: string
  title: string
  description: string
  /** Демонстрационная цена — замените на актуальную */
  priceFrom: string
  featured?: boolean
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'diagnostics',
    title: 'Компьютерная диагностика',
    description:
      'Сканирование электронных блоков, чтение ошибок и первичная оценка неисправностей.',
    priceFrom: 'от 1 500 ₽',
    featured: true,
  },
  {
    id: 'engine',
    title: 'Ремонт двигателя',
    description: 'Капитальный и текущий ремонт, замена компонентов ГРМ и навесного оборудования.',
    priceFrom: 'от 8 000 ₽',
  },
  {
    id: 'suspension',
    title: 'Ремонт ходовой части',
    description: 'Стойки, рычаги, сайлентблоки, развал-схождение после работ.',
    priceFrom: 'от 2 500 ₽',
  },
  {
    id: 'brakes',
    title: 'Тормозная система',
    description: 'Колодки, диски, суппорты, прокачка и проверка эффективности торможения.',
    priceFrom: 'от 1 800 ₽',
  },
  {
    id: 'fluids',
    title: 'Масло и технические жидкости',
    description: 'Замена масла двигателя, фильтров, охлаждающей и тормозной жидкости.',
    priceFrom: 'от 900 ₽',
  },
  {
    id: 'maintenance',
    title: 'Техническое обслуживание',
    description: 'Регламентные работы по пробегу: осмотр, замена расходников, контрольный лист.',
    priceFrom: 'от 3 500 ₽',
  },
]
