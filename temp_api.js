function getTemp(location)
{
    const tempData =[
        {
            location: "Delhi",
            latitude: "23",
            longitude: "13",
            environment: {
            
              cloudy: "none",
              text: "Overcast",
            },
            temp_c: "56",
            temp_f: "78",
            humidity: "87",
            feels_c: "30.11",
            feels_f: "87.90",
            wind_speed: "11.92 kmph",
          },
          {
            location: "Mumbai",
            
            latitude: "23",
            longitude: "13",
            environment: {
            
              cloudy: "none",
              text: "Overcast",
            },
            temp_c: "56",
            temp_f: "78",
            humidity: "87",
            feels_c: "30.11",
            feels_f: "87.90",
            wind_speed: "11.92 kmph",
          },
        
    ];
    const res = tempData.find((d) => d.location === location);
    return res;
    }

    console.log(getTemp('Delhi'));
