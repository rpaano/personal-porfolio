import { IconType } from "react-icons";

export interface ServiceContract {
    title: string,
    about: string,
    Icon: IconType,
}

export interface SkillContract {
    name: string,
    level: string,
    Icon: IconType,
}

export interface Project {
    id: number,
    name: string,
    description: string,
    image_path: string,
    deployed_url: string,
    github_url: string,
    category: Category[],
    key_techs: string[],
}

export type Category = "react" | "node" | "express" | "django" | "mongo";