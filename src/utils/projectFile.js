import DignityHealth from '../images/Projects/DignityHealth.png';
import KaiserCapital from '../images/Projects/KaiserCapitalGateWay.jpeg';
import MasonicHomes from '../images/Projects/MasonicHomes.png';
import Orrick from '../images/Projects/Orrick.png';
import SacramentoPediatric from '../images/Projects/SacramentoPediatric.png';
import SanLeandroHospitals from '../images/Projects/SanLeandroHospitals.png'; 
import SutterHealthWalkIn from '../images/Projects/SutterHealthWalkIn.png';
import SutterRosevilleHospital from '../images/Projects/SanLeandroRosevilleHospital';

/*
Projects:
1. Dignity Health
2. KaiserCapital
3. MasonicHomes
4. Orrick
5. Sacramento Pediatric
6. San Leandro Hospitals
7. Sutter Health Walk-in
8. Sutter Roseville Hospital
*/

const projectList =() => {
    let projects = [     
        {
            id: 1,
            businessName: 'DIGNITY HEALTH AMBULATORY SURGERY CENTER, MOB, IMAGING & LABORATORY',
            location: 'ELK GROVE, CA',
            // description_short: 'The Shriners for Children Medical Center project encompasses a new state-of-the-art specialty outpatient medical center with three levels above ground (75,000 SF) and three levels of subterranean parking...',
            description: 'In an effort to support Methodist Hospital, Dignity Health completed the first phase of a Medical Complex in Elk Grove. The new ground-up Medical Office Building (MOB) includes 20,000 sf of medical office, an 8,000-sf ambulatory surgery center, and 6,000 sf of imaging, laboratory and interior lobby space. The scope also included managing the construction of the new core and shell. Project was completed on time and on budget.',
            size: '68,100',
            img: DignityHealth,
            alt:'',
            carousel: true
        },
        {
            id: 2,
            businessName: 'KAISER CAPITAL GATEWAY',
            location: 'SACRAMENTO, CA',
            // description_short: 'The project consists of a new hospital, central utility plant and specialty medical office building (SMOB). The 620,000-sf hospital is 12 stories plus a basement housing 349 beds, 10 Operating Rooms with 2 Cath Labs....',
            description: 'This Kaiser Capital Gateway Medical building was constructed in 1985. The property consists of a 6-story office building with a one story street level commercial tenant space and a 210,000 sf 4 story parking structure. Tenant improvements for the project will replace the entire MEP system and will fit out approximately 160,000 sf of tenant improvement. As part of the project, 80% of the entire surface area of the building need to be replaced, which consisted of metal panels, ribbon windows and brick veneer.The newly enhanced building envelope consists of high-performing insulated metal panels along with dynamic vision glass, which tracks the movement of the sun, along with other environmental conditions to regularly adjust the tint level of the glazing to minimize solar heat gain in the building. The new tenant improvement will provide a full-service satellite MOB containing specialty and primary care providers.',
            size: '199,000',
            img: KaiserCapital,
            alt: '',
            carousel: true
        },
        {
            id: 3,
            businessName: 'MASONIC HOMES OF CALIFORNIA - THE PAVILLION AT ACACIA CREEK ASSISTED LIVING AND MEMORY CARE',
            location: 'UNION CITY, CA',
            // description_short: 'The multiple award-winning 627-stall parking structure for the University of California San Francisco (UCSF) was designed to enhance the aesthetic of both the UCSF Campus and the surrounding Mission Bay neighborhood....',
            description: 'New construction, including two floors of wood-framed construction over concrete podium with a 13,000 (sf) garage underneath. The 2nd floor (11,800 sf) is designed as a 12-apartment assisted living facility with each resident and the 1st floor (12,500 sf) is designed as a 12-apartment memory care facility. Nestled in the hills of Union City overlooking the San Francisco Bay, the Pavilion is a residence for seniors experiencing memory loss conditions or requiring assistance with day-to-day activities. Surrounded by lush greenery and bay views, the Pavilion’s well-appointed apartments circle a dynamic gathering space.',
            size: '37,300',
            img: MasonicHomes,
            alt: '',
            carousel: true
        },
        {
            id: 4,
            businessName: 'ORRICK, HERRINGTON & SUTCLIFFE OFFICE',
            location: 'SACRAMENTO, CA',
            // description_short: 'The award-winning (IIDA Heal Public Category) expanded cancer center contains state-of-the-art amenities and equipment, enabling the hospital to serve the increasing Sacramento population, and consolidating the operation...',
            description: 'Located in the Wells Fargo Building in downtown Sacramento, this 35,000-sf tenant improvement project took place on the top 3 stories of the 30-story building. Orrick Herrington Sutcliffe LLP desired a fresh, progressive design with enhanced functionality to adapt to the future changes in the practice of law and their firm, The complete gutting of the previous office space provided a clean slate to create a design and function forward office space. Carrying glass walls into the center of the space brings light and the view of the surrounding Sacramento landscape at any vantage point, providing a new look and feel that provides Orrick staff with improved collective energy. Porter Consulting was responsible for full project management through design and construction of this fast-paced project. The updated layout utilizes the common functions.',
            size: '35,000',
            img: Orrick,
            alt: '',
            carousel: true
        },
        {
            id: 5,
            businessName: 'SACRAMENTO PEDIATRIC GASTROENTEROLOGY',
            location: 'SACRAMENTO, CA',
            // description_short: 'The award-winning (IIDA Heal Public Category) expanded cancer center contains state-of-the-art amenities and equipment, enabling the hospital to serve the increasing Sacramento population, and consolidating the operation...',
            description: 'Dr. Davies had a vision for how she wanted her practice to look and feel and Porter Consulting was integral in making that vision a reality. This was truly an amazing project that allowed us to create a space where kids could feel comfortable and at ease while going through a difficult time in their lives. The lobby was created to entertain patients’ siblings while waiting for their appointments and the magic and awe of the space is carried through the entire facility. “While many didn’t believe my idea and concept for creating my clinic was practical or could be done within budget Porter Consulting believed. They took my original concept drawing, created a budget for what they determined the space could be built for and maintained that budget all the way thru construction. Amazing Job, Amazing People.” -Dr. Yinka Davies',
            size: '6,000',
            img: SacramentoPediatric,
            alt: '',
            carousel: true
        },
        {
            id: 6,
            businessName: 'SAN LEANDRO HOSPTIAL ACUTE CARE REMODEL',
            location: 'SAN LEANDRO, CA',
            // description_short: 'The award-winning (IIDA Heal Public Category) expanded cancer center contains state-of-the-art amenities and equipment, enabling the hospital to serve the increasing Sacramento population, and consolidating the operation...',
            description: 'The San Leandro Hospital Acute Care Remodel is a 30,000 SF renovation of the upper two floors. This project will remodel the existing 3rd and 4th floors, changing them from medical surgical beds to acute rehabilitation beds with the associated support departments. The updated facility will provide services such asPhysical/Rehabilitation Therapy, Occupational Therapy, Speech Therapy, and the associated nursing support. These services currently reside at AHS\' Fairmont Hospital and will be relocated to San Leandro Hospital upon completion of this project.',
            size: '30,000',
            img: SanLeandroHospitals,
            alt: '',
            carousel: true
        },
        {
            id: 7,
            businessName: 'SUTTER HEALTH WALK-IN CLINICS',
            location: 'VARIOUS LOCATIONS ACROSS CALIFORNIA',
            // description_short: 'The award-winning (IIDA Heal Public Category) expanded cancer center contains state-of-the-art amenities and equipment, enabling the hospital to serve the increasing Sacramento population, and consolidating the operation...',
            description: 'Sutter Health Strategy & Business Development is championing a new concept for accessible health care with the Walk-in Clinic franchise model. The objective is to provide a high level of care with a new look and feel that is patient centric and provides Sutter staff with a better workflow, typically in a 1,500-sf to 1,800-sf retail center setting. Some locations will be larger or smaller depending on the anticipated patient demand and available real estate in the market area. The interiors are an urban modern feel that includes patient lobby with tea service, tech bar, TV, music, reception, combined patient/staff restroom, four central exam rooms and optional consultation room all supported by a staff work area, utility med room and janitorial closet. Finishes, colors, materials, lighting and ceiling features are atypical to the traditional healthcare environment and provide a fresh, forward approach to patients.',
            size: '1,500',
            img: SutterHealthWalkIn,
            alt: '',
            carousel: true
        },
        {
            id: 8,
            businessName: 'Sutter Roseville Hospital',
            location: 'ROSEVILLE, CA',
            // description_short: 'The award-winning (IIDA Heal Public Category) expanded cancer center contains state-of-the-art amenities and equipment, enabling the hospital to serve the increasing Sacramento population, and consolidating the operation...',
            description: 'The Sutter Roseville Hospital ED Expansion is a 3-story building located in an existing physicians’ parking lot directly outside the current Emergency Department. The new building is an addition to the existing Emergency Department. The 1st Floor consists of a 35-bay Emergency Department expansion with new waiting room and lobby. The 2nd Floor is a 12-unit Intensive Care Unit with 8 operating / procedure rooms. The 3rd Floor is another 24-unit Intensive Care Unit rooms (12 to occupy upon completion and 12 to be shelled). The project also includes a remodel of the existing Emergency Department, surgical waiting, dietary kitchen, locker and conference rooms, with new waiting room and lobby.',
            size: '96,550',
            img: SutterRosevilleHospital,
            alt: '',
            carousel: true
        }
    ];
    return  projects
}

export default projectList