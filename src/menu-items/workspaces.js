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
                    id: 'computer-vision',
                    title: 'Computer Vision',
                    type: 'collapse',
                    children: [
                        {
                            id: 'tasks',
                            title: 'Tasks',
                            type: 'item',
                            url: '/workspaces/it-2/computer-vision/tasks'
                            // target: true
                        },
                        {
                            id: 'member',
                            title: 'Members',
                            type: 'item',
                            url: '/workspaces/it-2/computer-vision/members'
                            // target: true
                        },
                        {
                            id: 'chat',
                            title: 'Chat',
                            type: 'item',
                            url: '/workspaces/it-2/computer-vision/chat'
                            // target: true
                        }
                    ]
                },

                {
                    id: 'machine-learning',
                    title: 'Machine Learning',
                    type: 'collapse',
                    children: [
                        {
                            id: 'tasks',
                            title: 'Tasks',
                            type: 'item',
                            url: '/workspaces/it-2/machine-learning/tasks'
                        },
                        {
                            id: 'member',
                            title: 'Members',
                            type: 'item',
                            url: '/workspaces/it-2/machine-learning/members'
                        },
                        {
                            id: 'chat',
                            title: 'Chat',
                            type: 'item',
                            url: '/workspaces/it-2/machine-learning/chat'
                        }
                    ]
                },
                {
                    id: 'compiler',
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
                    url: '/workspaces/abc-club/project-management',
                    target: true
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
                    url: '/workspaces/she-codes/hackathon',
                    target: true
                },

                {
                    id: 'web-programming',
                    title: 'Web Programming',
                    type: 'item',
                    url: '/workspaces/abc-club/web-programming',
                    target: true
                }
            ]
        }
    ]
};

export default workspaces;
