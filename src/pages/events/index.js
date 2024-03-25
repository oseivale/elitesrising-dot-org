import Calendar from "@/components/Calendar/Calendar";
import { Layout } from "@/components/Layout/Layout";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { nunito_sans, titillium_web } from "@/fonts/fonts";

export const events = [
    { id: 1, title: 'Boom in younger volunteers following pandemic', time: '12pm-1:30pm', location: 'Toronto, ON', date: '2024-3-25', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 2, title: 'Summit to focus on responsible use of AI in fundraising', time: '12pm-1:30pm', location: 'Toronto, ON', date: '2024-3-26', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 3, title: 'Wine and food pairing perfection', time: '12pm-1:30pm', location: 'Toronto, ON', date: '2024-3-23', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 4, title: 'Excitement From A Quote About Charity', time: '12pm-1:30pm', location: 'Toronto, ON', date: '2024-3-28', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 5, title: 'Provide Pure Water And Fresh Food For Syrian', time: '12pm-1:30pm', location: 'Toronto, ON', date: '2024-3-22', description: 'I have traced the Rebel spies to her. Now she is my only link to finding their secret base. What?! I care. So, what do you think of her, Han? The Force is strong with this one. I have you now. ' },
];

export default function Events() {

    return (
        <Layout>
            <PageWrapper pageHeader={'Events'} pageHeaderImg={'/panos-sakalakis-63sI4HO30tw-unsplash.jpg'}>
                <h1 className={nunito_sans.className}>{`What's going on?`}</h1>
                <p className={titillium_web.className}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                <Calendar events={events} />
            </PageWrapper>
        </Layout>
    )
}