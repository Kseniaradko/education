// Что выведется в консоль? И почему?

var val = Promise.resolve(1);

var arr = [1, 2, 3];

for (var i = 0; i < arr.length; ++i) {
    val = val.then((val) => val + arr[i]);
}

val.then(console.log); // NaN

// Здесь в самом начале записывается переменная val, в которую записался уже выполненный промис.
// Далее в цикле происходит запись микротасок в очередь данной записью: val = val.then((val) => val + arr[i]);, они не выполняются сразу
// Так как переменная объявлена с помощью ключевого слова var, то она является глобальной
// Когда значение переменной i дошло до цифры три, цикл закончился, так как длина массива равна трем.
// Следовательно переменная i сохранилась в значении 3, далее начинают выполняться микротаски, в которые ерется переменная i из глобального окружения, и она равна 3.
// В массиве arr по индексу 3 нет переменных. Следовательно в then получается 1 + undefined.
// undefined не приравнивается к 0, поэтому 1 + undefined = NaN.
// Поэтому все результаты будут равны NaN.