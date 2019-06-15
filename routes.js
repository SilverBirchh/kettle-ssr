const { Database } = require("./db");

const config = {
    cors: {
        origin: ["*"],
        additionalHeaders: ["cache-control", "x-requested-with"]
    }
};

const routes = () => [
    {
        path: "/",
        method: "get",
        handler: (request, h) => {
            console.log(`Status: ${Database.toString()}`);
            return h.view('index', {
                title: 'Ardunio Kettle',
                currentStatus: Database.get()
            });
        },
        config
    },
    {
        path: "/status",
        method: "get",
        handler: (request, h) => {
            console.log(`Status: ${Database.toString()}`);
            return `${Database.get()}`;
        },
        config
    },
    {
        path: "/start",
        method: "POST",
        handler: (request, h) => {
            Database.setShouldBoilKettle(true);
            console.log(`Status: ${Database.toString()}`);
            setTimeout(function () {
                Database.setShouldBoilKettle(false);
                console.log(`Status: ${Database.toString()}`);
            }, 30000);
            return h.response().code(200);
        },
        config
    },
];

exports.routes = routes;