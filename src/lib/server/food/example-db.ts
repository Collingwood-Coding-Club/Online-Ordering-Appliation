import type { Food } from "$lib/food/common";
//Just example DB
let foodDb = [
    {
        name: "Apple",
        calories: 95,
        price: "$0.99"
    },
    {
        name: "Banana",
        calories: 105,
        price: "$0.59"
    },
    {
        name: "Orange",
        calories: 45,
        price: "$0.79"
    },
    {
        name: "Pear",
        calories: 102,
        price: "$0.89"
    },
    {
        name: "Pineapple",
        calories: 452,
        price: "$1.99"
    },
    {
        name: "Watermelon",
        calories: 200,
        price: "$2.99"
    },
    {
        name: "Grapes",
        calories: 62,
        price: "$1.99"
    },
    {
        name: "Strawberries",
        calories: 32,
        price: "$1.99"
    },
    {
        name: "Blueberries",
        calories: 57,
        price: "$1.99"
    },
    {
        name: "Raspberries",
        calories: 65,
        price: "$1.99"
    },
    {
        name: "Blackberries",
        calories: 62,
        price: "$1.99"
    },
    {
        name: "Cherries",
        calories: 77,
        price: "$1.99"
    },
    {
        name: "Peaches",
        calories: 59,
        price: "$1.99"
    },
    {
        name: "Plums",
        calories: 76,
        price: "$1.99"
    },
    {
        name: "Mango",
        calories: 135,
        price: "$1.99"
    },
    {
        name: "Papaya",
        calories: 120,
        price: "$1.99"
    },
    {
        name: "Cantaloupe",
        calories: 188,
        price: "$1.99"
    },
    {
        name: "Honeydew",
        calories: 61,
        price: "$1.99"
    },
    {
        name: "Kiwi",
        calories: 42,
        price: "$1.99"
    },
    {
        name: "Lemon",
        calories: 17,
        price: "$1.99"
    },
    {
        name: "Pizza",
        calories: 285,
        price: "$1.99"
    },
    {
        name: "Cheeseburger",
        calories: 300,
        price: "$1.99"
    },
    {
        name: "Hot Dog",
        calories: 151,
        price: "$1.99"
    },
    {
        name: "Taco",
        calories: 226,
        price: "$1.99"
    },
    {
        name: "Burrito",
        calories: 294,
        price: "$1.99"
    },
    {
        name: "Sushi",
        calories: 133,
        price: "$1.99"
    },
    {
        name: "Steak",
        calories: 679,
        price: "$1.99"
    },
    {
        name: "Chicken",
        calories: 335,
        price: "$1.99"
    },
    {
        name: "Pork",
        calories: 312,
        price: "$1.99"
    },
    {
        name: "Bacon",
        calories: 43,
        price: "$1.99"
    },
    {
        name: "Eggs",
        calories: 155,
        price: "$1.99"
    },
    {
        name: "Salmon",
        calories: 412,
        price: "$1.99"
    },
    {
        name: "Tuna",
        calories: 179,
        price: "$1.99"
    },
    {
        name: "Shrimp",
        calories: 84,
        price: "$1.99"
    },
    {
        name: "Lobster",
        calories: 129,
        price: "$1.99"
    },
    {
        name: "Crab",
        calories: 87,
        price: "$1.99"
    },
    {
        name: "Oysters",
        calories: 57,
        price: "$1.99"
    },
    {
        name: "Clams",
        calories: 126,
        price: "$1.99"
    },
    {
        name: "Mussels",
        calories: 172,
        price: "$1.99"
    },
    {
        name: "Scallops",
        calories: 89,
        price: "$1.99"
    },
    {
        name: "Peanuts",
        calories: 828,
        price: "$1"
    }
]

namespace Database {
    export async function getAll(): Promise<Food[]> {
        return foodDb;
    }

    export async function get(name: string): Promise<Food> {
        let existingFood = foodDb.find(f => f.name === name);
        if (existingFood) {
            return existingFood;
        } else {
            throw new Error("Food not found");
        }
    }

    export async function add(food: Food): Promise<Food> {
        let existingFood = foodDb.find(f => f.name === food.name);
        if (existingFood) {
            throw new Error("Food already exists");
        } else {
            foodDb.push(food);
            return food;
        }
    }

    export async function update(food: Food): Promise<Food> {
        let existingFood = foodDb.find(f => f.name === food.name);
        if (existingFood) {
            existingFood.calories = food.calories;
            existingFood.price = food.price;
            return existingFood;
        } else {
            throw new Error("Food not found");
        }
    }

    export async function remove(name: string): Promise<Food> {
        let existingFood = foodDb.find(f => f.name === name);
        if (existingFood) {
            foodDb = foodDb.filter(f => f.name !== name);
            return existingFood;
        } else {
            throw new Error("Food not found");
        }
    }
}

export default Database;
