function PublishStatistic(Statistic) {
    let name = prompt("Введите ваше имя");

    if (Statistic.gameWin) {
        alert(`Поздравляю ${name}! Вы завершили игру. Затраченное время ${Statistic.time} секунд, кликов ${Statistic.clicks}, ошибок ${Statistic.errors}`);
    }else {
        alert(`${name} Вы проиграли. Затраченное время ${Statistic.time} секунд, кликов ${Statistic.clicks}, ошибок ${Statistic.errors}`);
    }

}
