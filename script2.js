window.onload = function () {

    // First chart (Heat map for Total Suspended Solids)
    var chart1 = new CanvasJS.Chart("chartContainer3", {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Total Suspended Solids"
        },
        axisX: {
            interval: 0.5
        },
        axisY: {
            includeZero: true,
            interval: 0.5,
            maximum: 10
        },
        data: [
            {
                type: "stackedBar",
                dataPoints: [
                    { label: "Bhalswa Lake", y: 8.178, color: "#98DED9" },
                    { label: "Hauz Khas Lake", y: 8.25, color: "#7CF5FF" },
                    { label: "Naini Lake", y: 9.08, color: "#36C2CE" },
                    { label: "Najafgarh Drain", y: 6.96, color: "#37B7C3" },
                    { label: "Okhla Bird Sanctuary Wetlands", y: 6.89, color: "#088395" },
                    { label: "Purana Qila Lake", y: 7.67, color: "#508C9B" },
                    { label: "Rajokri Lake", y: 9.00, color: "#227B94" },
                    { label: "Sanjay Lake", y: 6.51, color: "#1A4870" },
                    { label: "Yamuna River", y: 7.71, color: "#001F3F" }
                    ]
                }
            ]
        });
        chart1.render();

        // Second chart (Pie chart for Sales Distribution)
        var chart2 = new CanvasJS.Chart("pie_analysis", {
            theme: "light2",
            animationEnabled: true,
            title: {
                text: "Water Pollution among major cities of India"
            },
            data: [{
                type: "pie",
                startAngle: 25,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                dataPoints: [
                    { y: 43, label: "Delhi" },
                    { y: 39, label: "Mumbai" },
                    { y: 37, label: "Hyderabad" },
                    { y: 35, label: "Kolakata" },
                    { y: 33, label: "Bhopal" },
                    { y: 30, label: "Chennai" },
                    { y: 18, label: "Bengaluru" }
                ]
            }]
        });
        chart2.render();
    }
