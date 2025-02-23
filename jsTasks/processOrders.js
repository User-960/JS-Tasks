function processOrders(stock, orders) {
    const result = {
        stats: {
            totalQuantity: 0,
            totalOrders: 0,
            sizes: []
        },
        assignment: []
    };
    
    // Создаем объект для быстрого доступа к складу по размеру
    let stockMap = {};
    stock.forEach(item => {
        stockMap[item.size] = (stockMap[item.size] || 0) + item.quantity;
    });

    // Обрабатываем заказы
    orders.forEach(order => {
        const sizesRequested = Array.isArray(order.size) ? order.size : [order.size];
        sizesRequested.forEach(size => {
            if (stockMap[size] > 0) {
                // Если склад содержит необходимый размер
                result.stats.totalQuantity += 1; // Увеличиваем общее количество удовлетворённых заказов
                result.stats.totalOrders += 1; // Увеличиваем общее количество заказов

                // Уменьшаем количество на складе
                stockMap[size] -= 1;

                // Добавляем размер в массив размеров
                if (!result.stats.sizes.includes(size)) {
                    result.stats.sizes.push(size);
                }

                // Добавляем информацию о выполнении заказа
                result.assignment.push({ id: order.id, size: size });
            }
        });
    });

    return result;
}

// Пример данных для склада и заказов
const stock = [
    { size: 42, quantity: 5 },
    { size: 44, quantity: 2 },
    { size: 46, quantity: 4 },
    { size: 48, quantity: 0 }
];

const orders = [
    { id: 1, size: 42 },
    { id: 2, size: [42, 44] },
    { id: 3, size: 46 },
    { id: 4, size: [44, 48] },
    { id: 5, size: 42 }
];

// Выполнение функции
const result = processOrders(stock, orders);
console.log(result);
