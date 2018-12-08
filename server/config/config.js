var env = process.env.NODE_ENV || 'development';

if(env === 'development') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if(env === 'test') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
} else {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://mukul7199:mukul7199@ds157853.mlab.com:57853/todoapp';
}
