function PublishStatistic(Statistic) {
    let name = prompt("Введите ваше имя");

    if (Statistic.gameWin) {
        alert(`Поздравляю ${name} вы завершили игру. Затраченное время ${Statistic.time}, кликов ${Statistic.clicks}, ошибок ${Statistic.errors}`);
    }else {
        alert(`Вы ${name} проиграли. Затраченное время ${Statistic.time}, кликов ${Statistic.clicks}, ошибок ${Statistic.errors}`);
    }

}
