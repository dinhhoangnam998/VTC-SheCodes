// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const plan = {
    id: 'plan',
    title: 'PLANS',
    type: 'group',
    children: [
        {
            id: 'it-2',
            title: 'IT 2',
            type: 'item',
            url: '/plan/it-2',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'abc-club',
            title: 'ABC Club',
            type: 'item',
            url: '/plan/abc-club',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'she-codes',
            title: 'SheCodes',
            type: 'item',
            url: '/plan/she-codes',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default plan;
