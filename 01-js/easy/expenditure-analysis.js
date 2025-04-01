/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    const categoryMap = new Map();

    transactions.forEach(({ category, price }) => {
        categoryMap.set(category, (categoryMap.get(category) || 0) + price);
    });

    return Array.from(categoryMap, ([category, totalSpent]) => ({ category, totalSpent }));
}

// Example usage:
const transactions = [
    { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
    { id: 2, timestamp: 1656076900000, price: 20, category: 'Food', itemName: 'Burger' },
    { id: 3, timestamp: 1656077000000, price: 15, category: 'Electronics', itemName: 'Charger' },
    { id: 4, timestamp: 1656077100000, price: 30, category: 'Clothing', itemName: 'Shirt' },
    { id: 5, timestamp: 1656077200000, price: 5, category: 'Food', itemName: 'Soda' }
];

console.log(calculateTotalSpentByCategory(transactions));

