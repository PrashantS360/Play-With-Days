// const d = new Date();

// const dict = {'1970-01-01':4,'2020-01-02':4,'2020-01-03':6,'2020-01-04':8,'2020-01-05':2,'2020-01-06':-6,'2020-01-07':2,'2020-01-08':-2}
const dict = { '2020-01-01': 6, '2020-01-04': 12, '2020-01-05': 14, '2020-01-06': 2, '2020-01-08': 4 }


const Solution = (dict) => {
    let result = { 'Mon': null, 'Tue': null, 'Wed': null, 'Thu': null, 'Fri': null, 'Sat': null, 'Sun': null };
    // getDay() returns 0 to 6 integer for Sun to Mon
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let date in dict) {
        const day = new Date(date).getDay();
        let val = result[days[day]];
        if (val != null) {
            result[days[day]] += dict[date];
        }
        else {
            result[days[day]] = dict[date];
        }
        // console.log(days[day]);
    }

    days.map((day, idx) => {
        if (result[day] === null) {
            let next = (idx + 1) % 7;
            let prev = (idx + 6) % 7;
            // console.log(next,prev);
            if (result[days[next]] != null && result[days[prev]] != null) {
                result[day] = Math.floor((result[days[next]] + result[days[prev]]) / 2);
            }
            else {
                while (result[days[next]] == null) {
                    next += 1;
                }
                next %= 7;
                while (result[days[prev]] == null) {
                    prev -= 1;
                }
                prev = (prev + 7) % 7;

                // Arithmetic Progression Logic
                let diff = Math.abs(next - prev);
                let d = (result[days[next]] - result[days[prev]]) / diff;
                // console.log(diff, d, result[days[next]], result[days[prev]]);
                let val = result[days[prev]] + Math.floor((Math.abs(idx - prev)) * d);
                result[day] = val;
            }
        }
    })
    return result;
}

const output = Solution(dict);
// document.getElementById("input").innerHTML =  JSON.stringify(dict);
// document.getElementById("output").innerHTML =  JSON.stringify(output);
console.log(output);
// const dt = new Date('2020-01-01');
// console.log(dt.getDay());