import { Dispatch, SetStateAction } from 'react';
import gsap from 'gsap';
import { recruitmentProcess } from '../../textContent/careers';
import { Careers } from '../../universal/constants/sectionNames';

const animation = (func: Dispatch<SetStateAction<recruitmentProcess>>) => {
    // const section: HTMLDivElement | null = document.querySelector(`#${Careers.RECRUITMENT_PROCESS}`);

    // section && (() => {
    //     gsap.to(section, { duration: .4, autoAlpha: 0, onComplete: () => func() })
    // })()
}

export default animation;