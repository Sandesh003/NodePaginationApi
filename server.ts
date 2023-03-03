import express, { Express } from 'express';

const app = express();

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
]

app.get('/', (req,res)=>{
  res.send("hello there the site is now working...hurray...!!!!")
})

app.get('/getdata',(req, res)=>{
  let page:any = req.query.page ?? 1
  let limit:any = req.query.limit ?? data.length

  let startPoint = (page - 1) * limit;
  let endPoint = page * limit;

  const result = data.slice(startPoint,endPoint)
  res.json(result);
})

app.listen(3000,()=>{
  console.log("app is running...")
})
