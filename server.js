// === SERVER.JS - эмуляция серверной логики ===
// В реальном проекте здесь был бы Node.js сервер с API

// 10 предустановленных ключей доступа
window.VALID_KEYS = [
    "DOX-7H3T-UR14L",
    "DOX-K3Y-0001",
    "DOX-K3Y-0002",
    "DOX-K3Y-0003",
    "DOX-K3Y-0004",
    "DOX-K3Y-0005",
    "DOX-K3Y-0006",
    "DOX-K3Y-0007",
    "DOX-K3Y-0008",
    "DOX-K3Y-0009"
];

// База данных пользователей (эмуляция)
window.usersDB = [
    { id: 1, username: "admin", key: "DOX-7H3T-UR14L", subscription: true },
    { id: 2, username: "user1", key: "DOX-K3Y-0001", subscription: false },
    { id: 3, username: "user2", key: "DOX-K3Y-0002", subscription: false },
    { id: 4, username: "user3", key: "DOX-K3Y-0003", subscription: true },
    { id: 5, username: "user4", key: "DOX-K3Y-0004", subscription: false },
    { id: 6, username: "user5", key: "DOX-K3Y-0005", subscription: false },
    { id: 7, username: "user6", key: "DOX-K3Y-0006", subscription: true },
    { id: 8, username: "user7", key: "DOX-K3Y-0007", subscription: false },
    { id: 9, username: "user8", key: "DOX-K3Y-0008", subscription: false },
    { id: 10, username: "user9", key: "DOX-K3Y-0009", subscription: false }
];

// Функции для работы с "сервером"
window.ServerAPI = {
    // Проверка ключа
    validateKey: (key) => {
        return window.VALID_KEYS.some(k => k.toLowerCase() === key.toLowerCase());
    },
    
    // Получить пользователя по ключу
    getUserByKey: (key) => {
        return window.usersDB.find(u => u.key.toLowerCase() === key.toLowerCase());
    },
    
    // Получить пользователя по ID
    getUserById: (id) => {
        return window.usersDB.find(u => u.id === id);
    },
    
    // Создать сессию
    createSession: (userId) => {
        const session = {
            id: userId,
            timestamp: Date.now(),
            expires: Date.now() + 24 * 60 * 60 * 1000 // 24 часа
        };
        localStorage.setItem('server_session', JSON.stringify(session));
        return session;
    },
    
    // Проверить сессию
    checkSession: () => {
        const session = JSON.parse(localStorage.getItem('server_session') || 'null');
        if (session && session.expires > Date.now()) {
            return session;
        }
        localStorage.removeItem('server_session');
        return null;
    }
};
