import gsap from 'gsap';

const animation = (): void => {
    const h1 = document.querySelector('h1');
    const base = document.querySelector('.base');
    const dices = document.querySelector('.dice');
    const container = document.querySelector('.container-3d');
    const tl = gsap.timeline();

    [h1, base, dices, container].every(el => el !== null) && (() => {
        // do the work
    })()
}

export default animation;