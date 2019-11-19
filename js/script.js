$(document).ready(
    function () {

        function showCurrentWeather() {
            getCurrentWeather('http://api.weatherstack.com/current?access_key=2a18cdef8ccb209bdc8e0a4c414138fe&query=California')
                .done(function (data) {
                    var weather = data;

                    var city = weather.location.name,
                        country = weather.location.country,
                        time = weather.location.localtime,

                        condition = weather.current.weather_descriptions.text,
                        icon = "" + weather.current.weather_icons,

                        temp = weather.current.temperature + ' °C',

                        wind = weather.current.wind_speed + ' m/s',

                        humidity = weather.current.humidity + ' %',

                        vision = weather.current.visibility + ' km';

                    var weatherWidget = $(document.createElement('div')).addClass('weatherWidget'),
                        widgetBlock = $(document.createElement('div')).addClass('widgetBlock');

                    $(document.createElement('div'))
                        .addClass('location')
                        .html(city + ', ' + country)
                        .appendTo(weatherWidget);

                    $(document.createElement('div'))
                        .addClass('time')
                        .html(time)
                        .appendTo(weatherWidget);

                    $(document.createElement('img'))
                        .addClass('icon')
                        .attr('src', icon)
                        .appendTo(weatherWidget);

                    $(document.createElement('div'))
                        .addClass('condition')
                        .html(condition)
                        .appendTo(weatherWidget);

                    $(document.createElement('div'))
                        .addClass('temp')
                        .html(temp)
                        .appendTo(weatherWidget);

                    $(document.createElement('div'))
                        .addClass('info')
                        .html('<div><i class="far fa-paper-plane"></i></div>' + wind)
                        .appendTo(widgetBlock);

                    $(document.createElement('div'))
                        .addClass('info')
                        .html('<div><i class="fas fa-tint"></i></div>' + humidity)
                        .appendTo(widgetBlock);

                    $(document.createElement('div'))
                        .addClass('info')
                        .html('<div><i class="fas fa-eye"></i></div>' + vision)
                        .appendTo(widgetBlock);

                    widgetBlock.appendTo(weatherWidget);
                    $('#wrapper').html(weatherWidget);
                });

            function getCurrentWeather(url) {
                return $.ajax({
                    type: 'GET',
                    url: url
                })
            }

        }

        showCurrentWeather();
        setInterval(showCurrentWeather, 30000);

    }
);