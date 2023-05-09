import tyler_color from "../images/Team_Photos/Tyler_Davis_Color.jpeg"
import zach_color from "../images/Team_Photos/Zach_Color.jpg"
import chris_color from "../images/Team_Photos/TOM_2540.jpg"
import eric_noir from "../images/Team_Photos/DSCF1072 1.jpg"
import kori_noir from "../images/Team_Photos/Kori Marquez B&W.jpg"
import berke_noir from "../images/Team_Photos/Morgan-Walliser3151webbw.jpg"
import tim_noir from "../images/Team_Photos/Timothy-Smith5704webbw[61].png"
import dan_noir from "../images/Team_Photos/DSCF1137 1.jpg"

import leticia_noir from "../images/Team_Photos/Photo Apr 05 2023, 11 09 31 AM.jpg"
import amy_noir from "../images/Team_Photos/Amy Black & White.jpg"
import larry_noir from "../images/Team_Photos/DSCF0924-Edit 1.jpg"
import dave_noir from "../images/Team_Photos/Dave Ring BW Suit.jpg"
import caitlin_noir from "../images/Team_Photos/Caitlin 1.jpg"






//1: tyler davis
//2: Zach Price
//3: Eric Schottgen, 
//4: Kori Marquez, 
//5: Berke Turktan, 
//6: Tim Smith, 
//7: Dan Rista, 
//8: Nathan Chambers, 
//9: Leticia Mendoza, 
//10: Chris Calvert, 
//11: Amy Casado, 
//12: Larry Gandelman, 
//13: Dave Ring, 
//14: Caitlin Siegle

const teamList =() => {
    let team = [ 
         {
            id: 1,
            Name: "Tyler Davis",
            Discription: `
            Tyler has 20 years of experience in construction, managing a wide variety of projects in occupied healthcare, new hospital expansions, medical office buildings, office, retail, multi-use residential, light industrial, and heavy civil. Founding Porter Consulting in 2006, Tyler built the company by approaching every project as if it was his own. As the owners’ representative and construction manager, he takes personal responsibility for the quality of the project from the design to the final product.
    
        `,
            Title: "President",
            Img_Color: tyler_color,
            // Img_Noir: tyler_Noir,
            alt: '',
        },
        {
            id: 2,
            Name: "Zach Price",
            Discription: `
            As Project Manager, Zach has responsibility to oversee the entire design and construction process. With over 15 years of experience as both a design professional and a construction project manager, Zach has both the training and practical experience to understand the unique perspectives of all project stakeholders, enabling him to ensure adherence to the owner’s budget, schedule, quality and safety expectations. He has expertise in the healthcare, mission critical and infrastructure upgrade markets, along with experience managing all key project delivery methods, including Design-Bid-Build, GMP, Design-Build, CM at Risk and Integrated Project Delivery. Zach is a Registered Professional Civil Engineer in the State of California and a member of the Design Build Institute of America(DBIA).
    
        `,
            Title: "Project Manager",
            Img_Color: zach_color,
            // Img_Noir: tyler_Noir,
            alt: '',
        },
        {
            id: 3,
            Name: "Eric Schottgen",
            Discription: `
            Eric has been in the construction industry for 15 years and has a breadth and depth of experience in all phases of construction. He possesses a scope of knowledge ranging from design, pre-construction, construction, to project closeout. With an eye for organization and detail, Eric has had success with numerous and varied building types including public and private labs, public buildings, assisted living facilities, multi-use residential buildings, CSU & UC projects, and more.
        `,
            Title: "Project Manager",
            // Img_Color: ,
            Img_Color: eric_noir,
            alt: '',
        },
        {
            id: 4,
            Name: "Kori Marquez",
            Discription: `
            Kori is a results-oriented professional with over 28 years of program, construction and project management experience managing all aspects of projects from concept through completion. She has an impeccable reputation as a leader that creates effective and collaborative teams that deliver projects with highly effective results. Her focus on delivering exceptional service to her clients has earned her enthusiastic clients and a consistent record of client retention.

            Kori’s experience includes project and executive level roles for both contractors and Owner’s. The experience provides for a unique perspective and skillset that is a key factor in the success of her projects.

            Kori has a variety of project experience that includes healthcare, hospitality, education, assisted living, office building, mixed-use, institutional, and public works projects. While her experience is varied, it has largely been focused on healthcare with projects ranging from the implementation of SPC-4D seismic work, to construction management of ambulatory medical office buildings to PMCM services for the California Northstate University’s $ 1 billion, teaching hospital program.

        `,
            Title: "Project Manager",
            Img_Color: kori_noir,
            // Img_Noir: tyler_Noir,
            alt: '',
        },
        {
            id: 5,
            Name: "Berke Turktan",
            Discription: `
            Berke has more than 20 years of real estate development, construction, and design-build experience. He holds a Masters in Construction Management from USC, and an MBA from UCLA. Having delivered over a combined value of $2 billion in construction projects in Southern California, Berke’s prime focus has been maximizing land value, structuring development deals and building project teams to bring success to medical, institutional, and mixed-use commercial projects.  
            Prior to joining Porter Management, Berke developed and sold his own condo development projects. Berke has also worked with UCLA faculty and industry leaders on legislation for streamlining development processes and procedures in Los Angeles. 

        `,
            Title: "Project Manager",
            Img_Color: berke_noir,
            // Img_Noir: tyler_Noir,
            alt: '',
        },
        {
            id: 6,
            Name: "Tim Smith",
            Discription: `
            Tim has over 20 years of experience in management. With experience in artist, project, construction, and design management he brings a wealth of varied experience. He has worked on projects in studio, themed entertainment, healthcare, laboratory, university campus, restaurant, and retail. Projects in size and scope that range from completely new lands at theme parks to a restaurant TI. Accelerated schedule, distressed project recovery, and quality control are specialties. Tim understands that projects must be complete/open on time. He approaches his projects with a team mindset. Communication is the key to any successful project, and communication at all levels is Tim’s strength. With a master’s degree in Management, and as a nationally certified soccer coach, he revels in being part diverse teams and forming processes and dynamics that lead to success.
        `,
            Title: "Project Manager",
            Img_Color: tim_noir,
            // Img_Noir: tyler_Noir,
            alt: '',
        },
        {
            id: 7,
            Name: "Dan Rista",
            Discription: `
            Daniel has 19 years of experience in commercial real estate as an executive overseeing operations comprising of acquisition, construction and property management. He is a versatile and entrepreneurial project manager with a proven track record of providing industry expertise and leadership to institutional investors and owners on various assets. Dan has worked on occupied healthcare, medical office buildings, mix-use multi family, assisted living facilities and offices that range in value from $10k to $90 Mil.  His success is accomplished through his abilities to provide expense control strategies, organization, creative and efficient operational/project management as well as strategic relationship building.
        `,
            Title: "Project Manager",
            Img_Color: dan_noir,
            // Img_Noir: tyler_Noir,
            alt: '',
        },
        {
            id: 8,
            Name: "Nathan Chambers",
            Discription: `
            Nathan has 36 years of construction experience. His formative professional years were spent building custom homes, followed by commercial projects like parking structures and hospitals. He brings a unique perspective to hospital projects, having been an orderly on the Code team early in his career, and then having remodeled hospitals while still in his tool-carrying years. Extremely well versed in the needs of patients and users within the facility during the actual construction phase, for the past nine years he has managed construction work effectively with all stakeholders as they continue the vital work of diagnosis and treatment. With his understanding of the language of healthcare, construction, and design, he cultivates and inspires confidence in the team as they pursue even the most audacious endeavors.
        `,
            Title: "Project Manager",
            Img_Color: chris_color,
            // Img_Noir: tyler_Noir,
            alt: '',
        },
        {
            id: 9,
            Name: "Leticia Mendoza",
            Discription: `
            Leticia has over 20 years experience in commercial, healthcare and residential construction project management.  She has a proven ability to plan and lead projects of varying sizes and scopes from initation through to completion. Leticia’s experience has built the agility and organizational skills needed to manage multiple projects concurrently and effciently.
        `,
            Title: "Project Manager",
            Img_Color: leticia_noir,
            // Img_Noir: tyler_Noir,
            alt: '',
        },
        {
            id: 10,
            Name: "Chris Calvert",
            Discription: `
            Chris Calvert has been actively involved in the General Contracting side of construction for the last 22 years before coming to Porter Consulting LLC.  He has extensive multi-disciplinary experience in commercial, mixed use developments, civil infrastructure improvements, Department of General Services (DGS), public works facilities and commercial building construction. He has managed projects of all sizes from smaller Tenant Improvements to 20+ acre ground up job sites to ground up hospitals. His experience as a General Contractor gives his clients a real-world perspective of potential risks.  Well versed in multiple project delivery methods including: Design-Bid-Build, Design-Build, Design-Assist, GMP and Lease/Lease Back.
    
        `,
            Title: "Project Manager",
            Img_Color: chris_color,
            // Img_Noir: tyler_Noir,
            alt: '',
        },
        {
            id: 11,
            Name: "Amy Casado",
            Discription: `
            If you were to ask Amy if she were interesting, her response would be “no”.  However she is really skilled at remodeling houses, like the ones you see in magazines. Having this type of experience and passion for building makes her a really great project manager. She’s good at making quick decisions to solve any challenge and is sweetly sarcastic. Her dream is to own a home in Hawaii, which is where you can find her on any one of her many vacations with her family
        `,
            Title: "Project Manager",
            Img_Color: amy_noir,
            // Img_Noir: tyler_Noir,
            alt: '',
        },
        {
            id: 14,
            Name: "Larry Gandelman",
            Discription: `
            Larry has over 30 years of construction and commercial real estate experience.  Having been an senior executive for two national design-build firms leading teams that were responsible for site selection, securing entitlements, architecture and engineering and construction, Larry has a deep and thorough knowledge of all aspect of project development and project management.  These projects areas included the following vertical markets: Financial, Healthcare and Education.  The projects in these three verticals ranged in project size from $50,000 to $75,000,000.  Those projects have included corporate headquarters, retail installations, critical care facilities, state of the art educational facilities and a myriad of commercial tenant improvement projects. Along with his extensive experience, Larry has a proven track record of representing his client’s needs and fulfilling their budget and schedule expectations.  
        `,
            Title: "Project Manager",
            Img_Color: larry_noir,
            // Img_Noir: tyler_Noir,
            alt: '',
        },
        {
            id: 13,
            Name: "Dave Ring",
            Discription: `
            Dave has over 40 years of design and construction experience. After 8 years of structural design, Dave joined OSHPD as a senior structural engineer reviewing plans for healthcare facilities before his 24 years as Supervisor, Health Facilities Review over seeing architects and engineers to ensure reasonable, timely reviews with proper code interpretations. He also supervised construction observation for nearly 4 years. While approving alternate method of compliance requests he developed a good working relationship with Licensing and Certification often guiding them on difficult issues. As the primary author of Policy Intent Notice (PIN) 50, Dave’s expertise has contributed to the success of many complex hospital projects utilizing Incremental, Phased and Collaborative Reviews considering LEAN and Integrated Project Delivery principles. Dave has designed and constructed many projects where the need to quickly resolve design and construction challenges made him aware that ensuring reasonable, timely reviews with proper code interpretations was important. Recognizing California’s healthcare needs, Dave’s common-sense approach and good judgement while enforcing regulations through his OSHPD tenure have made him highly respected within the hospital industry as a valued team player.
        `,
            Title: "Project Manager",
            Img_Color: dave_noir,
            // Img_Noir: tyler_Noir,
            alt: '',
        },
        {
            id: 14,
            Name: "Caitlin Siegle",
            Discription: `
            Caitlin is new to the Construction Industry and is currently studying Construction Management Technology. She brings a fresh perspective to the projects she assists on and possesses excellent attention to detail. Caitlin is a solutions-oriented team player and enjoys the process of bringing a project to fruition. Seizing the opportunity to gain hands-on experience at Porter Consulting, she enthusiastically supports our Project Managers to keep things running at full steam.  Caitlin functions as Tyler’s right hand and is excited to grow with Porter Consulting.
        `,
            Title: "Project Manager",
            Img_Color: caitlin_noir,
            // Img_Noir: tyler_Noir,
            alt: '',
        },
        

    ]

    return team
}

export default teamList