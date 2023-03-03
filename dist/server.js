"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
let data = [
    {
        id: 1,
        city: 'ahmedabad'
    },
    {
        id: 2,
        city: 'gandhinagar'
    },
    {
        id: 3,
        city: 'mehsana'
    },
    {
        id: 4,
        city: 'rajkot'
    },
    {
        id: 5,
        city: 'bharuch'
    },
    {
        id: 6,
        city: 'surat'
    },
    {
        id: 7,
        city: 'vadodara'
    },
    {
        id: 8,
        city: 'navsari'
    },
    {
        id: 9,
        city: 'valsad'
    },
    {
        id: 10,
        city: 'vapi'
    }
];
app.get('/', (req, res) => {
    res.send("hello there the site is now working...hurray...!!!!");
});
app.get('/getdata', (req, res) => {
    var _a, _b;
    let page = (_a = req.query.page) !== null && _a !== void 0 ? _a : 1;
    let limit = (_b = req.query.limit) !== null && _b !== void 0 ? _b : data.length;
    let startPoint = (page - 1) * limit;
    let endPoint = page * limit;
    const result = data.slice(startPoint, endPoint);
    res.json(result);
});
app.listen(3000, () => {
    console.log("app is running...");
});
