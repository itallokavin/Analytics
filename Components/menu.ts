export type MenuItem= {
    label: string;
    href?: string | null;
    items?: MenuItem[];
}

const menu: MenuItem[] = [
    {
        label: "Home",
        href: "/"
    },

    {
        label: "Logs",
        items: [
            {
                label: "Portabilidade",
                href: "/portabilidade"
            },
        ],
    },
    
];

export default menu;