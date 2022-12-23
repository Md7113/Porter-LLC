// {
//     id: ,
//     businessName: '',
//     location: '',
//     description_short: '',
//     description: '',
//     size: '',
//     budget: '',
//     owner:'',
//     architectRecord: '',
//     generalContractor,
//     relevance: '',
//     serviceProvided:''
// }

const projectList =() => {
    let projects = [ 
        {
            id: 1,
            businessName: 'SHRINERS HOSPITALS FOR CHILDREN',
            location: 'PASADENA, CA',
            description_short: 'The Shriners for Children Medical Center project encompasses a new state-of-the-art specialty outpatient medical center with three levels above ground (75,000 SF) and three levels of subterranean parking...',
            description: 'The Shriners for Children Medical Center project encompasses a new state-of-the-art specialty outpatient medical center with three levels above ground (75,000 SF) and three levels of subterranean parking (90,000 SF - 210 stalls). It includes an ambulatory surgery center comprised of 2 operating rooms and associated support spaces, clinical, diagnostic, compounding pharmacy, orthopedic exam, fitting and fabrication facilities, indoor and outdoor rehabilitation units and administrative office areas. The facility replaces an aging and seismically noncompliant acute care facility on Geneva Street in Los Angeles. It will help carry the legacy of the Shriners into the next century and will bring exceptional specialty pediatric care to millions of children and families across the southwestern United States, regardless of the families\' ability to pay.',
            size: ' 75,000 (Building); 90,000 (Garage)',
            budget: ' $72M',
            owner:' Shriners Hospitals For Children',
            architectRecord: ' SRG Partnership & Co Architects',
            generalContractor: ' Messer Construction',
            relevance: ' Healthcare, OSHOD & State Fire Marshall',
            serviceProvided:' Project Management',
            // img:'../images/shriners.png'
        },
        {
            id: 2,
            businessName: 'KAISER OAKLAND REPLACEMENTHOSPITAL PHASE II',
            location: 'OAKLAND, CA',
            description_short: 'The project consists of a new hospital, central utility plant and specialty medical office building (SMOB). The 620,000-sf hospital is 12 stories plus a basement housing 349 beds, 10 Operating Rooms with 2 Cath Labs....',
            description: 'The project consists of a new hospital, central utility plant and specialty medical office building (SMOB). The 620,000-sf hospital is 12 stories plus a basement housing 349 beds, 10 Operating Rooms with 2 Cath Labs, an IMRIS operating suite, labor and delivery, pharmacy, Emergency Department and full administrative services. The hospital has an underground loading dock servicing the attached 220,000 square foot SMOB. The SMOB houses physician offices and an outpatient surgery center. A 50,000-sf central utility plant provides services to the entire campus and meets NPC5 requirements for 72-hour sustainability. The project was on-time with a phased occupancy opening the SMOB and lower 2 floors of the hospital 6 months prior to full hospital occupancy.',
            size: ' 890,000',
            budget: ' $750M',
            owner:' Kaiser Permanente',
            generalContractor: ' McCarthy Building Companies',
            architectRecord: ' NBBJ Architects',
            relevance: ' Healthcare, OSHOD & State Fire Marshall',
            serviceProvided:' Project Management'
        },
        {
            id: 3,
            businessName: 'UCSF MEDICAL CENTER PARKINGSTRUCTURE',
            location: 'SAN FRANCISCO, CA',
            description_short: 'The multiple award-winning 627-stall parking structure for the University of California San Francisco (UCSF) was designed to enhance the aesthetic of both the UCSF Campus and the surrounding Mission Bay neighborhood....',
            description: 'The multiple award-winning 627-stall parking structure for the University of California San Francisco (UCSF) was designed to enhance the aesthetic of both the UCSF Campus and the surrounding Mission Bay neighborhood. A key challenge was the project\'s budget and required intelligent design maneuvering to meet the architects\' unique and compelling vision. The pre-set price per square foot was based on competition restrictions, so the elaborate design had to be streamlined to efficiently execute the project. The target value was established early on (pre program) and the team aligned itself to successfully beat the goal of $16M (with a completed cost of $15.5M).',
            size: ' 224,000',
            budget: ' $16M',
            owner:' WRNS Studio',
            architectRecord: ' Rudolph & Sletten',
            generalContractor: ' Healthcare, Higher Education & Parking',
            relevance: 'blank on form',
            serviceProvided:' Architizer A+ Awards Special Mention, ParkingStructures, 2014; AIA San Francisco Design Citation Award, 2013'
        },
        {
            id: 4,
            businessName: 'UC DAVIS MEDICAL CENTERCANCER CENTER EXPANSION',
            location: 'SAN FRANCISCO, CA',
            description_short: 'The award-winning (IIDA Heal Public Category) expanded cancer center contains state-of-the-art amenities and equipment, enabling the hospital to serve the increasing Sacramento population, and consolidating the operation...',
            description: 'The award-winning (IIDA Heal Public Category) expanded cancer center contains state-of-the-art amenities and equipment, enabling the hospital to serve the increasing Sacramento population, and consolidating the operation of both adult and pediatric cancer treatment. The project consists of a new 3-story, 46,500-sf building north of the preexisting cancer center. The project included the addition of Pediatric Clinic, Pediatric Infusion, Adult Clinic and Adult Infusion Departments, consolidating the multiple departments into one localized facility.The enhanced facility makes it a magnet for research and clinical efforts and paves the way toward achieving the facility\'s goal of becoming one of only a handful of leading cancer centers in Northern California, providing the highest level of patient care.',
            size: ' 46,500',
            budget: ' $30M',
            owner:' University Of California Davis',
            architectRecord: ' SmithGroup',
            generalContractor:' Rudolph & Sletten',
            relevance: ' Healthcare & Higher Education',
            serviceProvided:' Project Management'
        }
    ];
    return  projects
}

export default projectList