import { Layout } from "@/components/Layout/Layout";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { nunito_sans, titillium_web } from "@/fonts/fonts";


export default function OurStory() {

    return (
        <Layout>
            <PageWrapper pageHeader={'Our Story'} pageHeaderImg={'/zachary-nelson-98Elr-LIvD8-unsplash (1).jpg'}>
                <h1 className={nunito_sans.className}>Who we are</h1>
                <p className={titillium_web.className}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </PageWrapper>
        </Layout>
    )
}