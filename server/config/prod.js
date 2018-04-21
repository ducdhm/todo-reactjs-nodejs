module.exports = {
    mongodb: {
        url: 'mongodb://localhost/todo',
        options: {
            useMongoClient: true
        }
    },
    cronjob: {
        timezone: 'Asia/Ho_Chi_Minh'
    },
    adminPort: 5000,
    port: 9000,
    session: {
        secret: 'todo'
    }
};