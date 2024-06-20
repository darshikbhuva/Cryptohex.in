import DashboardLayout from "../../Componants/DashboardLayout";
import { Stack } from "@chakra-ui/react";
import SupportCard from "./Components/SupportCard.jsx";
import ContactCard from "./Components/ContactCard.jsx";
import InfoCard from "../Dashboard/Componants/InfoCard.jsx";
import { IoChatbubbleOutline } from "react-icons/io5";
import { CiChat1 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const Support = () => {
  return (
    <DashboardLayout title="Support">
      <Stack spacing="5rem">
        <SupportCard
          icon={CiMail}
          leftComponent={<ContactCard />}
          title="Contact Us"
          text=" Have a question or just want to know more? Feel free to reach out to
          us."
        />
        <SupportCard
          icon={IoChatbubbleOutline}
          leftComponent={
            <InfoCard
              inverted={false}
              TagText="Chatbot"
              imgUrl="./public/grid_bg.svg"
              text="Chat with us now"
            />
          }
          title="Live Chat"
          text=" Don’t have time to wait for the answer? Chat with us now."
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
