import Header from "@/components/layout/Header";
import NotificationFeed from "@/components/layout/NotificationFeed";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async  function getServerSideProps(context: NextPageContext) {
    const session = await  getSession(context);
    if (!session) {
        return {
            redirect:{
                destination: "/",
                permanent: false,
            }
        }
    }
    return {
        props: {
            session,
        },
    };
}

const Notification = () => {
    return (
        <>
        <Header showBackArrow label="Notifications"/>
        <NotificationFeed/>
        </>
    );
};

export default Notification;