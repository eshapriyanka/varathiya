
window.onload = function() {
    var chart = new CanvasJS.Chart("container", {
        animationEnabled: true,
        animationDuration: 4000,
        theme: "light2",
        title: {
            text: "WQI OF WATER BODIES IN DELHI"
        },
        axisY: {
            title: "WQI"
        },
        data: [{
            type: "column", 
            indexLabel: "{y}",
            indexLabelPlacement: "inside",
            indexLabelOrientation: "vertical",
            dataPointWidth: 15,
            dataPoints: [
                { label: "Bhalswa Lake", y: 81 ,color: "#1d2d44"},
                { label: "Hauz Khas Lake", y: 77, color: "#eae2b7"},
                { label: "Naini Lake", y: 78,color: "#38a3a5" },
                { label: "Najafgarh Drain", y: 83,color: "#ff9e00" },
                { label: "Okhla Bird Sanctuary", y: 74,color: "#be95c4" },
                { label: "Purna Quila Lake", y: 75,color: "#c9184a" },
                { label: "Rajokri Lake", y: 74,color: "#b8c0ff" },
                { label: "Sanjay Lake", y: 77,color: "#ad2831" },
                { label: "Yamuna River", y: 70,color: "#fb8500" }
            ]
        }]
    });
    chart.render(); 
}



const data = {
    'last-year': {
        'PH': [
            { Sno: 1, Water_body: 'Yamuna', Level: 7.1 },
            { Sno: 2, Water_body: 'Najafgarh Drain', Level: 7.16 },
            { Sno: 2, Water_body: 'Bhalswa Lake', Level: 6.96 },
            { Sno: 2, Water_body: 'Okhla Bird Sanctuary Wetlands', Level: 7.23 },
            { Sno: 2, Water_body: 'Hauz Khas Lake', Level: 7.31 },
            { Sno: 2, Water_body: 'Naini Lake', Level: 6.28 },
            { Sno: 2, Water_body: 'Rajokri Lake', Level: 6.03 },
            { Sno: 2, Water_body: 'Purana Qila Lake', Level: 6.26 },
            { Sno: 2, Water_body: 'Sanjay Lake', Level: 8.14 }
            
        ],
        'TURBIDITY': [
            { Sno: 1, Water_body: 'Yamuna', Level: 22.57 },
            { Sno: 2, Water_body: 'Najafgarh Drain', Level: 4.04 },
            { Sno: 2, Water_body: 'Bhalswa Lake', Level: 2.81 },
            { Sno: 2, Water_body: 'Okhla Bird Sanctuary Wetlands', Level: 4.16 },
            { Sno: 2, Water_body: 'Hauz Khas Lake', Level: 6.51 },
            { Sno: 2, Water_body: 'Naini Lake', Level: 5.54 },
            { Sno: 2, Water_body: 'Rajokri Lake', Level: 8.62 },
            { Sno: 2, Water_body: 'Purana Qila Lake', Level: 3.91 },
            { Sno: 2, Water_body: 'Sanjay Lake', Level: 4.46 }
        ],
        
    },
    'year': {
        'PH': [
            { Sno: 1, Water_body: 'Yamuna', Level: 6.7 },
            { Sno: 2, Water_body: 'Najafgarh Drain', Level: 6.58 },
            { Sno: 2, Water_body: 'Bhalswa Lake', Level: 6.32 },
            { Sno: 2, Water_body: 'Okhla Bird Sanctuary Wetlands', Level: 6.92 },
            { Sno: 2, Water_body: 'Hauz Khas Lake', Level: 7.28 },
            { Sno: 2, Water_body: 'Naini Lake', Level: 6.86 },
            { Sno: 2, Water_body: 'Rajokri Lake', Level: 7.21 },
            { Sno: 2, Water_body: 'Purana Qila Lake', Level: 6.74},
            { Sno: 2, Water_body: 'Sanjay Lake', Level: 6.27 }
        ],
        'TURBIDITY': [
            { Sno: 1, Water_body: 'Yamuna', Level: 7.27},
            { Sno: 2, Water_body: 'Najafgarh Drain', Level: 3.85 },
            { Sno: 2, Water_body: 'Bhalswa Lake', Level: 4.82},
            { Sno: 2, Water_body: 'Okhla Bird Sanctuary Wetlands', Level: 4.26 },
            { Sno: 2, Water_body: 'Hauz Khas Lake', Level: 3.9},
            { Sno: 2, Water_body: 'Naini Lake', Level: 8.18 },
            { Sno: 2, Water_body: 'Rajokri Lake', Level: 6.07},
            { Sno: 2, Water_body: 'Purana Qila Lake', Level: 5.18},
            { Sno: 2, Water_body: 'Sanjay Lake', Level: 5.4}
        ],
        
    },
};

function updateTable() {
    const selectedDate = document.getElementById('date').value;
    const selectedPollutant = document.getElementById('pollutant').value;
    const tableBody = document.getElementById('pollutionTable').querySelector('tbody');

    // Clear existing table rows
    tableBody.innerHTML = '';

    // Get relevant data based on selections
    const selectedData = data[selectedDate][selectedPollutant];

    // Populate the table with new data
    selectedData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.Sno}</td><td>${item.Water_body}</td><td>${item.Level}</td>`;
        tableBody.appendChild(row);
    });
}

// Initial load
updateTable();