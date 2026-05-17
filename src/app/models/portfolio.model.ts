export interface Skill {
    name: string;
    icon: string;
    description: string;
    // level: number; // 0-100
    accentColor: string;
  }
  
//   export interface Experience {
//     period: string;
//     role: string;
//     company: string;
//     location: string;
//     description: string;
//     tags: string[];
//   }
  
  export interface Project {
    number: string;
    category: string;
    title: string;
    description: string;
    stack: string[];
  }
  
  export interface NavLink {
    label: string;
    fragment: string;
  }
  
  export interface ContactDetails{
    email:string;
    location: string;
    number:string;
  }