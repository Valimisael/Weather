$(document).ready(
    function () {

        function showCurrentWeather() {
            getCurrentWeather('http://api.apixu.com/v1/current.json?key=03dc943cd1e746a2be8112030181004&q=Minsk')
                .done(function (data) {
                    var weather = data;

                    var city = weather.location.name,
                        country = weather.location.country,
                        time = weather.location.localtime,

                        condition = weather.current.condition.text,
                        icon = 'http:' + weather.current.condition.icon,

                        temp = weather.current.temp_c + ' °C',

                        wind = weather.current.wind_mph + ' m/s',

                        humidity = weather.current.humidity + ' %',

                        vision = weather.current.vis_km + ' km';

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