// Images 
import bap from '../assets/bap.jpeg';
import empDirectory from '../assets/employee-directory.png';
import burgerLogger from '../assets/burger-logger.jpg';
import workoutTracker from '../assets/workout-tracker.jpg';
import fff from '../assets/fantastic-food-finder.jpg';
import workdaySchedular from '../assets/workday-scheduler.jpg';
import empTracker from '../assets/emp-tracker.jpg';
import readmeGenerator from '../assets/readme-generator.jpg';
import codeQuiz from '../assets/code-quiz.jpg';
import pwdGenerator from '../assets/password-generator.jpg';
import trase from '../assets/trase.png';

// Data structure for dynamically loading project content in content filter
const projectData = [
    {
        id: 'project-11',
        className: 'color-1',
        popoverTitle: 'Trase',
        techStack: 'MongoDB | Express | React | Node.js',
        popoverContent: 'Trase automatically manages the time and cost of each task completed in a project',
        image: trase,
        website: 'https://ps-trase.herokuapp.com/',
        code: 'https://github.com/prabhm512/trase',
        alt: 'trase'
    },
    {
        id: 'project-1',   
        className: 'color-1',
        popoverTitle: 'Business Advertisement Portal',
        techStack: 'Node | MySQL | Express',
        popoverContent: 'A free advertisement channel for businesses struggling due to COVID-19.',
        image: bap,
        website: 'https://business-advertisement-portal.herokuapp.com/',
        code: 'https://github.com/prabhm512/business-advertisement-portal',
        alt: "business-advertisement-portal"
    },
    {
        id: 'project-2', 
        className: 'color-2',
        popoverTitle: 'Employee Directory',
        techStack: 'React',
        popoverContent: 'An employee directory to get my feet wet in React.',
        image: empDirectory,
        website: 'https://prabhm512.github.io/employee-directory',
        code: 'https://github.com/prabhm512/employee-directory',
        alt: "employee-directory"
    },
    {
        id: 'project-3', 
        className: 'color-2',
        popoverTitle: 'Burger Logger',
        techStack: 'Node | MySQL | Express',
        popoverContent: 'A burger logger to practice the MVC framework.',
        image: burgerLogger,
        website: 'https://ps-burger-logger.herokuapp.com/',
        code: 'https://github.com/prabhm512/burger-logger',
        alt: 'burger-logger'
    },
    {
        id: 'project-4', 
        className: 'color-2',
        popoverTitle: 'Workout Tracker',
        techStack: 'Node | MongoDB | Express',
        popoverContent: 'A workout tracker to practice MongoDB.',
        image: workoutTracker,
        website: 'https://ps-workout-tracker.herokuapp.com/',
        code: 'https://github.com/prabhm512/workout-tracker',
        alt: 'workout-tracker'
    },
    {
        id: 'project-5', 
        className: 'color-1',
        popoverTitle: 'Fantastic Food Finder',
        techStack: 'Third Party API\'s | JS',
        popoverContent: 'A nearby/top restaurant locator.',
        image: fff,
        website: 'https://prabhm512.github.io/fantastic-food-finder',
        code: 'https://github.com/prabhm512/fantastic-food-finder',
        alt: 'fantastic-food-finder'
    },
    {
        id: 'project-6', 
        className: 'color-2',
        popoverTitle: 'Workday Scheduler',
        techStack: 'HTML | CSS | JS',
        popoverContent: 'Yet another work day schedular.',
        image: workdaySchedular,
        website: 'https://prabhm512.github.io/work-day-scheduler',
        code: 'https://github.com/prabhm512/work-day-scheduler',
        alt: 'workday-scheduler'
    },
    {
        id: 'project-7', 
        className: 'color-2',
        popoverTitle: 'Employee Tracker',
        techStack: 'Node | MySQL',
        popoverContent: 'A CLI app that allows easy management of employee data.',
        image: empTracker,
        website: 'https://drive.google.com/file/d/1XOWjQuRgM_F00Mw3ydrfIzgJo6np5qRm/view?usp=sharing',
        code: 'https://github.com/prabhm512/employee-tracker',
        alt: 'employee-tracker'
    },
    {
        id: 'project-8', 
        className: 'color-2',
        popoverTitle: 'README Generator',
        techStack: 'Node',
        popoverContent: 'A CLI app that automatically generates README\'s.',
        image: readmeGenerator,
        website: 'https://drive.google.com/file/d/1KeR0acecQa7MNDirhABSZuwqCESTl_ZS/view?usp=sharing',
        code: 'https://github.com/prabhm512/readme-generator',
        alt: 'readme-generator'
    },
    {
        id: 'project-9', 
        className: 'color-2',
        popoverTitle: 'Code Quiz',
        techStack: 'HTML | CSS | JS',
        popoverContent: 'A quiz on JS to practice JS.',
        image: codeQuiz,
        website: 'https://prabhm512.github.io/code-quiz/',
        code: 'https://github.com/prabhm512/code-quiz',
        alt: 'code-quiz'
    },
    {
        id: 'project-10', 
        className: 'color-2',
        popoverTitle: 'Password Generator',
        techStack: 'HTML | CSS | JS',
        popoverContent: 'A random password generator.',
        image: pwdGenerator,
        website: 'https://prabhm512.github.io/password-generator',
        code: 'https://github.com/prabhm512/password-generator',
        alt: 'password-generator'
    }
];

export default projectData;