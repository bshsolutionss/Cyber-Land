export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface Announcement {
  text: string;
  href: string | null;
}

export interface FooterLink {
  label: string;
  href: string;
}
