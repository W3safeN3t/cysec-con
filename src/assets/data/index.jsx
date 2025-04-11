import Seeker from '../images/Seeker.png';
import Shortollabb from '../images/Shortollabb.png';
import Paperless from '../images/Paperless.png';
import Alx from '../images/Alx.png';
import Moducode from '../images/Moducode.png';
import Mavrest from '../images/Mavrest.png';
import CSSSA from '../images/CSSSA.png';
import GDGI from '../images/GDGI.png';
import Ideate from '../images/Ideate.png';
import CyberKairos from '../images/CyberKairos.png';
import CyberPatron from '../images/CyberPatron.png';
import Techpeaklab from '../images/Techpeaklab.png';
import IEN from '../images/IEN.jpg';
import LCU from '../images/LCU.png';
import Adeyinka from '../images/Adeyinka.png';
import Amir from '../images/Al-Amir.png';
import Daniel from '../images/Daniel.png';
import Elizabeth from '../images/Elizabeth.png';
import Oluwaseun from '../images/Oluwaseun.png';
import Oyekunle from '../images/Oyekunle.jpeg';
import Adesola from '../images/Adesola.jpg';
import Olumayowa from '../images/Olumayowa.jpg';
import Umar from '../images/Umar.jpg';
import Bukola from '../images/Bukola.jpg';
import Akinade from '../images/Akinadee.jpg';
import Kikelomo from '../images/Kikelomo.png';
import Oluwat from '../images/Oluwat.jpg';
import img1 from '../images/Gallery1.png';
import img2 from '../images/Gallery2.png';
import img3 from '../images/Gallery3.png';
import img4 from '../images/Gallery4.png';
import img5 from '../images/Gallery5.png';
import img6 from '../images/Gallery6.png';
import img7 from '../images/Gallery7.png';
import img8 from '../images/Gallery8.png';
import img9 from '../images/Gallery9.png';
import img10 from '../images/Gallery10.png';
import { FaAward, FaBriefcase, FaFlag, FaMicrophone, FaUsers, FaTools, FaGamepad, FaShoppingBag } from "react-icons/fa";

export const items = [
  { icon: <FaAward className="text-white text-3xl" />, title: "Awards & Recognitions", text: "Celebrate outstanding achievements in cybersecurity with exclusive awards." },
  { icon: <FaBriefcase className="text-white text-3xl" />, title: "Career Villages", text: "Connect with mentors, polish your skills, and unlock pathways to your dream cybersecurity career." },
  { icon: <FaFlag className="text-white text-3xl" />, title: "CTF Challenge", text: "Put your skills to the test in thrilling cybersecurity challenges." },
  { icon: <FaMicrophone className="text-white text-3xl" />, title: "Experts Talks", text: "Learn from top cybersecurity leaders and innovators." },
  { icon: <FaUsers className="text-white text-3xl" />, title: "Networking", text: "Build valuable connections with industry professionals." },
  { icon: <FaTools className="text-white text-3xl" />, title: "Workshop", text: "Master practical techniques through hands-on training." },
  { icon: <FaGamepad className="text-white text-3xl" />, title: "Side Attraction", text: "Fun hands-on activities that explore real-world hacking techniques." },
  { icon: <FaShoppingBag className="text-white text-3xl" />, title: "Swag & Merchandise", text: "Take home exclusive event-themed goodies." },
];

export const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export const navItems = [
    { label: "About Us", href: "#" },
    { label: "Our Speakers", href: "#" },
    { label: "Join Our Community", href: "#" },
  ];

  export const speakers = [
    {
      image: Oluwat,
      name: 'Oluwatumininu Olutayo',
      social: {
        facebook: '',
        instagram: '',
        github: '',
        twitter: 'https://x.com/loccdlocs',
      },
      category: 'Hosts',
    },
    {
      image: Kikelomo,
      name: 'Aroyehun Kikelomo',
      social: {
        facebook: '',
        instagram: '',
        github: '',
        twitter: 'https://x.com/ar22793',
      },
      category: 'Hosts',
    },
    {
      image: Akinade,
      name: 'Akinade Bidemi John',
      social: {
        facebook: '',
        instagram: '',
        github: '',
        twitter: 'https://x.com/thariskyjohn',
      },
      category: 'Hosts',
    },

    {
      image: Olumayowa,
      name: 'Olúmáyòwá Akinkuehinmi',
      description:
        "Olúmáyòwá is a passionate tech enthusiast with a diverse career spanning enterprise networking, network security, and optical transport engineering. A dedicated community supporter, Olúmáyòwá instructs DevNet and Cyber Security courses at Cisco Networking Academy and is recognized as a Cisco Champion.",
      social: {
        facebook: '',
        instagram: '',
        github: '',
        twitter: 'https://x.com/akintunero',
      },
      category: 'Panelists',
    }, 
    {
      image: Adesola,
      name: 'Adesola Oguntimehin',
      description:
        "Adesola Oguntimehin is a seasoned Cybersecurity GRC professional and educator with extensive experience across diverse industries. She specializes in integrating technology and strategic frameworks to help organizations achieve regulatory compliance, drive growth, and mitigate risks effectively.",
      social: {
        facebook: '',
        instagram: '',
        github: '',
        twitter: 'https://x.com/Deejustdee',
      },
      category: 'Panelists',
    }, 
    {
      image: Umar,
      name: 'Umar Farouk Farouk',
      description:
        " Umar Farouk is currently the Cybersecurity Lead at Trade Modernisation Project Limited. He specializes in implementing risk informed frameworks, specifically the NIST RMF and has successfully driven the adoption of these frameworks, ensuring alignment with organizational goals and regulatory requirements.",
      social: {
        facebook: '',
        instagram: '',
        github: '',
        twitter: 'https://x.com/Cyber_GRC',
      },
      category: 'Panelists',
    }, 

    {
      image: Elizabeth,
      name: 'Elizabeth Ekedoro',
      title: '[~/Soft Skills]',
      description:
        "Elizabeth is a Security Operations Center (SOC) Analyst with a strong commitment to advancing cybersecurity and promoting diversity in the field. She has participated in programs like the CyberGirls Fellowship (2023), SANS Cyber Talent Academy, and Digiss LLC's Internship (2024).",
      social: {
        facebook: '',
        instagram: '',
        github: '',
        twitter: 'https://x.com/Lizettle_',
      },
      category: 'Village Chiefs',
    },
    {
      image: Daniel,
      name: 'Daniel W. Dieterle',
      title: '[~/Red Team] Hardware Hacking',
      description:
        "Daniel has worked in the IT field for over 20 years. In the beginning he performed IT Support and also worked as both a Network Engineer and Systems Engineer. Daniel has also assisted with creating numerous security training classes and technical training books by other authors, and enjoys helping out those new to the field.",
      social: {
        facebook: '',
        instagram: '',
        github: '',
        twitter: 'https://x.com/Cyberarms',
      },
      category: 'Village Chiefs',
    },
    {
      image: Amir,
      name: 'Al-Amir Badmus',
      title: '[~/Red Team] Mobile App Hacking',
      description:
        "Badmus is an experienced Application Security Engineer specializing in securing software applications across industries like telecommunications, banking, and consulting. His expertise includes threat modeling, secure code review, vulnerability assessments, penetration testing, and security control implementation.",
      social: {
        facebook: '',
        instagram: '',
        github: '',
        twitter: 'https://x.com/commando_skiipz',
      },
      category: 'Village Chiefs',
    },
    {
      image: Oluwaseun,
      name: 'Oluwaseun Alausa',
      title: '[~/DevSecOps] Career',
      description:
        "Oluwaseun began his career as a Systems and Network Technician in 2011 at Infinity Snacks, a leading FMCG company. Over the years, he has transitioned through various roles in Cloud and DevOps and currently serves as a DevSecOps Engineer at Fruition Bridge",
      social: {
        facebook: '',
        instagram: '',
        github: '',
        twitter: '',
      },
      category: 'Village Chiefs',
    },
    {
      image: Oyekunle,
      name: 'Oyekunle Abdulrahman',
      title: '[~/Red Team] Web',
      description:
        "Abdulrahman, also known as Nerdy Genii, is a professional with expertise in penetration testing, DevSecOps, and digital forensics. As a skilled CTF competitor and security researcher, he has won several competitions, He also works on creating CTF challenges. Beyond security, he loves anime, gaming, and memes.",
      social: {
        facebook: '',
        instagram: '',
        github: '',
        twitter: 'https://x.com/Nerdy_genii',
      },
      category: 'Village Chiefs',
    },
    {
      image: Adeyinka,
      name: 'Adeyinka Ekundayo Oloyede',
      title: '[~/Blue Team] SOC',
      description:
        "Adeyinka is a Cybersecurity Analyst with Access Bank Nigeria, where he provides first-line support for security operations across multiple subsidiaries. Passionate about security awareness, he actively contributes to the cybersecurity community through mentorship and technical workshops.",
      social: {
        facebook: '',
        instagram: '',
        github: '',
        twitter: 'https://x.com/brodaishola_',
      },
      category: 'Village Chiefs',
    },
    {
      image: Bukola,
      name: 'Bukola Adbullahi',
      title: '[~/GRC]',
      description:
        "Bukola Abdullahi is a dedicated Governance and Compliance Analyst with a strong focus on corporate governance, regulatory compliance, and policy development. She plays a vital role in ensuring that organizations operate within established legal and ethical frameworks while fostering accountability and transparency.",
      social: {
        facebook: '',
        instagram: '',
        github: '',
        twitter: '',
      },
      category: 'Village Chiefs',
    },
  ];

export const partners = [
    {image: Seeker},
    {image: Shortollabb},
    {image: Paperless},
    {image: Alx},
    {image: Moducode},
    {image: Mavrest},
    {image: Techpeaklab},
    {image: CSSSA},
    {image: Ideate},
    {image: CyberKairos},
    {image: CyberPatron},
    {image: GDGI},
    {image: LCU},
    {image: IEN},
];
  