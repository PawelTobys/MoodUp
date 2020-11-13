const name='Paweł';
const miasto='Wolsztyna';
console.log(`Cześć. Mam na imię ${name} i pochodzę z ${miasto} Cieszę się, że odwiedziłeś moją stronę!`);

const age = 31

const welcome = (nejm, ejdz) => {
    console.log(`Witaj ${nejm}, masz ${ejdz} lat!`);
}

welcome('Pawel', 28);

const wiek = 14;
const imie = 'Filip'

welcome(imie, wiek);

welcome('Andrzej', 44);

const latka = 11;
const ksywka = 'Didi';

welcome(ksywka, latka);

const navigationSwitcher = document.querySelector('.navigation__switcher--js');

navigationSwitcher.addEventListener('click' , (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible');
});