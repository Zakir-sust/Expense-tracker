const rec = [{
    product: 'rice',
    date: '2020-12-10',
},
{
    product: 'potato',
    date: '2020-11-10',
},
{
    product: 'sugar',
    date: '2020-5-10',
},
{
    product: 'milk',
    date: '2020-1-10',
},
{
    product: 'rice',
    date: '2020-12-10',
},
{
    product: 'potato',
    date: '2020-11-10',
},
{
    product: 'sugar',
    date: '2020-5-10',
},
{
    product: 'milk',
    date: '2020-1-10',
},
{
    product: 'rice',
    date: '2020-12-10',
},
{
    product: 'potato',
    date: '2020-11-10',
},
{
    product: 'sugar',
    date: '2020-5-10',
},
{
    product: 'milk',
    date: '2020-1-10',
}

]

class Datawithnull {

constructor(data) {
    console.log(data)
    this.data = data;
}

datamodify(startDate, endDate) {
    let ar = [];
    let i = 0;
    let data = this.data;
    while (i < data.length) {
        let dat = data[i];
        i++;
        if (dat.date >= startDate && dat.date <= endDate) {
            ar.push(dat);
        }
    }
    return ar;
}
}

class Datawithoutnull {

//let data;

constructor(data) {
    console.log(data)
    this.data = data;
}

datamodify(startDate, endDate, prod) {
    let ar = [];
    let i = 0;
    let data = this.data;
    if (data.prod != null) {
        while (i < data.length) {
            let dat = data[i];
            i++;
            if (dat.date >= startDate && dat.date <= endDate) {
                    if (prod == dat.product) ar.push(dat);
            }
        }
    } else {
        const dtt = new Datawithnull(data);
        return dtt.datamodify(startDate, endDate);
    }

    return ar;
}
}

const datt = new Datawithoutnull(rec);
const an = datt.datamodify('2020-1-1', '2020-12-31', 'potato');
console.log(an);