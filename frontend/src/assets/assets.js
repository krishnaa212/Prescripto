import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Rajeev Sharma',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Sharma is dedicated to delivering comprehensive healthcare with a focus on preventive medicine and timely diagnosis.',
        fees: 500,
        address: {
            line1: 'Salt Lake Sector I',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Neha Mehta',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Mehta offers expert gynecological care and emphasizes patient comfort and awareness.',
        fees: 600,
        address: {
            line1: 'Park Street',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Ananya Roy',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Roy provides effective treatment for skin, hair, and nail conditions.',
        fees: 300,
        address: {
            line1: 'Gariahat Road',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Karan Malhotra',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Malhotra ensures compassionate and thorough pediatric care.',
        fees: 400,
        address: {
            line1: 'Behala Chowrasta',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Priya Desai',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Desai specializes in treating disorders of the brain and nervous system with modern techniques.',
        fees: 500,
        address: {
            line1: 'New Alipore Block A',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Manish Reddy',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Reddy is experienced in diagnosing and treating a wide range of neurological disorders.',
        fees: 500,
        address: {
            line1: 'Lake Gardens',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Kavita Iyer',
        image: doc7,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Iyer focuses on preventive health and chronic disease management.',
        fees: 500,
        address: {
            line1: 'Ballygunge Place',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Arjun Kapoor',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Kapoor provides expert care in women’s health and maternity.',
        fees: 600,
        address: {
            line1: 'Camac Street',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Riya Singh',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Singh offers advanced skincare treatments tailored to individual needs.',
        fees: 300,
        address: {
            line1: 'Prince Anwar Shah Road',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Aarav Nair',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Nair provides holistic care for infants, children, and adolescents.',
        fees: 400,
        address: {
            line1: 'Jodhpur Park',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Sneha Bhatt',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Bhatt specializes in the treatment of epilepsy, stroke, and movement disorders.',
        fees: 500,
        address: {
            line1: 'Kasba, Ruby Connector',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Varun Gupta',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Gupta provides accurate diagnosis and management of neurological conditions.',
        fees: 500,
        address: {
            line1: 'Dum Dum Road',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Meera Nambiar',
        image: doc13,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Nambiar promotes wellness and disease prevention through patient education.',
        fees: 500,
        address: {
            line1: 'Rashbehari Avenue',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Rohan Shetty',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Shetty specializes in prenatal care and women’s reproductive health.',
        fees: 600,
        address: {
            line1: 'Southern Avenue',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Anika Joshi',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Joshi combines cosmetic and clinical dermatology for optimal patient outcomes.',
        fees: 300,
        address: {
            line1: 'Tollygunge',
            line2: 'Kolkata, West Bengal'
        }
    }
];