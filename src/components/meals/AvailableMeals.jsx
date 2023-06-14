import Card from '../common/Card'
import MealItem from './meal-item/MealItem'
import classes from './AvailableMeals.module.css'
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Toppoki',
    description: 'Spicy rice cakes with tofu',
    price: 80.0,
  },
  {
    id: 'm2',
    name: 'Ramyeon',
    description: 'Spicy noodles with veggies',
    price: 100.0,
  },
  {
    id: 'm3',
    name: 'Gnocci',
    description: 'Potato cakes with cheesy-tomato sauce',
    price: 70.5,
  },
  {
    id: 'm4',
    name: 'Agedashi Dofu',
    description: 'Fried tofu in ponzu sauce',
    price: 60.9,
  },
]

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} item={meal} />
  ))
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
