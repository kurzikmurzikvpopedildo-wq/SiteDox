// === SERVER.JS - Серверная эмуляция ===
window.VALID_KEYS = [
    "345435-REWAF-2342434-FSDFSEF",
    "782349-KJIOU-9876543-PLOKMN",
    "563421-QWERT-1234567-ASDFGH",
    "129876-ZXCVB-3456789-MNBVCX",
    "908712-YUIOP-5678901-LKJHGF",
    "456123-ERTYU-7890123-POIUYT",
    "789456-DFGHJ-2345678-WERCVB",
    "321654-XCVBN-8901234-MNBVCX",
    "654987-RTYUI-4567890-LKJHGF",
    "147258-WERFD-6789012-QWERTY",
    "258369-CVBNM-1238904-ASDFRE",
    "369147-BNMXC-5672348-ZXCVBN",
    "741852-PLKMN-8905671-MJNHBG",
    "852963-QAZWS-3456781-EDCRFV",
    "963852-TGBZH-7890124-UJMYHN",
    "159357-YHNMK-2347890-IKJUMY",
    "357951-NHBVG-4561238-ZAQWSX",
    "486248-RFVTG-5678901-CDEWQS",
    "512843-EDCXZ-6789012-RFVBGT",
    "673194-WQERT-7890123-YUIOPK"
];

window.usersDB = [
    { id: 1, username: "user1", key: "345435-REWAF-2342434-FSDFSEF", subscription: true },
    { id: 2, username: "user2", key: "782349-KJIOU-9876543-PLOKMN", subscription: false },
    { id: 3, username: "user3", key: "563421-QWERT-1234567-ASDFGH", subscription: true },
    { id: 4, username: "user4", key: "129876-ZXCVB-3456789-MNBVCX", subscription: false },
    { id: 5, username: "user5", key: "908712-YUIOP-5678901-LKJHGF", subscription: true },
    { id: 6, username: "user6", key: "456123-ERTYU-7890123-POIUYT", subscription: false },
    { id: 7, username: "user7", key: "789456-DFGHJ-2345678-WERCVB", subscription: true },
    { id: 8, username: "user8", key: "321654-XCVBN-8901234-MNBVCX", subscription: false },
    { id: 9, username: "user9", key: "654987-RTYUI-4567890-LKJHGF", subscription: true },
    { id: 10, username: "user10", key: "147258-WERFD-6789012-QWERTY", subscription: false },
    { id: 11, username: "user11", key: "258369-CVBNM-1238904-ASDFRE", subscription: true },
    { id: 12, username: "user12", key: "369147-BNMXC-5672348-ZXCVBN", subscription: false },
    { id: 13, username: "user13", key: "741852-PLKMN-8905671-MJNHBG", subscription: true },
    { id: 14, username: "user14", key: "852963-QAZWS-3456781-EDCRFV", subscription: false },
    { id: 15, username: "user15", key: "963852-TGBZH-7890124-UJMYHN", subscription: true },
    { id: 16, username: "user16", key: "159357-YHNMK-2347890-IKJUMY", subscription: false },
    { id: 17, username: "user17", key: "357951-NHBVG-4561238-ZAQWSX", subscription: true },
    { id: 18, username: "user18", key: "486248-RFVTG-5678901-CDEWQS", subscription: false },
    { id: 19, username: "user19", key: "512843-EDCXZ-6789012-RFVBGT", subscription: true },
    { id: 20, username: "user20", key: "673194-WQERT-7890123-YUIOPK", subscription: false }
];

window.ServerAPI = {
    validateKey: (key) => {
        return window.VALID_KEYS.some(k => k.toLowerCase() === key.toLowerCase());
    },
    
    getUserByKey: (key) => {
        return window.usersDB.find(u => u.key.toLowerCase() === key.toLowerCase());
    },
    
    getUserById: (id) => {
        return window.usersDB.find(u => u.id === id);
    },
    
    createSession: (userId) => {
        const session = {
            id: userId,
            timestamp: Date.now(),
            expires: Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 дней
        };
        localStorage.setItem('server_session', JSON.stringify(session));
        return session;
    },
    
    checkSession: () => {
        const session = JSON.parse(localStorage.getItem('server_session') || 'null');
        if (session && session.expires > Date.now()) {
            return session;
        }
        localStorage.removeItem('server_session');
        return null;
    }
};
