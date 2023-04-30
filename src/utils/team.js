import tyler_color from "../images/Team_Photos/Tyler_Davis_Color.jpeg"
import zach_color from "../images/Team_Photos/Zach_Color.jpg"
import chris_color from "../images/Team_Photos/TOM_2540.jpg"

//1: tyler davis
//2: Zach Price
//3: Chris Calvert

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
            Name: "Chris Calvert",
            Discription: `
            Chris Calvert has been actively involved in the General Contracting side of construction for the last 22 years before coming to Porter Consulting LLC.  He has extensive multi-disciplinary experience in commercial, mixed use developments, civil infrastructure improvements, Department of General Services (DGS), public works facilities and commercial building construction. He has managed projects of all sizes from smaller Tenant Improvements to 20+ acre ground up job sites to ground up hospitals. His experience as a General Contractor gives his clients a real-world perspective of potential risks.  Well versed in multiple project delivery methods including: Design-Bid-Build, Design-Build, Design-Assist, GMP and Lease/Lease Back.
    
        `,
            Title: "Project Manager",
            Img_Color: chris_color,
            // Img_Noir: tyler_Noir,
            alt: '',
        },




    ]

    return team
}

export default teamList