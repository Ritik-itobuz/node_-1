function getWeatherData(location)
{
    const getData =[
        {
            location: "Delhi",
            latitude: "23",
            longitude: "13",
            environment: 
            {
              cloudy: "none",
              text: "Overcast",
            },
            tempCelsius: "56",
            tempFahrenheit: "78",
            humidity: "87",
            feelsCelsius: "30.11",
            feelsFahrenheit: "87.90",
            windSpeed: "11.92 kmph",
          },
          {
            location: "Mumbai",
            latitude: "23",
            longitude: "13",
            environment: 
            { 
              cloudy: "none",
              text: "Overcast",
            },
            tempCelsius: "56",
            tempFahrenheit: "78",
            humidity: "87",
            feelsCelsius: "30.11",
            feelsFahrenheit: "87.90",
            windSpeed: "11.92 kmph",
          },
        
    ];
    const res = getData.find((data) => data.location === location);
    return res;
    }

    console.log(getWeatherData('Delhi'));
