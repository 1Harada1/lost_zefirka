let actionPoints = 0;

let neihboursLookedAt = false;
let fridgeLookedAt = false;
let neighboursAsked = false;


const lookAtNeighboursBtn = document.getElementById("btn-look-at-all-neighbours");
const lookIntoTheFridgeBtn = document.getElementById("btn-investigate-the-fridge");
const askNeighboursBtn = document.getElementById("btn-ask-all-neighbours");

const blameLohaBtn = document.getElementById("btn-blame-loha");
const blameOlegBtn = document.getElementById("btn-blame-oleg");
const blameAlbertBtn = document.getElementById("btn-blame-albert");
//blameLohaBtn.disabled = true;
//blameOlegBtn.disabled = true;
//blameAlbertBtn.disabled = true;

const actionSpan = document.getElementById("action-points");
const gameLog = document.getElementById("game-log");

console.log("Гра успішно завантажена!")

function updateActionPoints() {
    actionPoints++;
    actionSpan.textContent = actionPoints;
    //if (neihboursLookedAt && fridgeLookedAt && neighboursAsked) {
    //    blameLohaBtn.disabled = false;
    //    blameOlegBtn.disabled = false;
    //    blameAlbertBtn.disabled = false;
    //}
}
function LookAtNeighbours() {
    gameLog.textContent = "Ви оглянули сусідів: Льоху, Олега та Альберта.\nЛьоха знову накурився, Олег нервує - очі бігають, а Альберт стоїть довольний як слон.";
    updateActionPoints();
    neihboursLookedAt = true;
}

function LookIntoTheFridge() {
    gameLog.textContent = "Ви заглянули в холодильник.\n\nУ Льохи на поличці холодильника стоїть нова кружка із зубною щіткою Олега - у Льохи все добре.\n\nПоличка Олега пуста.\n\nАльбертова поличка забита їжею доверху. При тому всі продукти запаковані та не відкривались. "
    updateActionPoints();
    fridgeLookedAt = true;
}

function AskNeighbours() {
    gameLog.textContent = "Ви запитали сусідів про їхні справи:\n\nЛьоха відповів, що гекон - це зелений направо, а тому чотири через автобус не підмишка - у Льохи все добре.\n\nОлег відповів, що він не знає де поділася зефірка, але він її не брав.\n\nАльберт відповів, що йому не потрібна ваша зефірка, адже у нього повно своєї їжі і він щойно поїв.";
    updateActionPoints();
    neighboursAsked = true;
}

function AccuseLoha() {
    if (neihboursLookedAt && fridgeLookedAt && neighboursAsked) {
        gameLog.textContent = "Ви оголосили Льоху злочинцем. Льоха знову накурився та його знову потягло на солодке. Це він злочинець, який забрав у вас право на законну зефірку.\nПроте Альберт образився, що ви його звинуватили у крадіжці і втік із квартири. \n\nВи виграли битву, але програли Льоху... Зажали зефірку, та який ви тепер друг...";}
    else{
        gameLog.textContent = "Ви навіть не перевірили, усе навколо вас, щоб звинуватити Льоху. Не лінуйтесь.";
    }
}

function AccuseOleg() {
    if (neihboursLookedAt && fridgeLookedAt && neighboursAsked) {
        gameLog.textContent = "Та за шо Олега?! Олег нервує, бо бачив, як Альберт щойно з'їв його торт, яким він планував отруїти вахтершу.\n\nВи програли!";}
    else{
        gameLog.textContent = "Ви навіть не перевірили, усе навколо вас, щоб звинуватити Олега. Не лінуйтесь.";
    }
}

function AccuseAlbert() {
    if (neihboursLookedAt && fridgeLookedAt && neighboursAsked) {
        gameLog.textContent = "Ви оголосили Альберта злочинцем.\nБув очевидний висновок: Альберт сказав, що щойно поїв, але вся його їжа була запакована, а полиця повністю заповнена. Тому якщо він і їв, то щось не своє - ВАШУ ЗЕФІРКУ.\nАле ні, Альберт не їв вашу зефірку, адже ваша зефірка була біла, а Альберт як справжній чоловік їсть тільки рожевий зефір😎.";
    }
    else{
        gameLog.textContent = "Ви навіть не перевірили, усе навколо вас, щоб звинуватити Альберта. Не лінуйтесь.";
    }
}


lookAtNeighboursBtn.addEventListener("click", LookAtNeighbours);
lookIntoTheFridgeBtn.addEventListener("click", LookIntoTheFridge);
askNeighboursBtn.addEventListener("click", AskNeighbours);

blameLohaBtn.addEventListener("click", AccuseLoha);
blameOlegBtn.addEventListener("click", AccuseOleg);
blameAlbertBtn.addEventListener("click", AccuseAlbert);