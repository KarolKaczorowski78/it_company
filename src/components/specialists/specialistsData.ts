import { ReactNode } from 'react';
import { Services } from '../../universal/constants/sectionNames';
import webDevImg from '../../img/web.svg';
import mobileImg from '../../img/mobile.svg';
import aiImg from '../../img/ai.svg';

const specialists: Specialist[] = [
    {
        fullName: 'John Doe',
        profession: Services.WEB_DEVELOPMENT,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        icon: webDevImg,
    },
    {
        fullName: 'Martin Doe',
        profession: Services.MOBILE_DEVELOPMENT,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        icon: mobileImg,
    },
    {
        fullName: 'Patrick Doe',
        profession: Services.MACHINE_LEARNING,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        icon: aiImg,
    }
]

export interface Specialist {
    fullName: string;
    profession: Services;
    description: string;
    icon: string;
    uniqueComponent?: ReactNode;
}

export default specialists;