import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWwrapper } from "@/components/Stick-wraper";
import { Header } from "./header";

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWwrapper>My stick Sidebar</StickyWwrapper>
      <FeedWrapper>
        <Header title="Portuguese">

        </Header>
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
