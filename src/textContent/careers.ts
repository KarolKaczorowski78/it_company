import { 
    faLaptop, faHandHoldingMedical, faIdCard, faUsers, faProjectDiagram, faChartLine,
    faBriefcase, faGraduationCap
 } from '@fortawesome/free-solid-svg-icons';
import SendCVImg from '../img/SendCV.jpg';
import PhoneScreenImg from '../img/PhoneScreen.jpg';
import TechAssesmentImg from '../img/TechnicalAssesment.jpg';
import HRImg from '../img/HR.jpg';
import Face2FaceInterviewImg from '../img/Interview.jpg';
import WorkImg from '../img/Work.jpg';

export const Opportunities = [
    {
        content: 'Smooth career development',
        icon: faChartLine
    },
    {
        content: 'Curses (every branch of IT)',
        icon: faGraduationCap
    },
    {
        content: 'Colaboration with Google',
        icon: faProjectDiagram
    },
    {
        content: 'Modern offices',
        icon: faBriefcase
    },
    {
        content: 'International teams',
        icon: faUsers
    },
    {
        content: 'Sport subscription',
        icon: faIdCard
    },
    {
        content: 'Full medical insurance',
        icon: faHandHoldingMedical
    }, {
        content: 'Private equipment',
        icon: faLaptop
    }
]

export interface recruitmentProcess {
    name: recruitmentNames;
    img: string;
    description: string;
}

export enum recruitmentNames {
    SEND_CV = 'Send CV',
    HR = 'HR verification',
    PHONE = 'Phone screen',
    TECH = 'Technical assesment',
    FACE = 'Face to face interview',
    WORK = 'Signing a contract',
}

export const recruitmentProcesses: recruitmentProcess[] = [
    {
        name: recruitmentNames.SEND_CV,
        img: SendCVImg,
        description: 'Send Your CV to start recruitment process',
    },
    {
        name: recruitmentNames.HR,
        img: HRImg,
        description: 'Our HR department will initially verify Your application',
    },
    {
        name: recruitmentNames.PHONE,
        img: PhoneScreenImg,
        description: 'A short phone conversation to catch a first contact',
    },
    {
        name: recruitmentNames.TECH,
        img: TechAssesmentImg,
        description: 'Technical task to check Your skill set',
    },
    {
        name: recruitmentNames.FACE,
        img: Face2FaceInterviewImg,
        description: 'Face to face interview with a team leader',
    },
    {
        name: recruitmentNames.WORK,
        img: WorkImg,
        description: 'Confirmation of Your employment'
    }
]