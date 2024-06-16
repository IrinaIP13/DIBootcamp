const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

for (let i = 0; i < colors.length; i++) {
    console.log(i+1 + '# choice is ' + colors[i]);
}

const res = colors.some(value => value === 'Violet');
console.log(res===true ? 'Yeah' : 'No...');