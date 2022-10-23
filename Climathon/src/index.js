AOS.init();

ityped.init('#topic', {
    strings: ['Climathon 2022', 'Project by Team', 'Alohomora'],
    startDelay: 500,
    loop: true,
    typeSpeed: 80,
    backSpeed: 60,
    cursorChar: ""
});
const my_data = [{
    "Entity": "North America",
    "Code": "",
    "Year": 2000,
    "Annual CO2 emissions": 7107691709
},
{
    "Entity": "North America",
    "Code": "",
    "Year": 2001,
    "Annual CO2 emissions": 7014631472
},
{
    "Entity": "North America",
    "Code": "",
    "Year": 2002,
    "Annual CO2 emissions": 7068126101
},
{
    "Entity": "North America",
    "Code": "",
    "Year": 2003,
    "Annual CO2 emissions": 7183859119
},
{
    "Entity": "North America",
    "Code": "",
    "Year": 2004,
    "Annual CO2 emissions": 7282769072
},
{
    "Entity": "North America",
    "Code": "",
    "Year": 2005,
    "Annual CO2 emissions": 7330252917
},
{
    "Entity": "North America",
    "Code": "",
    "Year": 2006,
    "Annual CO2 emissions": 7265229406
},
{
    "Entity": "North America",
    "Code": "",
    "Year": 2007,
    "Annual CO2 emissions": 7376088584
},
{
    "Entity": "North America",
    "Code": "",
    "Year": 2008,
    "Annual CO2 emissions": 7158261808
},
{
    "Entity": "North America",
    "Code": "",
    "Year": 2009,
    "Annual CO2 emissions": 6670754218
},
{
    "Entity": "North America",
    "Code": "",
    "Year": 2010,
    "Annual CO2 emissions": 6875767079
},
{
    "Entity": "North America",
    "Code": "",
    "Year": 2011,
    "Annual CO2 emissions": 6771607912
},
{
    "Entity": "North America",
    "Code": "",
    "Year": 2012,
    "Annual CO2 emissions": 6580282771
},
{
    "Entity": "North America",
    "Code": "",
    "Year": 2013,
    "Annual CO2 emissions": 6714923529
},
{
    "Entity": "North America",
    "Code": "",
    "Year": 2014,
    "Annual CO2 emissions": 6753942686
},
{
    "Entity": "North America",
    "Code": "",
    "Year": 2015,
    "Annual CO2 emissions": 6612704117
},
{
    "Entity": "North America",
    "Code": "",
    "Year": 2016,
    "Annual CO2 emissions": 6471359556
},
{
    "Entity": "North America",
    "Code": "",
    "Year": 2017,
    "Annual CO2 emissions": 6412981891
},
{
    "Entity": "North America",
    "Code": "",
    "Year": 2018,
    "Annual CO2 emissions": 6588629908
},
{
    "Entity": "North America",
    "Code": "",
    "Year": 2019,
    "Annual CO2 emissions": 6460726238
},
{
    "Entity": "North America",
    "Code": "",
    "Year": 2020,
    "Annual CO2 emissions": 5775158655
}]


const years  = [];
const emissions = [];
 for (i in my_data) {
    years.push(my_data[i]['Year'])
    emissions.push(my_data[i]["Annual CO2 emissions"])
}
console.log(years,emissions )

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: years,
        datasets: [{
            label: `CO₂ Emissions in ${my_data[0]['Entity']} from 2000`,
            data: emissions,
            backgroundColor: [
                'rgba(255, 175, 192,0.8)',
            ],
            borderColor: [
                'white',

            ],
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            animations: {
                onComplete: () => {
                    delayed = true;
                },
                delay: (context) => {
                    let delay = 0;
                    if (context.type === 'data' && context.mode === 'default' && !delayed) {
                        delay = context.dataIndex * 300 + context.datasetIndex * 100;
                    }
                    return delay;
                }
            },
            legend: {
                labels: {
                    font: {
                        size: 30,
                        weight: 900,

                    },
                    color: 'white'
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    beginAtZero: false, color: 'white', font: {
                        size: 20
                    }
                },

            },
            x: {
                ticks: {
                    beginAtZero: false, color: 'white', font: {
                        size: 20
                    }
                },

            }
        },
    }
});

