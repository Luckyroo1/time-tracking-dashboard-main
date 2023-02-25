const timeOftens = document.querySelectorAll("a");
const hours = document.querySelectorAll(".hours");
const lastWeek = document.querySelectorAll(".lastWeek");


timeOftens.forEach(function (timeOften) {
    timeOften.addEventListener('click', function (e) {
        timeOften.classList.add('timeweekcolor')
        fetch("./data.json")
            .then(function (response) {
                return response.json();
            })

            .then(function teste (response) {
                const jsonData = response;
                for (let i = 0; i < jsonData.length; i++) {

                    if(timeOften.textContent == "Daily"){
                        timeOftens[1].classList.remove('timeweekcolor');
                        timeOftens[2].classList.remove('timeweekcolor');
                        hours[i].textContent = jsonData[i].timeframes.daily.current+"hrs";
                        lastWeek[i].textContent = "Last day - "+jsonData[i].timeframes.daily.previous+"hrs";
                    }
                    else if(timeOften.textContent == "Weekly"){
                        timeOftens[0].classList.remove('timeweekcolor');
                        timeOftens[2].classList.remove('timeweekcolor');
                        hours[i].textContent = jsonData[i].timeframes.weekly.current+"hrs";
                        lastWeek[i].textContent = "Last week - "+jsonData[i].timeframes.weekly.previous+"hrs";
                    }
                    else{
                        timeOftens[0].classList.remove('timeweekcolor');
                        timeOftens[1].classList.remove('timeweekcolor');
                        hours[i].textContent = jsonData[i].timeframes.monthly.current+"hrs";
                        lastWeek[i].textContent = "Last month - "+jsonData[i].timeframes.monthly.previous+"hrs";
                    }

                }
            })
    })
})

