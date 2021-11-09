const fs = require('fs')
const ObjectsToCsv = require('objects-to-csv');
try {
    const file = fs.readFileSync('file.json', 'utf8')
    let fileObject = JSON.parse(file)
    let table = [3]
    table[0] = []
    table[1] = []
    table[2] = []
    for (const country in fileObject) {
        table[0].push(country)
        let length = 0
        table[1].push(fileObject[country].length)
        for (let i = 0; i < fileObject[country].length; i++) {
            if (fileObject[country][i].length > length) {
                length = fileObject[country][i].length;
                longest = fileObject[country][i];
            }
        }
        table[2].push(longest)
    }
    (async () => {
        const csv = new ObjectsToCsv(table);

        // Save to file:
        await csv.toDisk('./test.csv');

        // Return the CSV file as string:
        console.log(await csv.toString());
    })();


} catch (err) {
    console.error(err)
}

