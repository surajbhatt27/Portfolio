export type PageId =
    | "about"
    | "projects"
    | "skills"
    | "contact"
    | "experience";
    
    
export type setActivePageType = {
    setActivePage: (page: PageId | null) => void;
};

