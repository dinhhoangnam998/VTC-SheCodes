// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const workspaces = {
    id: 'workspaces',
    title: 'WORKSPACES',
    // caption: 'Pages Caption',
    type: 'group',
    children: [
        {
            id: 'it-2',
            title: 'IT 2',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'it2-computer-vision',
                    title: 'Computer Vision',
                    type: 'collapse',
                    children: [
                        {
                            id: 'tasks',
                            title: 'Tasks',
                            type: 'item',
                            url: '/workspaces/tasks/it-2/computer-vision'
                        },
                        {
                            id: 'member',
                            title: 'Members',
                            type: 'item',
                            url: '/workspaces/members/it-2/computer-vision'
                        },
                        {
                            id: 'chat',
                            title: 'Chat',
                            type: 'item',
                            url: '/workspaces/chat/it-2/computer-vision'
                        }
                    ]
                },

                {
                    id: 'it2-machine-learning',
                    title: 'Machine Learning',
                    type: 'collapse',
                    children: [
                        {
                            id: 'tasks',
                            title: 'Tasks',
                            type: 'item',
                            url: '/workspaces/tasks/it-2/machine-learning/'
                        },
                        {
                            id: 'member',
                            title: 'Members',
                            type: 'item',
                            url: '/workspaces/members/it-2/machine-learning/'
                        },
                        {
                            id: 'chat',
                            title: 'Chat',
                            type: 'item',
                            url: '/workspaces/chat/it-2/machine-learning/'
                        }
                    ]
                },
                {
                    id: 'it2-compiler',
                    title: 'Compiler',
                    type: 'item',
                    url: '/workspaces/she-codes/compiler'
                }
            ]
        },
        {
            id: 'abc-club',
            title: 'ABC Club',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'project-management',
                    title: 'Project Management',
                    type: 'item',
                    url: '/workspaces/abc-club/project-management'
                }
            ]
        },
        {
            id: 'she-codes',
            title: 'She Codes',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'hackathon',
                    title: 'Hackathon',
                    type: 'item',
                    url: '/workspaces/she-codes/hackathon'
                },

                {
                    id: 'web-programming',
                    title: 'Web Programming',
                    type: 'item',
                    url: '/workspaces/abc-club/web-programming'
                }
            ]
        }
    ]
};

export default workspaces;
