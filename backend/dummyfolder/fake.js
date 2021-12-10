const rec = [{
        product: 'rice',
        date: new Date('2020-12-10'),
    },
    {
        product: 'potato',
        date: new Date('2020-11-10'),
    },
    {
        product: 'sugar',
        date: new Date('2020-5-10'),
    },
    {
        product: 'milk',
        date: new Date('2020-1-10'),
    },
    {
        product: 'rice',
        date: new Date('2020-12-10'),
    },
    {
        product: 'potato',
        date: new Date('2020-11-10'),
    },
    {
        product: 'sugar',
        date: new Date('2020-5-10'),
    },
    {
        product: 'milk',
        date: new Date('2020-1-10')
    },
    {
        product: 'rice',
        date: new Date('2020-12-10')
    },
    {
        product: 'potato',
        date: new Date('2020-11-10')
    },
    {
        product: 'sugar',
        date: new Date('2020-5-10')
    },
    {
        product: 'milk',
        date: new Date('2020-1-10')
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
            console.log('print date ' + dat.date);
            i++;
            if (dat.date >= startDate && dat.date <= endDate) {
                ar.push(dat);
            }
        }
        return ar;
    }
}

class Datawithoutnull {


    constructor(data) {
        console.log(data);
        this.data = data;
    }

    datamodify(startDate, endDate, prod) {
        let ar = [];
        let i = 0;
        let data = this.data;
        if (prod != null) {
            console.log('WE HAVE ENTERED HERE')
            while (i < data.length) {
                let dat = data[i];
                i++;
                console.log(dat.date)
                if (dat.date >= startDate && dat.date <= endDate) {
                    if (prod == dat.product) ar.push(dat);
                }
            }
        } else {
            console.log('WHY WE ARE HERE')
            const dtt = new Datawithnull(data);
            return dtt.datamodify(startDate, endDate);
        }

        return ar;
    }
}

const datt = new Datawithoutnull(rec);
console.log('here is what we have got')
const an = datt.datamodify(new Date('2020-1-10'), new Date('2020-5-10'), null);
console.log(an);